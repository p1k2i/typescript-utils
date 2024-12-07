/**
 * Set all properties of an object to a specific value.
 * @param obj example: { name: "John", age: 30, active: true }
 * @param value example: true
 * @returns example: { name: true, age: true, active: true }
 */
export function propsToValue<T, V>(obj: T, value: V): { [K in keyof T]: V } {
  const result: Partial<{ [K in keyof T]: V }> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key as keyof T] = value;
    }
  }

  return result as { [K in keyof T]: V };
}
