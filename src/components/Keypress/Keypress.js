import React from 'react';
import './Keypress.css';

const keypress = (props) => {
    return (
        <div id={props.keypress.id} onClick={props.soundDetection}>
        {props.keypress.keyTrigger}
            <audio className="player" src={props.keypress.url}>
                <button onClick={props.activated}>Play</button>
            </audio>
        </div>
    );
}

export default keypress;