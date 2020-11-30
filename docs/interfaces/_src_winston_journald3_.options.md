**[winston-journald3](../README.md)**

> [Globals](../globals.md) / ["src/winston-journald3"](../modules/_src_winston_journald3_.md) / Options

# Interface: Options

## Hierarchy

* [TransportStreamOptions](_src_winston_journald3_.winstonjournald.transportstreamoptions.md)

  ↳ **Options**

## Index

### Properties

* [format](_src_winston_journald3_.options.md#format)
* [handleExceptions](_src_winston_journald3_.options.md#handleexceptions)
* [identifier](_src_winston_journald3_.options.md#identifier)
* [level](_src_winston_journald3_.options.md#level)
* [messageAsFinalizingFormat](_src_winston_journald3_.options.md#messageasfinalizingformat)
* [silent](_src_winston_journald3_.options.md#silent)

### Methods

* [close](_src_winston_journald3_.options.md#close)
* [log](_src_winston_journald3_.options.md#log)
* [logv](_src_winston_journald3_.options.md#logv)

## Properties

### format

• `Optional` **format**: logform.Format

*Inherited from [Options](_src_winston_journald3_.options.md).[format](_src_winston_journald3_.options.md#format)*

*Defined in node_modules/winston-transport/index.d.ts:26*

___

### handleExceptions

• `Optional` **handleExceptions**: undefined \| false \| true

*Inherited from [Options](_src_winston_journald3_.options.md).[handleExceptions](_src_winston_journald3_.options.md#handleexceptions)*

*Defined in node_modules/winston-transport/index.d.ts:29*

___

### identifier

• `Optional` **identifier**: undefined \| string

*Defined in [src/winston-journald3.ts:8](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L8)*

___

### level

• `Optional` **level**: undefined \| string

*Inherited from [Options](_src_winston_journald3_.options.md).[level](_src_winston_journald3_.options.md#level)*

*Defined in node_modules/winston-transport/index.d.ts:27*

___

### messageAsFinalizingFormat

• `Optional` **messageAsFinalizingFormat**: undefined \| false \| true

*Defined in [src/winston-journald3.ts:10](https://github.com/sargun/winston-journald3/blob/ec8c754/src/winston-journald3.ts#L10)*

___

### silent

• `Optional` **silent**: undefined \| false \| true

*Inherited from [Options](_src_winston_journald3_.options.md).[silent](_src_winston_journald3_.options.md#silent)*

*Defined in node_modules/winston-transport/index.d.ts:28*

## Methods

### close

▸ `Optional`**close**(): void

*Inherited from [Options](_src_winston_journald3_.options.md).[close](_src_winston_journald3_.options.md#close)*

*Defined in node_modules/winston-transport/index.d.ts:33*

**Returns:** void

___

### log

▸ `Optional`**log**(`info`: any, `next`: () => void): any

*Inherited from [Options](_src_winston_journald3_.options.md).[log](_src_winston_journald3_.options.md#log)*

*Defined in node_modules/winston-transport/index.d.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`info` | any |
`next` | () => void |

**Returns:** any

___

### logv

▸ `Optional`**logv**(`info`: any, `next`: () => void): any

*Inherited from [Options](_src_winston_journald3_.options.md).[logv](_src_winston_journald3_.options.md#logv)*

*Defined in node_modules/winston-transport/index.d.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`info` | any |
`next` | () => void |

**Returns:** any
