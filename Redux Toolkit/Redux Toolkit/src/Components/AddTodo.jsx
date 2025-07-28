import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/ToDo/todoslice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="flex space-x-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Todo..."
        className="flex-1 px-4 py-2 rounded-md bg-gray-900 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;

