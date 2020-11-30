**[winston-journald3](README.md)**

> [Globals](globals.md)

# Winston 3 Transport for Journald

  [![NPM Version][npm-image]][npm-url]
  [![Build][github-image]][github-url]
  [![codecov](https://codecov.io/gh/sargun/winston-journald3/branch/main/graph/badge.svg?token=91FMU8M65R)](https://codecov.io/gh/sargun/winston-journald3)

# [Documentation](https://github.com/sargun/winston-journald3/tree/main/docs)

# Why?
Winston has structured logging with non-structured messages as well. It's become
the ubiquitous solution in the logging space (alongside bunyan, and others). Structured
logs are nice.

Journald solves a number of problems around logs. It solves the problem of compression,
rotation, and storage on behalf of the application. Its format, and approach is congruent
with Winston, in that it supports structured logging as a "first class" primitive.

The intent of this Winston 3 transport is to be a lightweight wrapper journald. This,
being a native Winston 3 transport has some benefits over [winston-journald](https://github.com/RoCat/winston-journald),
a Winston 2 transport, like dynamic log levels.

Also this can compile, and be installed on Mac OS.

# Installation

## Yarn

```sh
yarn add winston-journald3
```

## npm

```
yarn add winston-journald3
```

# Options

```typescript
interface Options extends TransportStream.TransportStreamOptions {
    /* systemd syslog identifier */
    identifier?: string;
    /* Use finalizing formatter message as message sent to systemd */
    messageAsFinalizingFormat?: boolean;
}
```

# Examples

## Typescript

Basic usage example:

```typescript
import journald3 from 'winston-journald3'

const journald = new journald3({ 'identifier': 'winstontest' })
const logger = winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        defaultMeta: { service: 'user-service' },
        transports: [
            journald
        ]
    })

// Send a basic message
logger.info("testmessage")

// Send a message with metadata
logger.info("fieldsmessage", { "testkey": "value" })
```

Example output:

```json
{
  "_SYSTEMD_SESSION": "91",
  "_SOURCE_REALTIME_TIMESTAMP": "1606696055349487",
  "_GID": "1000",
  "_SYSTEMD_UNIT": "session-91.scope",
  "_TRANSPORT": "journal",
  "_SYSTEMD_OWNER_UID": "1000",
  "__CURSOR": "s=ee01b1e58fa04593b54f5c945114c4f5;i=1c64;b=204ba6d0b1bb40099b2ad31e83f351c5;m=158f35af90;t=5b54813a42167;x=b982ccf17f5ffbf7",
  "_SYSTEMD_SLICE": "user-1000.slice",
  "_PID": "593497",
  "_SYSTEMD_USER_SLICE": "-.slice",
  "_SYSTEMD_CGROUP": "/user.slice/user-1000.slice/session-91.scope",
  "TESTKEY": "value",
  "_SYSTEMD_INVOCATION_ID": "b7bb79f954304fc1bd570ed559e07901",
  "_CMDLINE": "/home/sargun/.nvm/versions/node/v12.20.0/bin/node /home/sargun/winston-journald3/node_modules/.bin/jest ./test --forceExit --coverage",
  "LEVEL": "info",
  "_EXE": "/home/sargun/.nvm/versions/node/v12.20.0/bin/node",
  "_UID": "1000",
  "_AUDIT_LOGINUID": "1000",
  "_COMM": "node",
  "_BOOT_ID": "204ba6d0b1bb40099b2ad31e83f351c5",
  "MESSAGE": "fieldsmessage",
  "_AUDIT_SESSION": "91",
  "__REALTIME_TIMESTAMP": "1606696055349607",
  "__MONOTONIC_TIMESTAMP": "92596973456",
  "PRIORITY": "6",
  "SERVICE": "user-service",
  "SYSLOG_IDENTIFIER": "winstontest",
  "_CAP_EFFECTIVE": "0",
  "_HOSTNAME": "ubuntu",
  "_SELINUX_CONTEXT": "unconfined\n",
  "_MACHINE_ID": "ad10428b70b952a9fe1a4386587e93fe"
}
```

## Vanilla Javascript

```javascript
// TODO: Can someone please fill this in?
```

# Caveats
Logs statements greater than 1 MB may not work.

[npm-image]: https://img.shields.io/npm/v/winston-journald3.svg
[npm-url]: https://npmjs.org/package/winston-journald3
[github-image]: https://github.com/sargun/winston-journald3/workflows/CI/badge.svg
[github-url]: https://github.com/sargun/winston-journald3/actions?query=workflow%3A%22CI%22
