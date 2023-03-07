import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useAuth } from '../../context/authContext'


const Login = () => {
  const {LoginConfig} = useAuth();
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
      console.log(formData)
  }




  const handleSubmit = (e) => {
      e.preventDefault()
      LoginConfig(formData)
console.log(formData)
     setFormData({})
   
}
  return (
    <div className='register-container'>
        <div className ="bgg-background">
          
        <div className='headerr'>
            <h1 className='bankname'>WEGRO BANK</h1>
          </div>  
          <div className='headerr'>
            <h3>Login to access your dashboard and make transaction</h3>
          </div>

        <div className='form-style'>
            
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email </label>
                  <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="password">Password </label>
                  <input type="password" name="password" id="password"  placeholder="Enter your password" onChange={handleChange}/>
                </div>
               
                <div>
                  <label htmlFor="password">Account Number </label>
                  <input type="name" name="accountNumber" id="accountnumber"  placeholder="Enter your Account Number" onChange={handleChange}/>
                </div>
               


                <div>
                
                  <div className='btn-container'>
                    <button><Link to="/dashboard" className="dd">Login</Link></button>
                  </div>
                </div>
                
              </form>
   
        </div>
        </div>
    </div>
  )
}

export default Login