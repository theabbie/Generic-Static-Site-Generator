#!/usr/bin/env node

var main = require('./../index.js');

var [,,...args] = process.argv;

main(...args);
