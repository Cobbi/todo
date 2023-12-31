import AppLayout from "@/src/components/AppLayout";
import MetaData from "@/src/components/MetaData";
import Navbar from "@/src/components/Navbar";
import TodoForm from "@/src/features/AddTodo";
import React, { useEffect, useState } from "react";

const AddTodo = () => {
  return (
    <>
      <AppLayout>
        <MetaData title="Add Todo" />
        <TodoForm />
      </AppLayout>
    </>
  );
};

export default AddTodo;
