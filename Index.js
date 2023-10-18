import React, { useState } from 'react'
import "../style/ToDoList.css"
import {AiOutlineDelete,AiOutlineCheckCircle} from "react-icons/ai"

function Index() {
    const[isscreentouch,setiscreentouch]=useState(false)
    

  return (
    <div className='body'>
         <h1>My Todos</h1>

<div className="todo-wrapper">

  <div className="todo-input">
    <div className="todo-input-item">
      <label>Title:</label>
      <input
        type="text"

        placeholder="What's the title of your To Do?"
      />
    </div>
    <div className="todo-input-item">
      <label>Description:</label>
      <input
        type="text"
      
      
        placeholder="What's the description of your To Do?"
      />
    </div>
    <div className="todo-input-item">
      <button
        className="primary-btn"
        type="button"
        id='btn'
       
      >
        Add
      </button>
    </div>
  </div>
  <div className="btn-area">
    <button
     className={`isscreentouch ${isscreentouch===false && 'active'}`}
     onClick={() => setiscreentouch (false)}
    >
      To Do
    </button>
    <button
     className={`isscreentouch ${isscreentouch===true && 'active'}`}
     onClick={()=>setiscreentouch(false)}
    >
      Completed
    </button>
  </div>
  <div className='todo-list'>
    <div className='todo-list-item'>
        <h1>Task 1</h1>
        <p>description</p>
    </div>
  </div>
  <div className="todo-list-item" >
                <div>
                  <h3>Task</h3>
                  <p>description</p>
                 
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    
                  />
                
                </div>
              </div>
</div>

    </div>
 
  )
}

export default Index