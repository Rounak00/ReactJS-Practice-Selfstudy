//useMemo return a memoized value
//useCallback return a memoized function




//Complete Source Code of the useCallback.js file:
import { useCallback, useState } from "react";
import Todos from "../components/Todos";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
  // };

  // subscribe to thapa technical

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Callbackhook;



//Complete Source Code of the todos.js file:

import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
