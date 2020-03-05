import React, { useState, useEffect } from "react";

import Map from "./Map";
import Chat from "./Chat";
import Controls from "./Controls";
import Score from "./Score";

const Console = (props) => {

  const [score, setScore] = useState(0);
  localStorage.setItem('score', score)
  const [chats, setChats] = useState([]);

    return (
      <div className="console">
        <Map />
        <div className="interface">
          <Chat chats={chats} setChats={setChats} loggedIn={props.loggedIn} />
          <Controls score={score} setScore={setScore}  chats={chats} setChats={setChats} />
          <Score  score={score} />
        </div>
      </div>
    );
  }

export default Console;
