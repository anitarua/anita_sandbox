import { v4 as uuidv4 } from './node_modules/uuid/dist/index.js';

export function helloWorld() {
  return `Hello World ${uuidv4()}!`;
}
