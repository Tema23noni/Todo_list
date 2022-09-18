import React from 'react'

function Todo({todo, toggleTask, removeTask,index}) {
 
  return (
    <div className='todoTasks' key={todo.id}>
      <div className='index'>{index}.</div>
      <div className='todos' onClick={() => toggleTask(todo.id)}>{todo.todo}</div>
      <div className='removeTask' onClick={() => removeTask(todo.id)}>X</div>
    </div>
  )
}
export default Todo