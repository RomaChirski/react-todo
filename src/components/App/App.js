import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItemPanel from '../AddItemPanel';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      todosArray: [
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch'),
      ],
    };
    // Удаление todo item из state
    this.deleteItem = (id) => {
      this.setState(({ todosArray }) => {
        const newTodosArray = todosArray.filter((item) => item.id !== id);
        return {
          todosArray: newTodosArray,
        };
      });
    };
    // Добавление todo item в state
    this.addItem = (text) => {
      this.setState(({ todosArray }) => {
        const newTodo = this.createTodoItem(text);
        const newTodosArray = [...todosArray, newTodo];
        return {
          todosArray: newTodosArray,
        };
      });
    };
    // Функция для изменения todoItem.done
    this.toggleDone = (id) => {
      this.setState(({ todosArray }) => {
        return {
          todosArray: this.toggleProperty(todosArray, id, 'done'),
        };
      });
    };
    // Функция для изменения todoItem.important
    this.toggleImportant = (id) => {
      this.setState(({ todosArray }) => {
        return {
          todosArray: this.toggleProperty(todosArray, id, 'important'),
        };
      });
    };
  }
  // Функция для изменение property
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldTodo = arr[idx];
    const newTodo = { ...oldTodo, [propName]: !oldTodo[propName] };
    return [...arr.slice(0, idx), newTodo, ...arr.slice(idx + 1)];
  }
  // Функция для создания нового элемента todo
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  render() {
    const { todosArray } = this.state;
    // Счетчик выполненых задач
    const doneCount = todosArray.filter((item) => item.done).length;
    // Счетчик невыполненых задач
    const todoCount = todosArray.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todosArray}
          onDeleteCallback={this.deleteItem}
          onToggleDoneCallback={this.toggleDone}
          onToggleImportantCallback={this.toggleImportant}
        />
        <AddItemPanel onAddCallback={this.addItem} />
      </div>
    );
  }
}
