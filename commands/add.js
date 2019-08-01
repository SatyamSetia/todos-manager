const fs = require('fs')

const add = (task) => {
  fs.readFile(__dirname+'\\tasks.json','utf-8', (err, data) => {
    if(err) throw err;
    let tasks = JSON.parse(data);
    tasks.pending.push(task)
    fs.writeFile(__dirname+'\\tasks.json', JSON.stringify(tasks), 'utf-8', (err) => {
      if(err) throw err;
      console.log('Task added successfully.')
    })
  })
}

module.exports = add
