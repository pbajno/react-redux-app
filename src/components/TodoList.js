import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';

export default () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const toggleTodo = (todoId, e) => {
      dispatch(toggleTodoAction(todoId));
  };
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

  return (
    <div className="row">
      <div className="col-3">
        <div class="task-group">
          {todos.map((todo) => (
            <div key={todo.id} className="form-check">
                <input onChange={(e) => toggleTodo(todo.id, e)} type="checkbox" className="form-check-input" id={'todoId' + todo.id} />
                <label htmlFor={'todoId' + todo.id} className={todo.complete ? 'complete' : null}>{todo.name}</label>
                <span
                className="space-left05 btn btn-danger btn-xs active"
                onClick={deleteTodo.bind(null, todo.id)}
                >X</span>
              </div>
          ))}
        </div>
      </div>
    </div>
 
  );
};