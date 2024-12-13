/**
 * @description
 * Defines an object with keys and values of the string type, where the keys are the uppercase version of the values.
 * @param Values - The union of string values.
 * @usage
 * ```ts
 * const enumString: EnumString<'a' | 'B' | 'C'> = {
 *  A: 'a',
 *  B: 'B',
 *  C: 'C'
 * }
 * ```
*/
export type EnumString<Values extends string> = {
   readonly [P in Values as `${Uppercase<P>}`]:P;
}
