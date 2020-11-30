import TransportStream from 'winston-transport'
import { SyslogPrority, Journald } from 'sd-journald'
import { Map as ImmutableMap, fromJS } from 'immutable'
import { LEVEL, MESSAGE, SPLAT } from 'triple-beam'

export interface Options extends TransportStream.TransportStreamOptions {
    /* systemd syslog identifier */
    identifier?: string;
    /* Use finalizing formatter message as message sent to systemd */
    messageAsFinalizingFormat?: boolean;
}

export default class WinstonJournald extends TransportStream {
    journald: Journald
    messageAsFinalizingFormat: boolean
    constructor(options: Options) {
        super(options)

        if (options.identifier) {
            this.journald = new Journald(options.identifier)
        } else {
            this.journald = new Journald()
        }

        if (options.messageAsFinalizingFormat) {
            this.messageAsFinalizingFormat = true
        } else {
            this.messageAsFinalizingFormat = false
        }
    }

    /* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */
    log(info: any, next: () => void): void {
        setImmediate(() => {
            this.emit('logged', info);
        });

        /* eslint-disable @typescript-eslint/no-unused-vars */
        const { _level, message, [LEVEL]: level, [SPLAT]: _splat, [MESSAGE]: finalizedMessage, ...meta } = info;
        const priority = WinstonJournald.toPriority(level)
        const extra: ImmutableMap<string, any> = fromJS(meta)
        this.journald.send(
            priority,
            this.messageAsFinalizingFormat ? finalizedMessage : message,
            extra.mapEntries(([k, v]) => [k, WinstonJournald.toString(v)])
        )

        next();
    }

    close(): void {
        if (this.journald.socket) {
            this.journald.socket.close()
        }
    }

    static toString(value: any): string {
        if (typeof value === 'object') {
            return JSON.stringify(value)
        }
        const str = new String(value)
        return str.valueOf()
    }

    static toPriority(level: string): SyslogPrority {
        switch (level) {
            case "emerg":
                return SyslogPrority.EMERG;
            case "alert":
                return SyslogPrority.ALERT;
            case "crit":
                return SyslogPrority.CRIT;
            case "error":
                return SyslogPrority.ERROR;
            case "warning":
                return SyslogPrority.WARN;
            case "notice":
                return SyslogPrority.NOTICE;
            case "info":
                return SyslogPrority.INFO;
            case "debug":
                return SyslogPrority.DEBUG;
            default:
                return SyslogPrority.DEBUG
        }
    }
}