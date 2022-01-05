import JSBI from 'jsbi'

import { Fraction } from '@uniswap/sdk-core'

export const FACTORY_ADDRESS = '0x4e34B4C5345BcE7FD435839DF59F3bF26Dfc7D6E'

export const INIT_CODE_HASH = '0xa056ca54b88f70c2ea6f1f39b1cf4f86d296853d3283bc297f0b1110db6f6cf4'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = new Fraction(JSBI.BigInt(0))
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
