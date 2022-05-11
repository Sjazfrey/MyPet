import React, {useState, useEffect} from 'react';
import './home.css';
import Dragdrop from '../dragdrop/dragdrop';
import Delay from '../delay/delay';


function Home(){

    const [ name, setName ] = useState("");
    const [ counter, setCounter ] = useState(1)
       
    useEffect(() => {
         let cat = document.getElementById("cat");    
         let startTime = new Date().getTime();
         let walkTheCat = function() {
         let currTime = new Date().getTime();
         let secondsElapsed = ((currTime - startTime)/2000);
         let newLeft = secondsElapsed * 50;
         cat.style.left = newLeft -90 + 'px';   
         
         window.requestAnimationFrame(walkTheCat);
     };
   
     walkTheCat();
    },[]);

    useEffect(() => {
      setTimeout(() => { 
      let dog = document.getElementById("dog");    
      let startTime = new Date().getTime();
      let walkTheDog = function() {
      let currTime = new Date().getTime();
      let secondsElapsed = ((currTime - startTime)/2300);
      let newLeft = secondsElapsed * 50;
      dog.style.left = newLeft -150 + 'px';
  
      window.requestAnimationFrame(walkTheDog);

  };
  walkTheDog();
}, 6100);

 },[]);

        //add another pet pic up to 3 pets
     let addPet=()=> {
        let result;
        if (counter < 3) {
          result = true;
        } else {
          result = false;
        }
        return result;
      }
     
    return(  
      <div className="hidescroll">
      {/* Cat walking GIF from: http://www.anniemation.com/clip_art/graphics.html */}
      <img id="cat" src="https://www.kasandbox.org/programming-images/misc/cat-walk.gif"/>
     <Delay>
           {/* Dog walking GIF from: https://www.pinterest.com/pin/472526185902776354/ */}
        <img id="dog" src="https://c.tenor.com/ePjGbe3qxbYAAAAj/golden-retriever-walking.gif"/>
     </Delay>

      <div className="homedrop">       
 
            <Dragdrop/> 
       
        <form>       
            <input className= "petPlace"
            type = "text" 
            placeholder = "Pet Name" 
            value = {name}
            onChange = {(e)=>setName(e.target.value)}/>      
    
       {/* submit button to show up if < 3 needs backend*/}
        { addPet() ?  <input className="addpet" type="submit" value="Submit"></input> : null }                   
    </form>
    </div>
    </div>
      
    )
}

export default Home;