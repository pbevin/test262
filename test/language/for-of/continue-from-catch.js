// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13 S5.n
description: >
    Control flow during body evaluation should honor `continue` statements
    within the `catch` block of `try` statements.
---*/

function* values() {
  yield 1;
  yield 1;
}
var iterable = values();
var i = 0;

for (var x of iterable) {
  i++;
  try {
    throw new Error();
  } catch (err) {
    continue;
  }

  $ERROR('This code is unreachable.');
}

assert.sameValue(i, 2);
