const fs = require('fs')

function jsonToStream(json, key) {
  let stream = ''
  if(key) {
    json[key].forEach((task) => {
      stream += `${task}\t${key}\r\n`
    })
  } else {
    json.pending.forEach((task) => {
      stream += `${task}\tpending\r\n`
    })
    json.completed.forEach((task) => {
      stream += `${task}\tcompleted\r\n`
    })
  }
  return stream;
}

const save = (args) => {
  let status = undefined
  let filename = `tasks-${Date.now()}.txt`

  if(args.length == 1) {
    if(args[0] == 'pending' || args[0] == 'completed') {
      status = args[0]
    } else {
      filename = `${args[0]}.txt`
    }
  } else if(args.length >= 2) {
    if(args[0] == 'pending' || args[0] == 'completed') {
      status = args[0]
      filename = `${args[1]}.txt`
      if(args.length>2) {
        console.log(`'${args.slice(2).join(' ')}' is ignored.`)
      }
    } else {
      filename = `${args[0]}.txt`
      if(args.length>1) {
        console.log(`'${args.slice(1).join(' ')}' is ignored.`)
      }
    }
  }

  fs.readFile(__dirname+'\\tasks.json','utf-8', (err, data) => {
    if(err) throw err;

    let tasksJson = JSON.parse(data)
    let tasks = jsonToStream(tasksJson, status)

    fs.writeFile(filename, tasks, 'utf-8', (err) => {
      if(err) throw err;
      console.log(`${filename} saved successfully.`)
    })
  })
}

module.exports = save
