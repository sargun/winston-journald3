**[winston-journald3](../README.md)**

> [Globals](../globals.md) / ["src/winston-journald3"](../modules/_src_winston_journald3_.md) / WinstonJournald

# Class: WinstonJournald

## Hierarchy

* TransportStream

  ↳ **WinstonJournald**

## Implements

* WritableStream

## Index

### Interfaces

* [TransportStreamOptions](../interfaces/_src_winston_journald3_.winstonjournald.transportstreamoptions.md)

### Constructors

* [constructor](_src_winston_journald3_.winstonjournald.md#constructor)

### Properties

* [destroyed](_src_winston_journald3_.winstonjournald.md#destroyed)
* [format](_src_winston_journald3_.winstonjournald.md#format)
* [handleExceptions](_src_winston_journald3_.winstonjournald.md#handleexceptions)
* [journald](_src_winston_journald3_.winstonjournald.md#journald)
* [level](_src_winston_journald3_.winstonjournald.md#level)
* [messageAsFinalizingFormat](_src_winston_journald3_.winstonjournald.md#messageasfinalizingformat)
* [silent](_src_winston_journald3_.winstonjournald.md#silent)
* [writable](_src_winston_journald3_.winstonjournald.md#writable)
* [writableEnded](_src_winston_journald3_.winstonjournald.md#writableended)
* [writableFinished](_src_winston_journald3_.winstonjournald.md#writablefinished)
* [writableHighWaterMark](_src_winston_journald3_.winstonjournald.md#writablehighwatermark)
* [writableLength](_src_winston_journald3_.winstonjournald.md#writablelength)
* [writableObjectMode](_src_winston_journald3_.winstonjournald.md#writableobjectmode)
* [defaultMaxListeners](_src_winston_journald3_.winstonjournald.md#defaultmaxlisteners)

### Methods

* [\_destroy](_src_winston_journald3_.winstonjournald.md#_destroy)
* [\_final](_src_winston_journald3_.winstonjournald.md#_final)
* [\_write](_src_winston_journald3_.winstonjournald.md#_write)
* [\_writev](_src_winston_journald3_.winstonjournald.md#_writev)
* [addListener](_src_winston_journald3_.winstonjournald.md#addlistener)
* [close](_src_winston_journald3_.winstonjournald.md#close)
* [cork](_src_winston_journald3_.winstonjournald.md#cork)
* [destroy](_src_winston_journald3_.winstonjournald.md#destroy)
* [emit](_src_winston_journald3_.winstonjournald.md#emit)
* [end](_src_winston_journald3_.winstonjournald.md#end)
* [eventNames](_src_winston_journald3_.winstonjournald.md#eventnames)
* [getMaxListeners](_src_winston_journald3_.winstonjournald.md#getmaxlisteners)
* [listenerCount](_src_winston_journald3_.winstonjournald.md#listenercount)
* [listeners](_src_winston_journald3_.winstonjournald.md#listeners)
* [log](_src_winston_journald3_.winstonjournald.md#log)
* [logv](_src_winston_journald3_.winstonjournald.md#logv)
* [off](_src_winston_journald3_.winstonjournald.md#off)
* [on](_src_winston_journald3_.winstonjournald.md#on)
* [once](_src_winston_journald3_.winstonjournald.md#once)
* [pipe](_src_winston_journald3_.winstonjournald.md#pipe)
* [prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)
* [prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)
* [rawListeners](_src_winston_journald3_.winstonjournald.md#rawlisteners)
* [removeAllListeners](_src_winston_journald3_.winstonjournald.md#removealllisteners)
* [removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)
* [setDefaultEncoding](_src_winston_journald3_.winstonjournald.md#setdefaultencoding)
* [setMaxListeners](_src_winston_journald3_.winstonjournald.md#setmaxlisteners)
* [uncork](_src_winston_journald3_.winstonjournald.md#uncork)
* [write](_src_winston_journald3_.winstonjournald.md#write)
* [listenerCount](_src_winston_journald3_.winstonjournald.md#listenercount)
* [toPriority](_src_winston_journald3_.winstonjournald.md#topriority)
* [toString](_src_winston_journald3_.winstonjournald.md#tostring)

## Constructors

### constructor

\+ **new WinstonJournald**(`options`: [Options](../interfaces/_src_winston_journald3_.options.md)): [WinstonJournald](_src_winston_journald3_.winstonjournald.md)

*Overrides void*

*Defined in [src/winston-journald3.ts:15](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/_src_winston_journald3_.options.md) |

**Returns:** [WinstonJournald](_src_winston_journald3_.winstonjournald.md)

## Properties

### destroyed

•  **destroyed**: boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[destroyed](_src_winston_journald3_.winstonjournald.md#destroyed)*

*Defined in node_modules/@types/node/stream.d.ts:129*

___

### format

• `Optional` **format**: logform.Format

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[format](_src_winston_journald3_.winstonjournald.md#format)*

*Defined in node_modules/winston-transport/index.d.ts:12*

___

### handleExceptions

• `Optional` **handleExceptions**: undefined \| false \| true

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[handleExceptions](_src_winston_journald3_.winstonjournald.md#handleexceptions)*

*Defined in node_modules/winston-transport/index.d.ts:15*

___

### journald

•  **journald**: Journald

*Defined in [src/winston-journald3.ts:14](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L14)*

___

### level

• `Optional` **level**: undefined \| string

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[level](_src_winston_journald3_.winstonjournald.md#level)*

*Defined in node_modules/winston-transport/index.d.ts:13*

___

### messageAsFinalizingFormat

•  **messageAsFinalizingFormat**: boolean

*Defined in [src/winston-journald3.ts:15](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L15)*

___

### silent

• `Optional` **silent**: undefined \| false \| true

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[silent](_src_winston_journald3_.winstonjournald.md#silent)*

*Defined in node_modules/winston-transport/index.d.ts:14*

___

### writable

• `Readonly` **writable**: boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[writable](_src_winston_journald3_.winstonjournald.md#writable)*

*Defined in node_modules/@types/node/stream.d.ts:123*

___

### writableEnded

• `Readonly` **writableEnded**: boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[writableEnded](_src_winston_journald3_.winstonjournald.md#writableended)*

*Defined in node_modules/@types/node/stream.d.ts:124*

___

### writableFinished

• `Readonly` **writableFinished**: boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[writableFinished](_src_winston_journald3_.winstonjournald.md#writablefinished)*

*Defined in node_modules/@types/node/stream.d.ts:125*

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: number

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[writableHighWaterMark](_src_winston_journald3_.winstonjournald.md#writablehighwatermark)*

*Defined in node_modules/@types/node/stream.d.ts:126*

___

### writableLength

• `Readonly` **writableLength**: number

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[writableLength](_src_winston_journald3_.winstonjournald.md#writablelength)*

*Defined in node_modules/@types/node/stream.d.ts:127*

___

### writableObjectMode

• `Readonly` **writableObjectMode**: boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[writableObjectMode](_src_winston_journald3_.winstonjournald.md#writableobjectmode)*

*Defined in node_modules/@types/node/stream.d.ts:128*

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[defaultMaxListeners](_src_winston_journald3_.winstonjournald.md#defaultmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:30*

## Methods

### \_destroy

▸ **_destroy**(`error`: Error \| null, `callback`: (error?: Error \| null) => void): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[_destroy](_src_winston_journald3_.winstonjournald.md#_destroy)*

*Defined in node_modules/@types/node/stream.d.ts:133*

#### Parameters:

Name | Type |
------ | ------ |
`error` | Error \| null |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

### \_final

▸ **_final**(`callback`: (error?: Error \| null) => void): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[_final](_src_winston_journald3_.winstonjournald.md#_final)*

*Defined in node_modules/@types/node/stream.d.ts:134*

#### Parameters:

Name | Type |
------ | ------ |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

### \_write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: (error?: Error \| null) => void): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[_write](_src_winston_journald3_.winstonjournald.md#_write)*

*Defined in node_modules/@types/node/stream.d.ts:131*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

### \_writev

▸ `Optional`**_writev**(`chunks`: Array\<{ chunk: any ; encoding: string  }>, `callback`: (error?: Error \| null) => void): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[_writev](_src_winston_journald3_.winstonjournald.md#_writev)*

*Defined in node_modules/@types/node/stream.d.ts:132*

#### Parameters:

Name | Type |
------ | ------ |
`chunks` | Array\<{ chunk: any ; encoding: string  }> |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

### addListener

▸ **addListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[addListener](_src_winston_journald3_.winstonjournald.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:155*

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"drain\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[addListener](_src_winston_journald3_.winstonjournald.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:156*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"drain\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[addListener](_src_winston_journald3_.winstonjournald.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:157*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **addListener**(`event`: \"finish\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[addListener](_src_winston_journald3_.winstonjournald.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:158*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"finish\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"pipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[addListener](_src_winston_journald3_.winstonjournald.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:159*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **addListener**(`event`: \"unpipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[addListener](_src_winston_journald3_.winstonjournald.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:160*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"unpipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[addListener](_src_winston_journald3_.winstonjournald.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:161*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### close

▸ **close**(): void

*Overrides void*

*Defined in [src/winston-journald3.ts:51](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L51)*

**Returns:** void

___

### cork

▸ **cork**(): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[cork](_src_winston_journald3_.winstonjournald.md#cork)*

*Defined in node_modules/@types/node/stream.d.ts:141*

**Returns:** void

___

### destroy

▸ **destroy**(`error?`: Error): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[destroy](_src_winston_journald3_.winstonjournald.md#destroy)*

*Defined in node_modules/@types/node/stream.d.ts:143*

#### Parameters:

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** void

___

### emit

▸ **emit**(`event`: \"close\"): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[emit](_src_winston_journald3_.winstonjournald.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:163*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |

**Returns:** boolean

▸ **emit**(`event`: \"drain\"): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[emit](_src_winston_journald3_.winstonjournald.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:164*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"drain\" |

**Returns:** boolean

▸ **emit**(`event`: \"error\", `err`: Error): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[emit](_src_winston_journald3_.winstonjournald.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:165*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`err` | Error |

**Returns:** boolean

▸ **emit**(`event`: \"finish\"): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[emit](_src_winston_journald3_.winstonjournald.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:166*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"finish\" |

**Returns:** boolean

▸ **emit**(`event`: \"pipe\", `src`: Readable): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[emit](_src_winston_journald3_.winstonjournald.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:167*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pipe\" |
`src` | Readable |

**Returns:** boolean

▸ **emit**(`event`: \"unpipe\", `src`: Readable): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[emit](_src_winston_journald3_.winstonjournald.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:168*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"unpipe\" |
`src` | Readable |

**Returns:** boolean

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[emit](_src_winston_journald3_.winstonjournald.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:169*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** boolean

___

### end

▸ **end**(`cb?`: undefined \| () => void): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[end](_src_winston_journald3_.winstonjournald.md#end)*

*Defined in node_modules/@types/node/stream.d.ts:138*

#### Parameters:

Name | Type |
------ | ------ |
`cb?` | undefined \| () => void |

**Returns:** void

▸ **end**(`chunk`: any, `cb?`: undefined \| () => void): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[end](_src_winston_journald3_.winstonjournald.md#end)*

*Defined in node_modules/@types/node/stream.d.ts:139*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined \| () => void |

**Returns:** void

▸ **end**(`chunk`: any, `encoding`: string, `cb?`: undefined \| () => void): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[end](_src_winston_journald3_.winstonjournald.md#end)*

*Defined in node_modules/@types/node/stream.d.ts:140*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`cb?` | undefined \| () => void |

**Returns:** void

___

### eventNames

▸ **eventNames**(): Array\<string \| symbol>

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[eventNames](_src_winston_journald3_.winstonjournald.md#eventnames)*

*Defined in node_modules/@types/node/events.d.ts:45*

**Returns:** Array\<string \| symbol>

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[getMaxListeners](_src_winston_journald3_.winstonjournald.md#getmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:41*

**Returns:** number

___

### listenerCount

▸ **listenerCount**(`type`: string \| symbol): number

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[listenerCount](_src_winston_journald3_.winstonjournald.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:46*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[listeners](_src_winston_journald3_.winstonjournald.md#listeners)*

*Defined in node_modules/@types/node/events.d.ts:42*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### log

▸ **log**(`info`: any, `next`: () => void): void

*Overrides void*

*Defined in [src/winston-journald3.ts:33](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L33)*

#### Parameters:

Name | Type |
------ | ------ |
`info` | any |
`next` | () => void |

**Returns:** void

___

### logv

▸ `Optional`**logv**(`info`: any, `next`: () => void): any

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[logv](_src_winston_journald3_.winstonjournald.md#logv)*

*Defined in node_modules/winston-transport/index.d.ts:20*

#### Parameters:

Name | Type |
------ | ------ |
`info` | any |
`next` | () => void |

**Returns:** any

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[off](_src_winston_journald3_.winstonjournald.md#off)*

*Defined in node_modules/@types/node/events.d.ts:38*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**(`event`: \"close\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[on](_src_winston_journald3_.winstonjournald.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:171*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"drain\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[on](_src_winston_journald3_.winstonjournald.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:172*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"drain\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[on](_src_winston_journald3_.winstonjournald.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:173*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **on**(`event`: \"finish\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[on](_src_winston_journald3_.winstonjournald.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:174*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"finish\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"pipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[on](_src_winston_journald3_.winstonjournald.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:175*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **on**(`event`: \"unpipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[on](_src_winston_journald3_.winstonjournald.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:176*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"unpipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[on](_src_winston_journald3_.winstonjournald.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:177*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### once

▸ **once**(`event`: \"close\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[once](_src_winston_journald3_.winstonjournald.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:179*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"drain\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[once](_src_winston_journald3_.winstonjournald.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:180*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"drain\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[once](_src_winston_journald3_.winstonjournald.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:181*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **once**(`event`: \"finish\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[once](_src_winston_journald3_.winstonjournald.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:182*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"finish\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"pipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[once](_src_winston_journald3_.winstonjournald.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:183*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **once**(`event`: \"unpipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[once](_src_winston_journald3_.winstonjournald.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:184*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"unpipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[once](_src_winston_journald3_.winstonjournald.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:185*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### pipe

▸ **pipe**\<T>(`destination`: T, `options?`: undefined \| { end?: undefined \| false \| true  }): T

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[pipe](_src_winston_journald3_.winstonjournald.md#pipe)*

*Defined in node_modules/@types/node/stream.d.ts:5*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | WritableStream |

#### Parameters:

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined \| { end?: undefined \| false \| true  } |

**Returns:** T

___

### prependListener

▸ **prependListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:187*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"drain\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:188*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"drain\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:189*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependListener**(`event`: \"finish\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:190*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"finish\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"pipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:191*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **prependListener**(`event`: \"unpipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:192*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"unpipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependListener](_src_winston_journald3_.winstonjournald.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:193*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:195*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"drain\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:196*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"drain\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:197*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"finish\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:198*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"finish\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"pipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:199*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"unpipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:200*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"unpipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[prependOnceListener](_src_winston_journald3_.winstonjournald.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:201*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[rawListeners](_src_winston_journald3_.winstonjournald.md#rawlisteners)*

*Defined in node_modules/@types/node/events.d.ts:43*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeAllListeners](_src_winston_journald3_.winstonjournald.md#removealllisteners)*

*Defined in node_modules/@types/node/events.d.ts:39*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:203*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"drain\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:204*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"drain\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:205*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **removeListener**(`event`: \"finish\", `listener`: () => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:206*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"finish\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"pipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:207*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **removeListener**(`event`: \"unpipe\", `listener`: (src: Readable) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:208*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"unpipe\" |
`listener` | (src: Readable) => void |

**Returns:** this

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[removeListener](_src_winston_journald3_.winstonjournald.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:209*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[setDefaultEncoding](_src_winston_journald3_.winstonjournald.md#setdefaultencoding)*

*Defined in node_modules/@types/node/stream.d.ts:137*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** this

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[setMaxListeners](_src_winston_journald3_.winstonjournald.md#setmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:40*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### uncork

▸ **uncork**(): void

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[uncork](_src_winston_journald3_.winstonjournald.md#uncork)*

*Defined in node_modules/@types/node/stream.d.ts:142*

**Returns:** void

___

### write

▸ **write**(`chunk`: any, `cb?`: undefined \| (error: Error \| null \| undefined) => void): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[write](_src_winston_journald3_.winstonjournald.md#write)*

*Defined in node_modules/@types/node/stream.d.ts:135*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined \| (error: Error \| null \| undefined) => void |

**Returns:** boolean

▸ **write**(`chunk`: any, `encoding`: string, `cb?`: undefined \| (error: Error \| null \| undefined) => void): boolean

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[write](_src_winston_journald3_.winstonjournald.md#write)*

*Defined in node_modules/@types/node/stream.d.ts:136*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`cb?` | undefined \| (error: Error \| null \| undefined) => void |

**Returns:** boolean

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

*Inherited from [WinstonJournald](_src_winston_journald3_.winstonjournald.md).[listenerCount](_src_winston_journald3_.winstonjournald.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:29*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** number

___

### toPriority

▸ `Static`**toPriority**(`level`: string): SyslogPrority

*Defined in [src/winston-journald3.ts:65](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L65)*

#### Parameters:

Name | Type |
------ | ------ |
`level` | string |

**Returns:** SyslogPrority

___

### toString

▸ `Static`**toString**(`value`: any): string

*Defined in [src/winston-journald3.ts:57](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L57)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | any |

**Returns:** string
