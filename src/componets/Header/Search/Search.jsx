import React, {  useState } from 'react'
import cl from './Search.module.css'
import Input from '../../../UI/Input/Input'
import img from '../../../img/search.png'
export default function Search({filteredTasks}) {
    const [active, setActive] = useState(false)
    const activeCh = () =>{
        setActive(true)
    }
    
    const [filter, setFilter] = useState('')
    console.log(filter)
    return (
    <div className={cl.Search}>
        {
            active 
                ?<input type='text' onChange={(e) => filteredTasks(e.target.value)} placeholder='Поиск задач...' autoFocus className={cl.inputTask}/>
                :<button onClick={activeCh} className={cl.btn} ><img src={img} className={cl.btnSearcher} /></button> 
                
        }
        
        
    </div>
  )
}
