import v4 from './node_modules/uuid/dist/v4.js';

export function helloWorld() {
  return `Hello World ${v4()}!`;
}
