import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { LogIn, Register, Logout, FormMain } from "./components/pages";
import { Home } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AuthContex from "./components/store/auth-contex";
library.add(fas);

function App() {
  const authCtx = useContext(AuthContex);
  console.log(authCtx.isLoggedIn);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/logowanie"
            element={
              authCtx.isLoggedIn ? <Navigate replace to={"/"} /> : <LogIn />
            }
          />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowano" element={<Logout />} />
          <Route
            path="/oddaj-rzeczy"
            element={
              authCtx.isLoggedIn ? <FormMain /> : <Navigate replace to={"/"} />
            }
          />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
