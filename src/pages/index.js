import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Login from "./SignIn/signIn";
import SignUp from "./SignUp/signUp";
import Main from "./Main";
import Todos from "./Todos/todos";
import Todo from "./Todos/todo";

const index = () => {
  const NotFound = () => {
    return <div>잘못된 경로입니다.</div>;
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp /> } />
        <Route path='/todos' element={<Todos />} />
        <Route path='/todos/:id' element={<Todo />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default index;
