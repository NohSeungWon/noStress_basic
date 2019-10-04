import React, { useState } from "react";
import axios from "axios";

const File = () => {
  const [upLoadImg, setUpLoadImg] = useState(null);
  const targetInputRef = [];
  return (
    <div>
      <input type="file" ref={e => targetInputRef.push(e)} />
      <button
        onClick={() => {
          // console.log(targetInputRef[0].files[0]);
          const formData = new FormData();
          formData.append("userFile", targetInputRef[0].files[0]);
          const other = "http://localhost:5000/info/img";
          fetch(other, {
            method: "POST",
            body: formData
          })
            .then(res => res.json())
            .then(data => console.log(data));
          // axios.post(other, formData).then(res => console.log(res));
        }}
      >
        파일 전송
      </button>
    </div>
  );
};

export default File;
