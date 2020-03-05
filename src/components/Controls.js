import React from "react";

function Controls() {
  return (
    <div className="controls">
      <div className="actions">
        <div className="action">Fight ⚔</div>
        <div className="action">Flee</div>
      </div>
      <div className="arrows">
        <div className="arrow">🔺 </div>
        <div className="arrows-bottom">
          <div className="arrow">◀</div>
          <div className="arrow">🔻</div>
          <div className="arrow">▶ </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;