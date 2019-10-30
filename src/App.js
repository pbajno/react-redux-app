import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todoWrapper">
          <fieldset>
            <TodoInput />
            <TodoList />
          </fieldset>
        </div>
      </Provider>
    );
  }
}

export default App;
