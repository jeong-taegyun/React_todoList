import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할일 2',
      checked: true,
    },
    {
      id: 3,
      text: '할일 3',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      if (text.trim() === '' || text.trim() === null) {
        alert('할일을 입력하세요!');
      } else {
        setTodoList(todoList.concat(todo));
        nextId.current += 1;
      }
      
      
    },
    [todoList]
  );

  const onRemove = useCallback(
    (id) => {
      const isAdult = window.confirm('할 일을 삭제하시겠습니까?');

      if (isAdult) setTodoList(todoList.filter((todo) => todo.id !== id));
    },
    [todoList]
  );

  const onToggle = useCallback(
    (id) => {
      setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    },
    [todoList]
  );
  
  return (
    <TodoTemplate>
      <TodoList todoList={todoList} onRemove={onRemove} onToggle={onToggle} />
      <TodoInsert onInsert={onInsert} />
  </TodoTemplate>
  );
}

export default App;
