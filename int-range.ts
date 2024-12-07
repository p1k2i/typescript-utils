// Author AlexG
// https://stackoverflow.com/a/39495173/12348894

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Returns a range of integers from F to T.
 * @example
 * type T = IntRange<0, 5>
 */
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;
