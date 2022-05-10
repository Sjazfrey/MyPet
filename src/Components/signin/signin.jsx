import React, { useState } from 'react';
import './signin.css';

function Signin(){

    const [ signin, setSignin ] = useState(" ")
    const [ signup, setSignup ]= useState(" ")
    
    return(
    <div className="boxed">
        <ul className="top-area">
            <li className="tab active"><a href="#signup">Sign Up</a></li>
            <li className="tab"><a href="#login">Log In</a></li>
        </ul>
        <div className="tab-content">
        <div id="signup">   
          <h1>Sign Up</h1>
          
         <form action="/" method="post">
          
          <div className="top-row">
            <div className="label-field">
              <label>
                First Name<span classNamw="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>
        
            <div className="label-field">
              <label>
                Last Name<span className="req">*</span>
              </label>
              <input type="text"required autocomplete="off"/>
            </div>
          </div>
 
          <div className="label-field">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div className="label-field">
            <label>
              Set A Password<span className="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <button type="submit" className="button buttons-block">Get Started</button>
          
        </form>
 
        </div>
        {/* needs backend will be hidden until account setup*/}
        <div id="login">   
          <h1>Welcome Back!</h1>
          
          <form action="/" method="post">
          
            <div className="label-field">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div className="label-field">
            <label>
              Password<span className="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          
          <button className="button button">Log In</button>
          
          </form>
 
        </div>
        
      </div>  
     </div> 
    
    )
    
    }
    export default Signin;