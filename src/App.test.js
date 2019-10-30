import React from 'react';
// import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reducer, store, addTodoAction, deleteTodoAction } from './redux';

import App from './App';
import { mount } from 'enzyme';
import { Jest } from 'jest';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

describe('Redux coverage', () => {

  it('should return the initial state', () => {
    expect(store.getState().todos).toEqual(
      [{
        name: 'Buy milk',
        complete: false,
        id: 1
      }]
    )
  })

  it('should handle ADD_TODO', () => {
    let newTodo = {name: 'Add Todo', complete: false, id: 2};
    store.dispatch({type: 'ADD_TODO', payload: newTodo});
    expect(store.getState().todos).toEqual([
      {
        name: 'Buy milk',
        complete: false,
        id: 1
      },
      {
        name: 'Add Todo',
        complete: false,
        id: 2
      }]
    )
  })

  it('should handle DELETE_TODO', () => {
    store.dispatch({type: 'DELETE_TODO', payload: 2});
    expect(store.getState().todos).toEqual([
      {
        name: 'Buy milk',
        complete: false,
        id: 1
      }]
    )
  })

  it('should handle TOGGLE_TODO', () => {
    store.dispatch({type: 'TOGGLE_TODO', payload: 1});
    expect(store.getState().todos).toEqual([
      {
        name: 'Buy milk',
        complete: true,
        id: 1
      }]
    )
  })

});
