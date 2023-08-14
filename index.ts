import {v4} from './node_modules/uuid/dist/esm-node/index.js';

export function helloWorld() {
  return `Hello World ${v4()}!`;
}
