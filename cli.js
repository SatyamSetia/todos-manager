#!/usr/bin/env node

const [,, ...args] = process.argv
const add = require('./commands/add.js')
const list = require('./commands/list.js')

switch(args[0]) {
  case undefined: list()
  break;
  case 'add': add(args.slice(1).join(' '))
  break;
  case 'pending': list('pending')
  break;
  case 'completed': list('completed')
  break;
  default: console.log(`${args[0]} is not a valid command.`)
  break;
}
