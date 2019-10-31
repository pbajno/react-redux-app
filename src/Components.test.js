import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './redux';

describe('Test all components', () => {

    // Test with React Dom
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // Test with Enzyme
    it('TodoInput', () => {
        expect(
            shallow(
                <Provider store={store}>
                    <TodoInput />
                </Provider>
            ).length
        ).toEqual(1);
    })

    it('TodoList', () => {
        expect(
            shallow(
                <Provider store={store}>
                    <TodoList />
                </Provider>
            ).length
        ).toEqual(1);
    })

    it('App', () => {
        expect(
            shallow(
                <App />
            ).length
        ).toEqual(1);
    })   

});