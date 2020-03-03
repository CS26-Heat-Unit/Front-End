import React from "react";

import Map from './Map';
import Chat from './Chat';
import Controls from './Controls';
import Score from './Score';

function Console() {
  return (
    <div className="console">
        <Map />
        <div className="interface">
            <Chat />
            <Controls />
            <Score />
        </div>
    </div>
  );
}

export default Console;