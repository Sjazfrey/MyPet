import React, { useState } from "react";
import Upload from "../upload/upload";
import "./pictures.css";

function Pictures() {
  const [name, setName] = useState("");

  return (
    <div>
     
        <label className="titlename">My Best Friend:</label>

        <input className="nameinput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     

      <Upload picupload={"pictureupload"} />
    </div>
  );
}
export default Pictures;
