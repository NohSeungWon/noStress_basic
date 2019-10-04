import React, { useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  let message;
  return (
    <div>
      <input
        placeholder="채팅입력"
        ref={e => {
          message = e;
        }}
      />
      <button
        onClick={() => {
          const socket = io("http://localhost:5000/");
          socket.on("sever", msg => {
            console.log("server message =>", msg);
          });
          console.log("onclick!");
          socket.emit("user", message.value);
        }}
      >
        전송
      </button>
    </div>
  );
};

export default Chat;
