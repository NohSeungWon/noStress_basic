import React, { useState } from "react";
import Login from "./Login";
import Chat from "./Chat";
import File from "./File";

const App = () => {
  // const [userAuth, setUserAuth] = useState(null);
  const login = ref => {
    // const loginDiv = ref[0];
    const id = ref[1].value;
    const pw = ref[2].value;
    const url = new URL("http://localhost:5000/info/user/" + id + "/" + pw);
    const other = "http://localhost:5000/info/";
    fetch(url, {
      method: "GET",
      credentials: "include"
    })
      .then(res => res.json())
      .then(body => {
        console.log(body);
      });
  };

  return (
    <div className="App">
      <Login login={login} />
      <Chat />
      <File />
    </div>
  );
};

export default App;
