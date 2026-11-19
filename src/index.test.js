const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./index');

test('add складывает числа', () => {
  assert.strictEqual(add(2, 3), 5);
});
