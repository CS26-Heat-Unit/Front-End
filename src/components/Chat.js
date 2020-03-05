import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState([
    {message: "Chat in progress 1...", time: new Date().toTimeString()},
    {message: "Chat in progress 2...", time: new Date().toTimeString()},
    {message: "Chat in progress 3...", time: new Date().toTimeString()},
  ]);

  const handleChange = e => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setChats([...chats, {message: newMessage, time: new Date().toTimeString()}]);
    setNewMessage('')
    var frm = document.getElementsByClassName('enter')[0];
    frm.reset();
  };

  return (
    <div className="chat">
      <div className="messages">
        {chats.map(chat => (
          <>
            <div className="chats">
              <span className="time">[{chat.time.slice(0, 8)}] </span>
               {chat.message}
            </div>
          </>
        ))}
      </div>
      <form className="enter" onSubmit={handleSubmit}>
        >> <span className="spacer" />{" "}
        <TextField
          name="newMessage"
          type="text"
          placeholder="  got something to say?"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Chat;
