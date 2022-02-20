import actionTypes from "../actionsTypes.js";
import axios from "axios";

const addTodo = (todos) => {
  return { type: actionTypes.todo.ADD_TODO, payload: todos };
};

const setTodos = () => {
  return async function (dispatch) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: actionTypes.todo.SET_TODO, payload: data });
  };
};

const todoListActions = {
  addTodo,
  setTodos,
};

export default todoListActions;
