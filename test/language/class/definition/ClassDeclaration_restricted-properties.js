// Copyright (C) 2015 Caitlin Potter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*--- 
description: >
    Functions created using ClassDeclaration syntactic form do not
    have own properties "caller" or "arguments", but inherit them from
    %FunctionPrototype%.
es6id: 16.1
---*/

class BaseClass {}

assert.sameValue(BaseClass.hasOwnProperty('caller'), false, 'Functions created using ClassDeclaration syntactic form do not have own property "caller"');
assert.sameValue(BaseClass.hasOwnProperty('arguments'), false, 'Functions created using ClassDeclaration syntactic form do not have own property "arguments"');

assert.throws(TypeError, function() {
  return BaseClass.caller;
});

assert.throws(TypeError, function() {
  BaseClass.caller = {};
});

assert.throws(TypeError, function() {
  return BaseClass.arguments;
});

assert.throws(TypeError, function() {
  BaseClass.arguments = {};
});

class SubClass extends BaseClass {}

assert.sameValue(SubClass.hasOwnProperty('caller'), false, 'Functions created using ClassDeclaration syntactic form do not have own property "caller"');
assert.sameValue(SubClass.hasOwnProperty('arguments'), false, 'Functions created using ClassDeclaration syntactic form do not have own property "arguments"');

assert.throws(TypeError, function() {
  return SubClass.caller;
});

assert.throws(TypeError, function() {
  SubClass.caller = {};
});

assert.throws(TypeError, function() {
  return SubClass.arguments;
});

assert.throws(TypeError, function() {
  SubClass.arguments = {};
});
