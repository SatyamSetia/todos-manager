const fs = require('fs')

const update = (task) => {
  fs.readFile(__dirname+'\\tasks.json','utf-8', (err, data) => {
    if(err) throw err;

    let tasks = JSON.parse(data)
    let index = tasks.pending.indexOf(task)
    if(index==-1) {
      console.log('No such task is pending.')
      return;
    } else {
      tasks.pending.splice(index,1)
      tasks.completed.push(task)
    }

    fs.writeFile(__dirname+'\\tasks.json', JSON.stringify(tasks), 'utf-8', (err) => {
      if(err) throw err;
      console.log(`${task} is marked done.`)
    })
  })
}

module.exports = update
