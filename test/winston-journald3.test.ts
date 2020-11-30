import winston from 'winston'
import journald3 from '../src/winston-journald3'
import { spawn } from 'child_process'

async function journalctl(cmd: string): Promise<string> {
    return new Promise((resolve) => {
        let args = ['-f', '-o', 'json', '-n', '1000']
        args = args.concat(cmd.split(' '))
        const subprocess = spawn('journalctl', args)
        let body = ''
        subprocess.stdout.on('data', (data) => {
            body += data
            if (body.includes('\n')) {
                subprocess.unref()
                subprocess.kill(9)
            }
        })
        subprocess.stdout.on('end', () => {
            resolve(body)
        })
    })

}

describe('Winston End-to-End Suite', () => {
    let t = test
    const journald = new journald3({ 'identifier': 'winstontest' })
    if (!journald.journald.socket) {
        t = t.skip
    }
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        defaultMeta: { service: 'user-service' },
        transports: [
            journald
        ]
    })

    t('Basic log entry', async () => {
        logger.info("testmessage") // This is async
        const body = await journalctl(`MESSAGE=testmessage _PID=${process.pid}`)
        console.log(`body: ${body}`)
        expect(JSON.parse(body)).toMatchObject({ "MESSAGE": "testmessage" })
    })


    t('Log entry with fields', async () => {
        logger.info("fieldsmessage", { "testkey": "value" })
        const body = await journalctl(`MESSAGE=fieldsmessage _PID=${process.pid}`)
        console.log(`body: ${body}`)
        expect(JSON.parse(body)).toMatchObject({ 'TESTKEY': 'value', 'MESSAGE': 'fieldsmessage', 'SYSLOG_IDENTIFIER': 'winstontest' })
    })

    t('Log entry with non-string fields', async () => {
        logger.info("non-string", { "int": 3 })
        const body = await journalctl(`MESSAGE=non-string _PID=${process.pid}`)
        console.log(`body: ${body}`)
        expect(JSON.parse(body)).toMatchObject({ 'INT': '3' })
    })
})