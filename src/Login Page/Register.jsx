import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


function Register(){

  const  [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const validateEmail = (e) => {
      e.preventDefault(); //prevent page from reloading

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if(!emailRegex.test(email)){
        setError("Please enter a valid email address");
      }else{
        setError("")
        alert("Valid Email")//for testing purposes, remove later
      }
  };

  const validatePassword = (e) => {
    e.preventDefault(); //prevent page from reloading

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(!passwordRegex.test(password)){
      setError("Password must contain at least 8 characters, including upper and lower case letters, numbers and special characters");
    }else{
      setError("")
      alert("Valid Password")//for testing purposes, remove later
    }
  }

  const validateConfirmPassword = (e) => {
    e.preventDefault(); //prevent page from reloading

    if(password !== confirmPassword){
      setError("Passwords do not match");
    }else{
      setError("")
      alert("Passwords match")//for testing purposes, remove later
    }
  }

  const validateForm = (e) => {
    e.preventDefault(); //prevent page from reloading

    validateEmail(e);
    validatePassword(e);
    validateConfirmPassword(e);
  }

    return(
      <div className="container">

          <form  id="registrationForm" className="form-container" noValidate method="post" onSubmit={validateForm}>
          <h1>Register</h1>
          <div className="input-fields">
            <input
             type="text"
              required
               placeholder="Create username"
               />
            <input
             type="email"
              required
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
               {error && <p style={{color:"red",marginBottom:"5px" }}>{error}</p>}
            <input
             type="password"
              required
               placeholder="Create Password"
               value={password}
                onChange={(e) => setPassword(e.target.value)}
               />
                {error && <p style={{color:"red",marginBottom:"5px" }}>{error}</p>}

            <input 
            type="password" 
            required 
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p style={{color:"red",marginBottom:"5px" }}>{error}</p>}
            <button type="submit" form="registrationForm" >Register</button>

            </div>
            <p>Already have an account? <Link to={"/"} className="link" >Login</Link> </p>
          </form>
        
        
        
        </div>
    )
}

export default Register;