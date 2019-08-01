# Project Title

todos-manager is a package that can be used for managing tasks using CLI. Easily add, delete, update and list your tasks. It can also save tasks as text file in current directory.

## Installing
```
npm install -g todos-manager
```

## Usage
```
todos [command]
```
_Run above command in command line. For example:_
__todos pending__ _will print all pending tasks_

## Commands
Command | Result
--- | ---
add | It will add the task written after 'add'
update | It will update the task from pending to completed
pending | It will list all pending tasks
completed | It will list all completed tasks
clean | It will truncate all tasks
save | It will save all tasks in text file

### Examples

- It will add `lorem ipsum` as a pending task.
```
todos add lorem ipsum
```

- It will update the status of `lorem ipsum` from pending to completed.
```
todos update lorem ipsum
```

- It will list all tasks with their status.
```
todos
```

- It will list all pending tasks.
```
todos pending
```

- It will list all completed tasks.
```
todos completed
```

- It will delete all tasks.
```
todos clean
```

- It will delete all pending tasks.
```
todos clean pending
```

- It will delete all completed tasks.
```
todos clean completed
```

- It will save all tasks and the their status in a text file. You can change the name of output file by adding custom filename after this command.
```
todos save
```

- It will save all pending tasks in a text file. You can change the name of output file by adding custom filename after this command.
```
todos save pending
```

- It will save all completed tasks in a text file. You can change the name of output file by adding custom filename after this command.
```
todos save completed
```
