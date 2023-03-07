import React from "react";
import { Link } from "react-router-dom";
import './Deposit.css'

const Deposit = () => {

    return(
        <div>
            <div className='header'>
            <h1 className="bankname">WEGRO BANK</h1>
            <Link to='/login' className="dd"><h2> Logout</h2></Link>
          </div>  

           <div className="formmm-style">
          <form >
                <div className="forminner">
                  <label htmlFor="email">Amount </label>
                  <input type="number" name="amount" id="email" placeholder="Enter Amount"/>

                  <div>
                  <label htmlFor="password">Depositor's Name </label>
                  <input type="text" name="name" id="name"  placeholder="Enter your Name" />
                 </div>

                  <div className='btn-container'>
                    <button type="submit">Deposit</button>
                  </div>
                </div>
            </form>
            </div>

        </div>
    )
}

export default Deposit