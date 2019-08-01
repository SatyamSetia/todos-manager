const fs = require('fs')

const clean = (type) => {
  let newTasks = {
    pending: [],
    completed: []
  }
  if(!type) {
    fs.writeFile(__dirname+'\\tasks.json', JSON.stringify(newTasks), 'utf-8', (err) => {
      if(err) throw err;
      console.log('Tasks cleaned successfully.')
    })
  } else {
    fs.readFile(__dirname+'\\tasks.json','utf-8', (err, data) => {
      if(err) throw err;

      let tasks = JSON.parse(data)
      if(type=='pending') {
        newTasks.completed = tasks.completed
      } else if(type=='completed') {
        newTasks.pending = tasks.pending
      } else {
        console.log(`${type} is not a valid status.`)
        return;
      }

      fs.writeFile(__dirname+'\\tasks.json', JSON.stringify(newTasks), 'utf-8', (err) => {
        if(err) throw err;
        console.log('Tasks cleaned successfully.')
      })
    })
  }
}

module.exports = clean
