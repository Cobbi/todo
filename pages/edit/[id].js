import React, { useState, useEffect } from "react";
import AppLayout from "@/src/components/AppLayout";
import MetaData from "@/src/components/MetaData";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [todo, setTodo] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    task: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    // Fetch the todos from localStorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Find the todo with the specified ID
    const foundTodo = todos.find((todo) => todo.id === Number(id));

    // Check if the todo is found
    if (foundTodo) {
      setTodo(foundTodo);
    } else {
      // Handle the case when the todo is not found
      console.log("Todo not found with ID:", id);
      // You may want to redirect or handle this error state accordingly
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!todo.fname) {
      errors.fname = "Your first name is required";
    }
    if (!todo.lname) {
      errors.lname = "Your last name is required";
    }
    if (!todo.email) {
      errors.email = "Your email is required";
    }
    if (!todo.age) {
      errors.age = "Your age is required";
    }
    if (!todo.task) {
      errors.task = "Todo task is required";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const updateTodoItem = async () => {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];

      // Find the index of the todo with the specified ID in the todos array
      const todoIndex = todos.findIndex((item) => item.id === Number(id));

      // If the todo is found, update it in the todos array
      if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], ...todo };

        // Save the updated todos array back to localStorage
        localStorage.setItem("todos", JSON.stringify(todos));

        // Redirect to TodoTable with updated data
        router.push("/");
      } else {
        // Handle the case when the todo is not found
        console.log("Todo not found with ID:", id);
        // You may want to redirect or handle this error state accordingly
      }
    };

    updateTodoItem();
  };
  
  return (
    <AppLayout>
      <MetaData title="Edit Todo" />
      <div className="container mx-auto px-8 py-8">
      <div className="flex justify-center items-center py-4 space-x-12">
        <span className="px-2 my-3 py-1 rounded-md">
          <Link href={"/"}>
            <h3 className="text-2xl text-left font-bold">
              <BsFillArrowLeftCircleFill className="text-blue-400" />
            </h3>
          </Link>
        </span>
        <h1 className="flex text-3xl text-slate-900 mx-2 font-bold">
          todo&nbsp;
          <span className="bg-blue-400 text-[28px] rounded-md capitalize text-white px-2 py-0.5">
            list
          </span>
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fname"
          >
            First name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="fname"
            name="fname"
            placeholder="Cobby"
            value={todo?.fname}
            onChange={handleInputChange}
          />
          {fieldErrors.fname && (
            <p className="text-red-400">{fieldErrors.fname}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lname"
          >
            Last name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="lname"
            name="lname"
            placeholder="Anim"
            value={todo?.lname}
            onChange={handleInputChange}
          />
          {fieldErrors.lname && (
            <p className="text-red-400">{fieldErrors.lname}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="cobby@gmail.com"
            value={todo?.email}
            onChange={handleInputChange}
          />
          {fieldErrors.email && (
            <p className="text-red-400">{fieldErrors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
            >
            Age
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            id="age"
            name="age"
            value={todo?.age}
            placeholder="24 years"
            onChange={handleInputChange}
            />
            {fieldErrors.age && <p className="text-red-400">{fieldErrors.age}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="task"
          >
            Task
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 h-[140px] rounded-md focus:outline-none focus:border-blue-500"
            id="task"
            name="task"
            placeholder="Add todo task"
            value={todo?.task}
            onChange={handleInputChange}
          />
          {fieldErrors.task && (
            <p className="text-red-400">{fieldErrors.task}</p>
          )}
        </div>
        <button
          className="w-full bg-blue-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Update Todo
        </button>
      </form>
    </div>
    </AppLayout>
  );
};


export default EditPage