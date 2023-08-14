import { v4 as uuidv4 } from './node_modules/uuid';

export function helloWorld() {
  return `Hello World ${uuidv4()}!`;
}
