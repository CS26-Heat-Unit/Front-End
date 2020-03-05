import React from "react";

function Controls(props) {

  let add = 100;

  async function handleFight(e) {
    e.preventDefault();
    await props.setScore(props.score + add);
    localStorage.setItem("score", props.score)
    await props.setChats([{message: `Victory! You gained ${add} scovilles.`, time: new Date().toTimeString()}, ...props.chats]);
  }

  const handleInvestigate = e => {
    e.preventDefault();
    props.setChats([{message: "You clicked investigate!", time: new Date().toTimeString()}, ...props.chats])
  }

  return (
    <div className="controls">
      <div className="actions">
        <div className="action" onClick={handleFight}>⚔️</div>
        <div className="action" onClick={handleInvestigate}>🔍</div>
      </div>
      <div className="arrows">
        <div className="arrow">↑</div>
        <div className="arrows-bottom">
          <div className="arrow">←</div>
          <div className="arrow">↓</div>
          <div className="arrow">→</div>
        </div>
      </div>
    </div>
  );
}

export default Controls;