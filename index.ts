import ShortUniqueId from 'short-unique-id';

export function helloWorld() {
  return `Hello World ${new ShortUniqueId()}!`;
}
