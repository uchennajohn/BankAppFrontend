import React from "react";
import { Link } from "react-router-dom";
import './Withdraw.css'

const Withdraw = () => {

    return(
        <div>
            <div className='header'>
            <h1 className="bankname">WEGRO BANK</h1>
            <Link to='/login' className="dd"><h2> Logout</h2></Link>
          </div>  

           <div className="formm-style">
          <form >
                <div className="forminner">
                  <label htmlFor="email">Amount</label>
                  <input type="number" name="amount" id="email" placeholder="Enter Amount"/>

                  <div className='btn-container'>
                    <button type="submit">Withdraw</button>
                  </div>
                </div>
            </form>
            </div>

        </div>
    )
}

export default Withdraw