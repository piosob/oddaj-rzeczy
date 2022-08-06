import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
let logoutTimer;

const AuthContex = React.createContext({
  email: "",
  token: "",
  isLoggedIn: false,
  onLogin: () => { },
  onLogOut: () => { },
})

export default AuthContex;
// helper function for calculate remaining time
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration
}
//helper function for getting token and stored expiration date from local storage when page reload
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationDate);
  // auto logout when remainingTime < 1 minute (60s * 1000)
  if (remainingTime <= 60000) {
    localStorage.clear();
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTime,
  }
}

export const AuthContexProvider = props => {
  let navigate = useNavigate();
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token
  }
  const initialEmail = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken)
  const [email, setEmail] = useState(initialEmail)
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null)
    setEmail(null)
    localStorage.clear();
    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
    navigate("/wylogowano", { replace: true });
  }


  const loginHandler = (token, email, expirationTime) => {
    setToken(token)
    setEmail(email)
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("expirationTime", expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);
    // set timeout = autologout after token validity expires
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  }
  // whenever page reload new Date is created and new actual remaining time is calculated
  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData])

  const contexValue = {
    email: email,
    token: token,
    isLoggedIn: userIsLoggedIn,
    onLogin: loginHandler,
    onLogOut: logoutHandler
  }

  return (
    <AuthContex.Provider value={contexValue}>{props.children}</AuthContex.Provider>
  );
}
