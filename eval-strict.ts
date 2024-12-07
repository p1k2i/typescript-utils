export function evalStrict(str: string): any {
  'use strict';
  return eval(str);
}
