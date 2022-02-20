import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

const todo = {
  id: 1,
  name: "hello world",
};

console.log("todo");

export const TodoListPage = () => {

  const todos = useSelector((value) => value.todos);
  const dispatch = useDispatch();

  useEffect (()=>{

    const getTodos = async function(){

        dispatch(Actions.todoListActions.setTodos());

    }

    getTodos();
  },[dispatch])

  // [] = dipendends array

  return (
    <div>
      {/* TODO */}
      <button onClick={()=> dispatch(Actions.todoListActions.addTodo(todo))} >Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListPage;

//       // try {
        // const {data} =await axios.get("https://jsonplaceholder.typicode.com/todos");
        // console.log(data);
        // dispatch(Actions.todoListActions.setTodos());

      // }
      // catch (err){

      //   console.log(err);
      //   console.log(err);
      // }
