import { memo, useMemo } from 'react';
import { expensiveCalculation } from './USeMemoContainer.js';

export const TodoList = memo((props) => {
  const {addTodo, todos} = props
  const calculatedValue = expensiveCalculation(1);


  console.log("render TodoList");
  return <>
    <h2>My Todos</h2>
    <button onClick={addTodo}>Add todo {calculatedValue}</button>
    {todos.map((todo, id) => <p key={id}>{todo}</p>)}
  </>
})
