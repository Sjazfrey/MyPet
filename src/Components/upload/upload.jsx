import React, { useState, useContext, useEffect } from "react";
import app from "../../firebase/config";
import { ref as storageRef, getStorage, listAll, uploadBytes, getDownloadURL, deleteObject  } from "firebase/storage";
import './upload.css';
import { AuthContext } from "../../firebase/context";
import { Navigate } from "react-router-dom";

function Upload({picupload}) {
  const [image, setImage] = useState(null);
  const [allImages, setImages] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getFromFirebase();
  }, []);
  const onImageChange = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(file);
          setImage(file);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  const uploadToFirebase = () => {
    if (image) {
  
    const storage=getStorage()
      const imageRef = storageRef(storage, picupload+"/"+image.name );
      uploadBytes(imageRef, image).then(() => {
        
          getDownloadURL(imageRef)

          .then((url) => {
            if (allImages.indexOf(url) < 0) {
              setImages((allImages) => [...allImages, url]);
            }
            console.log(allImages);
            alert("Image uploaded successfully to Firebase.");
          });
      });
    } else {
      alert("Please upload an image first.");
    };
  };

  const getFromFirebase = () => {
   
    const storage =getStorage()
    const listRef=storageRef(storage, "/"+picupload)
    console.log(allImages);
    
      listAll(listRef)
      .then(function (res) {
        res.items.forEach((imageRef) => {
          
          getDownloadURL(imageRef).then((url) => {
            if (allImages.indexOf(url) === -1) {
              setImages((allImages) => [...allImages, url]);
              
            }
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteFromFirebase = (url) => {
    const storage =getStorage()
    let pictureRef = storageRef (storage, url);
    
      deleteObject(pictureRef)
      .then(() => {
        setImages(allImages.filter((image) => image !== url));
        alert("Picture is deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {!user ? (
       
        <Navigate to= "/login" replace={true} />
      ) : (
        <header className="App-header">
           <p>Upload a Photo</p> 
          <input
            type="file"
            accept="image/x-png,image/jpeg"
            onChange={(e) => {
              onImageChange(e);
            }}
          />
          <button onClick={() => uploadToFirebase()}>Upload</button>
          {/* <button onClick={() => getFromFirebase()}>
            Get Images from Firebase
          </button> */}
          <button className="signout" onClick={() => app.auth().signOut()}>Sign Out</button>
          <div id="photos">
            {allImages.map((image) => {
              return (
                <div key={image} className="delete">
                 {/* <img className="homeimage" /> */}
                  <img src={image} alt="" />  
                  <button onClick={() => deleteFromFirebase(image)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </header>
      )}
    </div>
  );
}

export default Upload;