 import React  from "react";
 import { Link } from "react-router-dom";
 import './Dashboard.css'

 const Dashboard = () => {

    return (
      <div className="dashboard">
        <div className='headeer'>
            <h1 className="bankname">WEGRO BANK</h1>
            <Link to='/login' className="dd"><h2>Logout</h2></Link>
          </div>  

        <div className="shadow">
      <h2>Your balance is: <span>&#8358;</span>0.00</h2> 
      <div className="btnn">  
        <button><Link to="/transactions/withdraw/aa" className="dd"> Withdraw</Link></button>
        <button>Transaction History</button>
        <button><Link to="/transactions/deposit/aa" className="dd"> Deposit</Link></button>
        </div>
        </div>
      </div>
    );
 }

 export default Dashboard;