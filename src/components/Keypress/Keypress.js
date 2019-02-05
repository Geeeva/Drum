import React from 'react';
import './Keypress.css';

const keypress = (props) => {
	//console.log(props.dataKeyAtt);
    return (
        <div id={props.keypress.id} onClick={props.soundDetection}>
            {props.keypress.keyTrigger}
            <audio data-key={props.dataKeyAtt} src={props.keypress.url} >
            </audio>
        </div>
    );
}

export default keypress;