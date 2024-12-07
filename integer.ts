export type PositiveInteger<T extends number> =
  `${T}` extends '0' | `-${any}` ? never : T;

export type NegativeInteger<T extends number> =
  `${T}` extends '0' ? never : T;

export type NonnegativeInteger<T extends number> =
  `${T}` extends `-${any}` ? never : T;

export function isPositiveInteger<T extends number>(value: T): value is PositiveInteger<T> {
  return `${value}` !== '0' && `${value}` !== `-${value}`;
}

export function isNegativeInteger<T extends number>(value: T): value is NegativeInteger<T> {
  return `${value}` !== '0' && `${value}` !== `-${value}`;
}

export function isNonnegativeInteger<T extends number>(value: T): value is NonnegativeInteger<T> {
  return `${value}` !== `-${value}`;
}
