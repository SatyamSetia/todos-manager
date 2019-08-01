#!/usr/bin/env node

const [,, ...args] = process.argv
const add = require('./commands/add.js')

switch(args[0]) {
  case 'add': add(args.slice(1).join(' '))
  break;
  default: console.log(`${args[0]} is not a valid command.`)
  break;
}
