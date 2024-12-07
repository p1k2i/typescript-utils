import { IntRange } from './int-range';
import { PositiveNumberAsString } from './number-as-string';

/**
 * YYYY-MM-DD
 * @example
 * type DateType = '2021-12-31'
 * */
export type DateType = `${PositiveNumberAsString}-${IntRange<1, 12>}-${IntRange<1, 31>}`;
