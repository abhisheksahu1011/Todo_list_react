
import { v1 as uuidv1 } from 'uuid';






 export const addTodo = (inputValue,todos,setTodos,setInputValue) =>{
    const  updateTodo = [{todoTest: inputValue, id: uuidv1()}, ...todos];
    setTodos(updateTodo);
    setInputValue('');
  };

  export   const deleteTodo = (id,todos,setTodos) =>{
const filterTodos = todos.filter((i) => i.id !==id)
setTodos(filterTodos);
}

export const checkTodo = (id,completed,setCompleted) =>{
  if (completed.includes(id)){
    setCompleted(completed.filter((c)=> c !==id))
}else{
 setCompleted([...completed, id])
}
}