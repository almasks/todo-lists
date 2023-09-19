import logo from './logo.svg';
import './App.css';
import Todo from './Componets/Todo';
import ClassTodo from './Componets/ClassTodo';
import FunctionTodo from './Componets/FunctionTodo';

function App() {
  return (
    <div className="App">
      {/* <Todo></Todo> */}
      <ClassTodo/>
      {/* <FunctionTodo/> */}
    </div>
  );
}

export default App;
