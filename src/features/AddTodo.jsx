import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const router = useRouter();

  const [todo, setTodo] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    task: "",
    id: ""
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value
    }));
    setFieldErrors({
      ...fieldErrors,
      [name]: ""
    });
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

    const updatedTodos = [...todos, { ...todo, id: Math.random() * 10 }];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setTodo({
      fname: "",
      lname: "",
      email: "",
      age: "",
      task: "",
      id: ""
    });
    setFieldErrors({});
    //Remove stored AddTodo input field values
    localStorage.removeItem("addTodoData"); 
  };

  //Retrieves todo if any and set to current todo state
  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(existingTodos);
  }, []);

  //Store current AddTodo input field values in local storage
  useEffect(() => {
    localStorage.setItem("addTodoData", JSON.stringify(todo)); 
  }, [todo]);

  return (
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
          {fieldErrors.fname && (
            <p className="text-red-400">{fieldErrors.fname}</p>
          )}
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
            value={todo.fname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          {fieldErrors.lname && (
            <p className="text-red-400">{fieldErrors.lname}</p>
          )}
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
            value={todo.lname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          {fieldErrors.email && (
            <p className="text-red-400">{fieldErrors.email}</p>
          )}
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
            value={todo.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          {fieldErrors.age && <p className="text-red-400">{fieldErrors.age}</p>}
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
            placeholder="24 years"
            value={todo.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          {fieldErrors.task && (
            <p className="text-red-400">{fieldErrors.task}</p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Task
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 h-[140px] rounded-md focus:outline-none focus:border-blue-500"
            id="task"
            name="task"
            placeholder="Add todo task"
            value={todo.task}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="w-full bg-blue-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;