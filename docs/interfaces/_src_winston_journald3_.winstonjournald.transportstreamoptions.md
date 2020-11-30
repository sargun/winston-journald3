**[winston-journald3](../README.md)**

> [Globals](../globals.md) / ["src/winston-journald3"](../modules/_src_winston_journald3_.md) / [WinstonJournald](../classes/_src_winston_journald3_.winstonjournald.md) / TransportStreamOptions

# Interface: TransportStreamOptions

## Hierarchy

* **TransportStreamOptions**

  ↳ [Options](_src_winston_journald3_.options.md)

## Index

### Properties

* [format](_src_winston_journald3_.winstonjournald.transportstreamoptions.md#format)
* [handleExceptions](_src_winston_journald3_.winstonjournald.transportstreamoptions.md#handleexceptions)
* [level](_src_winston_journald3_.winstonjournald.transportstreamoptions.md#level)
* [silent](_src_winston_journald3_.winstonjournald.transportstreamoptions.md#silent)

### Methods

* [close](_src_winston_journald3_.winstonjournald.transportstreamoptions.md#close)
* [log](_src_winston_journald3_.winstonjournald.transportstreamoptions.md#log)
* [logv](_src_winston_journald3_.winstonjournald.transportstreamoptions.md#logv)

## Properties

### format

• `Optional` **format**: logform.Format

*Defined in node_modules/winston-transport/index.d.ts:26*

___

### handleExceptions

• `Optional` **handleExceptions**: undefined \| false \| true

*Defined in node_modules/winston-transport/index.d.ts:29*

___

### level

• `Optional` **level**: undefined \| string

*Defined in node_modules/winston-transport/index.d.ts:27*

___

### silent

• `Optional` **silent**: undefined \| false \| true

*Defined in node_modules/winston-transport/index.d.ts:28*

## Methods

### close

▸ `Optional`**close**(): void

*Defined in node_modules/winston-transport/index.d.ts:33*

**Returns:** void

___

### log

▸ `Optional`**log**(`info`: any, `next`: () => void): any

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

*Defined in node_modules/winston-transport/index.d.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`info` | any |
`next` | () => void |

**Returns:** any
