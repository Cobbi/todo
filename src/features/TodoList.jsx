import React from "react";
import Link from "next/link";
import { useQuery, useMutation, QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";

const TodoTable = () => {
  const queryClient = new QueryClient();
  const router = useRouter();

  const { data: todos, isLoading } = useQuery("todos", () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });

  const deleteTodo = useMutation(
    async (id) => {
      // Remove the todo from localStorage
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      // Remove the todo from the local state immediately
      queryClient.setQueryData("todos", updatedTodos);
    },
    {
      onSuccess: () => {
        // Refresh the page after the mutation is successful
        router.reload();
      },
    }
  );

  const handleDelete = (id) => {
    deleteTodo.mutate(id);
  };


  return (
    // <QueryClientProvider client={queryClient}>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {todos?.length > 0 ? (
                  <table className="min-w-full">
                    {/* Table header */}
                    <thead className="bg-gray-200 border-b">
                      <tr>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          First Name
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Last Name
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Email
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Age
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Task
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                      {todos.map((todo, index) => (
                        <tr
                          key={todo.id}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">
                            {todo.fname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">
                            {todo.lname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">
                            {todo.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">
                            {todo.age}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-900">
                            {todo.task}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center space-x-2">
                            <Link href={`/edit/${todo.id}`} className="bg-blue-400 text-white px-8 py-2">
                              Edit
                            </Link>
                            <button
                              type="button"
                              className="bg-red-400 text-white px-8 py-2"
                              onClick={() => handleDelete(todo.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="min-w-full">
                    {/* Table header */}
                    <thead className="bg-gray-200 border-b">
                      <tr>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          First Name
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Last Name
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Email
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Age
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                          Task
                        </th>
                        <th className="text-xl font-medium text-gray-900 px-6 py-4 text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                      <tr>
                        <td colSpan="7" className="pt-12 text-xl">
                          No todos found.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    // </QueryClientProvider>
  );
};

export default TodoTable;
