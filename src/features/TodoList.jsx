// TodoTable.js
import React, { useState, useEffect } from "react";
import Link from "next/link";

const TodoTable = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const delRecord = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === updatedTodo.id) {
        return { ...updatedTodo };
      }
      return item;
    });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {todos?.length > 0 ? (
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">#</th>
                      <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">First Name</th>
                      <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">Last Name</th>
                      <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">Email</th>
                      <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">Age</th>
                      <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">Task</th>
                      <th className="text-xl font-medium text-gray-900 px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todos.map((todo, index) => (
                      <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">{todo.fname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">{todo.lname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">{todo.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">{todo.age}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">{todo.task}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center space-x-2">
                            <Link href={`/edit/${todo?.id}`} className="bg-blue-400 text-white px-8 py-2">
                              Edit
                            </Link>   
                            <button
                              type="button"
                              className="bg-red-400 text-white px-8 py-2"
                              onClick={() => delRecord(index)}
                            >
                              Delete
                            </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No todos found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoTable;
