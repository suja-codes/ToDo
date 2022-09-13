function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'assignment due on Thursday',
      isCompleted: false,
    },
    {
      text: 'create React app',
      isCompleted: false,
    },
    {
      text: 'add Github repo',
      isCompleted: false,
    },
    {
      text: 'add readme',
      isCompleted: false,
    },
    {
      text: 'update Portfolio',
      isCompleted: false,
    }         
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
