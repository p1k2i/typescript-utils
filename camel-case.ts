// Author: Костя Логиновских
// https://habr.com/ru/companies/cloud_ru/articles/860778/

export type CamelCase<S> =
  S extends `${infer First}_${infer Second}${infer Rest}`
    ? `${First}${Uppercase<Second>}${CamelCase<Rest>}`
    : S;

export type KeysToCamelCase<T> = T extends Record<string, unknown>
  ? {
    [K in keyof T as CamelCase<K>]: KeysToCamelCase<T[K]>;
  }
  : T extends Array<infer U>
    ? Array<KeysToCamelCase<U>>
    : T;
