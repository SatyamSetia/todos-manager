const fs = require('fs')
const Table = require('easy-table')

function createRow(data, item, type) {
  data.push({
    task: item,
    status: type
  })
}

const list = (type) => {
  fs.readFile(__dirname+'\\tasks.json','utf-8', (err, data) => {
    if(err) throw err;
    
    let tasks = JSON.parse(data)
    let rows = []

    if(!type) {
      tasks.pending.forEach((task, i) => createRow(rows, task, 'PENDING'))
      tasks.completed.forEach((task,i) => createRow(rows, task, 'COMPLETED'))
    } else {
      tasks[type].forEach((task, i) => createRow(rows, task, type))
    }

    let table = new Table
    rows.forEach((row) => {
      table.cell('Task',row.task)
      table.cell('Status',row.status)
      table.newRow()
    })

    let count = rows.length
    console.log(`${count} tasks found`)
    if(count>0) console.log(table.toString())
  })
}

module.exports = list
