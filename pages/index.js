import React from "react";
import AppLayout from "@/src/components/AppLayout";
import MetaData from "@/src/components/MetaData";
import TodoList from "@/src/features/TodoList";
import Navbar from "@/src/components/Navbar";

const HomePage = () => {
  return (
    <AppLayout>
      <MetaData title="Todo List" />
      <div className="p-24">
        <Navbar />
        <TodoList />
      </div>
    </AppLayout>
  );
};

export default HomePage;
