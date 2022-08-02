import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [signup, setSignup] = useState(" ");
  const [registerEmail, setRegisterEmail] = useState(" ");
  const [registerPassword, setRegisterPassword] = useState(" ");

  const navigate = useNavigate();

  //create and generate user login in automatically
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/Login");
      // console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};

  const logout = async () => {};

  return (
    <div className="boxed">
      <ul className="top-area">
        <button className="tab" onClick={() => navigate("/Login")}>
          Already have an Account Login
        </button>
      </ul>
      <div className="tab-content">
        <div id="signup">
          <h1>Sign Up</h1>

          <form onSubmit={(event)=> event.preventDefault() }>
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
                <input type="text" required autocomplete="off" />
              </div>
            </div>

            <div className="label-field1">
              <label>
                Email Address<span className="req">*</span>
              </label>
              {/* <input type="email"required autocomplete="off"/> */}
              <input
                placeholder=""
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>

            <div className="label-field1">
              <label>
                Password 6 characters<span className="req">*</span>
              </label>
              {/* <input type="password"required autocomplete="off"/> */}
              <input
                type="password"
                placeholder=""
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>

            <button
              onClick={register}
              type="submit"
              className="button buttons-block"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
