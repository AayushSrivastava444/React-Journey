import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/ToDo/todoslice';

function Todos() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-900 text-white px-4 py-3 rounded-md mb-2"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 p-2 rounded-md"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;

