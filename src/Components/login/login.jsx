import React, { useState } from "react";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

import "./login.css";

function Login() {
  const [login, setLogin] = useState(" ");
  const [loginEmail, setLoginEmail] = useState(" ");
  const [loginPassword, setLoginPassword] = useState(" ");

  const navigate = useNavigate(login);

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
      const user = userCredential.user;
      console.log(user)
      return true;
    } catch (error) {
      return { error: error.message };
    }
  };

  return (
    <div className="boxed">
      <h1>Welcome Back!</h1>

      <form onSubmit={(event)=> event.preventDefault() }>
        <div className="label-field1">
          <label className="labellogin">
            Email Address<span className="req">*</span>
          </label>
          {/* <input type="email"required autocomplete="off"/> */}
          <input
            placeholder=""
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
        </div>

        <div className="label-field1">
          <label className="labellogin">
            Password(6 characters)<span className="req">*</span>
          </label>
          {/* <input type="password"required autocomplete="off"/> */}
          <input
            placeholder=""
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </div>

        <p className="forgot">
          <a href="#">Forgot Password?</a>
        </p>

        <button onClick={() => signIn()} className="button button">
          Log In
        </button>
      </form>
    </div>
  );
}
export default Login;
