import { useCallback, useEffect, useMemo, useState } from 'react';
import { TodoList } from './TodoList.js';
import { logDOM } from '@testing-library/react';


export const expensiveCalculation = (num) => {
  console.log('Calculating ...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemoContainer = () => {
  const [ todos, setTodos ] = useState([ 'Todo 0' ]);
  const [ count, setCount ] = useState(0);

  const addTodo = useCallback(() => setTodos((t) => [ ...t, 'New Todo' ]), [todos]);
  const calculatedValue = useMemo(() => expensiveCalculation(count), [ count ]);


  const increment = () => setCount((c) => c + 1);
  console.log("render UseMemoContainer");
  return <div>
    <TodoList
      todos={todos}
      addTodo={addTodo}
    />
    <br/>
    <br/>
    <hr/>

    <p>Count: {count}</p>
    <button onClick={increment}> Add count</button>
    <p>{calculatedValue}</p>
  </div>;
};

export default UseMemoContainer;
