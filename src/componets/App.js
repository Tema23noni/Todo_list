
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import './App.css';
import Header from './Header/Header';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) =>{
  
    if(userInput){
      const newItem ={
        id: Date.now(),
        todo: userInput,
        complete: false
      }
   
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) =>{
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const completeTask = (id) =>{

    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? {...todo, complete: !todo.complete}: {...todo}
      )
    ])
  }
  const filteredTasks = (filt) =>{
    console.log(filt)
    setFilter(filt)
  }
  const [filter,setFilter] = useState([])
  console.log(todos.filter(user => user.todo.toLowerCase().includes('fe')));
  return (
    <div className="App">
      
      <Header filteredTasks={filteredTasks} todos={todos.length}/>
      <TodoForm addTask={addTask}/>
      {
        todos.length === 0 ? <div className='nullTask'>Список задач пуст</div> : 
        
        todos.filter((user) => user.todo.toLowerCase().includes(filter)).map((todo,index) =>{
        
        return(
          
        <Todo
          index ={index+1}
          key={todo.id}
          todo={todo}
          toggleTask={completeTask}
          removeTask={removeTask}
        />)
      })}
    </div>
  );
}

export default App;
