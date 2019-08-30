import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./todoList"
import {Provider } from "react-redux"
import store from "./store/index"
const App=(  // Provider>是一个提供器，只要使用了这个组件，组件里边的其它所有组件都可以使用store了，这也是React-redux的核心组件
    <Provider store={store}>  
        <TodoList />  
    </Provider>
)
//<Provider>里面可以放很多个组件，可以方便直观的看到有哪些组件使用了redux 
ReactDOM.render(App, document.getElementById('root'));


