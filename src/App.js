import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/RegisterForm/Register";
import Login from "./pages/LoginForm/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Withdraw from "./pages/WithdrawForm/Widthdraw";
import History from "./pages/History/History";
import Deposit from "./pages/DespositForm/Deposit";
import Balance from "./pages/Balance/Balance";
import LandingPage from "./pages/LandingPage/LandingPage";
import  DataProvider  from "../src/context/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions/withdraw/:userId" element={<Withdraw/>} />
            <Route path="/transactions/deposit/:userId" element={< Deposit/>} />
            <Route path="/transactions/history/:userId" element={< History/>} />
            <Route path="transactions/balance/:userId" element={< Balance/>} />
          </Routes>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}


export default App;
