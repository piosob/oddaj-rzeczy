import React, { useContext } from "react";
import { AuthContexProvider } from "./components/store/auth-contex";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { LogIn, Register, Logout } from "./components/pages";
import { Home } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import AuthContex from "./components/store/auth-contex";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  const authCtx = useContext(AuthContex);
  return (
    <BrowserRouter>
      <AuthContexProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/logowanie"
              element={authCtx.isLoggedIn ? <Home /> : <LogIn />}
            />
            <Route path="/rejestracja" element={<Register />} />
            <Route path="/wylogowano" element={<Logout />} />
            <Route path="*" element={<Navigate replace to={"/"} />} />
          </Routes>
        </Layout>
      </AuthContexProvider>
    </BrowserRouter>
  );
}

export default App;
