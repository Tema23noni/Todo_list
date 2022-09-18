import React, {useState} from 'react'

function TodoForm({addTask}) {
  const [userInputTask, setUserInputTask] = useState('');

  const userInputChange = (e) =>{
    setUserInputTask(e.target.value)
  }
  const completeSubmit = (e) =>{
    e.preventDefault();
    addTask(userInputTask)
    setUserInputTask('')
  }

  return (
    <form onSubmit={completeSubmit} className='form'>
      <input 
        className='input-form'
        type="text"
        placeholder='Ввод задач...'
        value={userInputTask}
        onChange={userInputChange} 
      />
      <button className='button-form' onClick={completeSubmit}>+</button>    
    </form>
  )
}
export default TodoForm