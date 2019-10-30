import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../redux';
import uuid from 'uuid/v4';

export default () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const addTodo = (todo) => dispatch(addTodoAction(todo));
    
    const onChange = event => {
        setTodo(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        if(todo.trim() === '') return;
    
        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        })

        setTodo('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-3">
                    <input className="form-control" type="text" name="todo" placeholder="Type a todo name" value={todo} onChange={onChange} />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" type="submit">Add Todo</button>
                </div>
            </div>
        </form>
    )
}
