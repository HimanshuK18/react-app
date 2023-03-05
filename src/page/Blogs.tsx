import React from "react";

function AppLiftUpState() {
  return (
    <>
      <TodoCount />
      <TodoList />
      <AddTodo />
    </>
  );
}

function TodoCount() {
  return <div>Total Todos: </div>;
}

function TodoList() {
  const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

function AddTodo() {
  function handleSubmit(event: any) {
    const form = document.forms;
    const valid = form[0].checkValidity();
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    console.log(todo  + valid);
  }

  function handleSubmit2(event: any) {
    const form = document.forms;
    const valid = form[0].checkValidity();
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    console.log(todo  + valid);
  }

  return (<>
    <form onSubmit={handleSubmit} id="form1">
      <input type="text" id="todo" required />
      <button type="submit">Add Todo</button>
    </form>
    <form onSubmit={handleSubmit2} id="form2">
    <input type="text" id="todo" required />
    <button type="submit">Add Todo</button>
  </form>
  </>  );
}

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export { AppLiftUpState, Blogs };