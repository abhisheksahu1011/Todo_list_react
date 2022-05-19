import React, {useState} from 'react';
import{addTodo,deleteTodo,checkTodo} from './helper'

import './styl.css';




function App() {

  const [inputValue,setInputValue] = useState('');
  const [todos,setTodos] = useState([]);
  const [completed,setCompleted] = useState([]);



  return  (
  <div className="todo__container">
    <h1>Todo Application</h1>
    <section className='input__container'>
      <input type="text"
       value={inputValue} 
       onChange = { (e) => { 
         setInputValue(e.target.value);
       }}/>
      <button onClick={() => addTodo(inputValue,todos,setTodos,setInputValue)}>Add Task</button>
    </section>
    <section className="list__container">
    {todos.map ( (v) => {
      console.log(v);
      return (
        <div className= {`list__item ${completed.includes(v.id) ? 'checked__list__item' :'' } ` } key={v.id}>
        <p>{v.todoTest}</p>
         <section>
           <button className='cn__btn danger' onClick={() => deleteTodo(v.id,todos,setTodos)}>Delete</button>
           <button className='cn__btn check' onClick= {() =>checkTodo(v.id,completed,setCompleted)}>Done</button>
         </section>
      </div>
      );
    })}
     
    

    </section>
  </div>
  );
}

export default App
