import React from 'react';
import { useState } from 'react';
import './Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., validate and send data to a server.
  };
 
  return (
    <>
     <div className="login-form">
      <h2 className='h2'>Login</h2>
      <form className='form' onSubmit={handleSubmit}>
       
        <input
          type="email"
          className="input"
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />  
 
        <input
          type="password"
          className="input"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='login' type="submit">Login</button>
        <p>No Account? <Link to={'/signup'}>Sign up</Link></p>
        <Link to={'/forget'}>Forgot password?</Link>
        </form>
    </div>
    
    </>
    
    )
}

export default Login
