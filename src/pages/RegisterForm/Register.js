import React,{useState} from 'react'
import './Register.css'
import { useAuth } from '../../context/authContext'
import { Link } from 'react-router-dom';


const Register = () => {
  const {RegisterConfig} = useAuth();
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
      const{name, value} = e.target
      setFormData({...formData, [name]: value})
  }

 const handleSubmit = (e) => {
      e.preventDefault()
      RegisterConfig(formData)

     setFormData({})

 }
  return (
    <div className='register-container'>
        <div className ="bg-background">
          
          <div className='header'>
            <h1 className='bankname'>WEGRO BANK</h1>
            <Link to='/login' className='dd'><h2>Already have an account? Login</h2></Link>
          </div>  
          <div className='small'>
            <h3>Sign Up to Create your Bank Account</h3>
          </div>
        

        <div className='form-style'>
            
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email </label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password"  placeholder="Enter your password" onChange={handleChange}/>
                </div>

                <div>
                  <label htmlFor="password">Account Name </label>
                  <input type="text" name="name" id="name"  placeholder="Enter your Name" onChange={handleChange}/>
                </div>
               
                <div>
                  <label htmlFor="password">Account Number </label>
                  <input type="number" name="accountNumber" id="accountnumber"  placeholder="Enter your Account Number" onChange={handleChange}/>
                </div>
               
                 <div>
                  <div></div>
                  <div className='btn-container'>
                    <button type="submit">Sign Up</button>
                  </div>
                </div>
                
              </form>
        </div>
        </div>
    </div>
  )
}

export default Register