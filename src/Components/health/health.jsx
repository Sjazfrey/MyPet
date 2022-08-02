import React, { useState, useContext } from 'react';
import './health.css';
import { AuthContext } from "../../firebase/context";
import { Navigate } from "react-router-dom";

function Health(){
    const [ petinfo, setPetInfo ] = useState(" ");
    const { user } = useContext(AuthContext);
   
    


    return (
     <div>
      {!user ? (
       
        <Navigate to= "/login" replace={true} />
      ) : (
        <form>
          
          <div id="main">
       
            <div id="left">
              <div>
              <label className="name">Name</label>
              <input type="text" name="firstName" required /><br/>
              <label className="dob">Date of Birth</label>
              <input type="date" name="dob" required />
            </div>
            <div className="separate">
              <label className="label">Breed</label>
              <input type="text" name="breed"/>
              <label>Gender</label>
              <input type="text" name="gender"/>
              <label>Weight</label>
              <input type="text" name="weight"/>
            </div>
            <div >
              <label>Rabies #</label>
              <input type="text" name="color"/>
              <label>Chip Information</label>
              <input type="text" name="eye"/>
            </div>
          </div>
          </div>
              {/* right column */}
          <div id="right">
            <div>
              <label>Heart Worm Medication</label>
              <input type="text" name="heartworm"/>
            </div>
            <div className="separate">
              <label>Allergies and Medical Conditions</label>
              <input type="text" name="allergies"/>
            </div>
            <div className="separate">
              <label>Brand of Pet Food</label>
              <input type="text" name="food"/>
              <label>Brand of Treats</label>
              <input type="text" name="treats"/>
            </div>
            <div className="separate">
              <label>Veterinarian Phone#</label>
              <input type="text" name="vet"/>
              <label>Veterinarian email</label>
              <input type="text" name="vetemail"/>
            </div>
            <div className="question">
              <label>Questions</label>
              <textarea className="box" ></textarea>
            </div>
             
            <button type="submit" >Submit</button>

           
         </div>
        </form>  
        )} 
        </div>
    )
    
      }

export default Health;