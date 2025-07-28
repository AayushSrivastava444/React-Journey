import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="w-full max-w-2xl p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Learn About Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

