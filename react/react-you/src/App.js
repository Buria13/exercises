import React, {useEffect} from "react";
import Context from "./context";
import TodoList from "./Todo/TodoList";
import Loader from "./Loader"
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./Todo/AddTodo'))
  }, 3000)
  })
);

function App() {
  const [todos, setTodos] = React.useState([
    // {id: 1, completed: false, title: "Buy bread"},
    // {id: 2, completed: true, title: "Buy butter"},
    // {id: 3, completed: false, title: "Buy milk"}
  ]);
  const [loading, setLoding] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoding(false);
        }, 2000)
      })
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <Modal />

        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo}/>

        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
           <TodoList todos={todos} onToggle={toggleTodo}/>
          ) :  (
            loading ? null : <p>No Todos</p>
        )}

      </div>
    </Context.Provider>

  );
}

export default App;
