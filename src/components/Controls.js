import React from "react";

function Controls(props) {

  const room = props.room;
  let add = 100;

  

  var keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
  };

  async function handleFight(e) {
    e.preventDefault();
    await props.setScore(props.score + add);
    localStorage.setItem("score", props.score)
    await props.setChats([{message: `Victory! You gained ${add} scovilles.`, time: new Date().toTimeString()}, ...props.chats]);
  }

  const handleInvestigate = e => {
    e.preventDefault();
    props.setChats([{message: `You clicked investigate in room #${room}!`, time: new Date().toTimeString()}, ...props.chats])
  }

  const handleArrow = num => {

  }

  return (
    <div className="controls">
      <div className="actions">
        <div className="action" onClick={handleFight}>⚔️</div>
        <div className="action" onClick={handleInvestigate}>🔍</div>
      </div>
      <div className="arrows">
        <div className="arrow" onClick={handleArrow(38)}>↑</div>
        <div className="arrows-bottom">
          <div className="arrow" onClick={handleArrow(37)}>←</div>
          <div className="arrow" onClick={handleArrow(40)}>↓</div>
          <div className="arrow" onClick={handleArrow(39)}>→</div>
        </div>
      </div>
    </div>
  );
}

export default Controls;