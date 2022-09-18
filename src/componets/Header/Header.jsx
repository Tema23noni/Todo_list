import React from 'react'


import cl from './Header.module.css'
import Search from './Search/Search'
function Header({todos,filteredTasks}) {

  return (
    <div className={cl.Header}>
        <div className={cl.Header__cont}>
        <Search filteredTasks={filteredTasks} todos={todos}/>
        <h1 className={cl.textCount}>Количество задач: {todos} </h1>
        </div>
    </div>
  )
}
export default Header 