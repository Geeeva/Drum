import React, { Component } from 'react';
import './App.css';
import Keypress from '.././components/Keypress/Keypress';
import 'normalize.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drumStatus: false,
            drumType: true, 
            currentKey: [],
            currentId: '',
            bank: [{
                keyCode: 81,
                keyTrigger: 'Q',
                id: 'Heater-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            }, {
                keyCode: 87,
                keyTrigger: 'W',
                id: 'Heater-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            }, {
                keyCode: 69,
                keyTrigger: 'E',
                id: 'Heater-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            }, {
                keyCode: 65,
                keyTrigger: 'A',
                id: 'Heater-4',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            }, {
                keyCode: 83,
                keyTrigger: 'S',
                id: 'Clap',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            }, {
                keyCode: 68,
                keyTrigger: 'D',
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            }, {
                keyCode: 90,
                keyTrigger: 'Z',
                id: "Kick-n'-Hat",
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            }, {
                keyCode: 88,
                keyTrigger: 'X',
                id: 'Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            }, {
                keyCode: 67,
                keyTrigger: 'C',
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            }], 

            bankOne:[{
                keyCode: 81,
                keyTrigger: 'Q',
                id: 'Heater-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            }, {
                keyCode: 87,
                keyTrigger: 'W',
                id: 'Heater-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            }, {
                keyCode: 69,
                keyTrigger: 'E',
                id: 'Heater-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            }, {
                keyCode: 65,
                keyTrigger: 'A',
                id: 'Heater-4',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            }, {
                keyCode: 83,
                keyTrigger: 'S',
                id: 'Clap',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            }, {
                keyCode: 68,
                keyTrigger: 'D',
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            }, {
                keyCode: 90,
                keyTrigger: 'Z',
                id: "Kick-n'-Hat",
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            }, {
                keyCode: 88,
                keyTrigger: 'X',
                id: 'Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            }, {
                keyCode: 67,
                keyTrigger: 'C',
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            }],

                bankTwo : [{
                keyCode: 81,
                keyTrigger: 'Q',
                id: 'Chord-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
            }, {
                keyCode: 87,
                keyTrigger: 'W',
                id: 'Chord-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            }, {
                keyCode: 69,
                keyTrigger: 'E',
                id: 'Chord-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            }, {
                keyCode: 65,
                keyTrigger: 'A',
                id: 'Shaker',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            }, {
                keyCode: 83,
                keyTrigger: 'S',
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            }, {
                keyCode: 68,
                keyTrigger: 'D',
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            }, {
                keyCode: 90,
                keyTrigger: 'Z',
                id: 'Punchy-Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            }, {
                keyCode: 88,
                keyTrigger: 'X',
                id: 'Side-Stick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            }, {
                keyCode: 67,
                keyTrigger: 'C',
                id: 'Snare',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            }],
            isChecked: false,
            valueRange: 100,
            isBank1: true
        }
    }

    /*Detects the sound based on event.target element*/

    soundDetectionHandler = (event) => {

        if(this.state.isChecked === true) {
            let currentKey = this.state.bank.filter((el, key) => {
                return el.id === event.target.id
            })

            let id = currentKey[0].id;
            let key = currentKey[0].keyCode;

            this.setState ({
                currentKey: currentKey,
                currentId: id,
                currentKey: key
            })

            const audio = document.querySelector(`audio[data-key="${key}"]`);

            audio.volume = this.state.valueRange / 100;
            audio.play();
        }
    }

    soundDetectionKeyboardHandler = (event) => {
        if(this.state.isChecked === true) {
            let currentKey = this.state.bank.filter((el, key) => {
                return el.keyCode === event.target.keyCode;
            })

            /*let id = currentKey[0].id;
            let key = currentKey[0].keyCode;*/

            /*this.setState ({
                currentKey: currentKey,
                currentId: id,
                currentKey: key
            })*/



            /*const audio = document.querySelector(`audio[data-key="${key}"]`);

            audio.volume = this.state.valueRange / 100;
            audio.play();*/
            


        }

        console.log(event);
    }

    componentDidMount () {
        window.addEventListener("keyDown", this.soundDetectionKeyboardHandler);
    }

    /*Sets if the drum can play or not*/

    powerHandler = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    /*Sets to two groups of sounds*/

    bankSwitchHandler = () => {
        this.setState({
            isBank1: !this.state.isBank1
        })

        if(this.state.isBank1 === true) {
            this.setState({
                bank: this.state.bankOne
            })
        } else {
            this.setState({
                bank: this.state.bankTwo
            })
        }
    } 

    /*Sets the input range value*/

    rangeHandler = (event) => {
        this.setState({
            valueRange: event.target.value
        });
    }

    render () {
  
        const bank = this.state.bank.map((keypress, key) => {
            return <Keypress
                key={keypress.keyCode}
                keypress={keypress}
                dataKeyAtt={keypress.keyCode} 
                soundDetection={this.soundDetectionHandler.bind(keypress.keyCode)}
            />
        })

        return ( 
            <div className="App">
                <div className="container-fluid">
                    <div className="container">
                        <div className="DrumWrapper">
                            <div className="Drum">
                                {bank}
                            </div>
                            <div className="Controlls">
                                <div className="PowerWrapper">
                                    <div>Power</div>
                                    <label className="switch">
                                        <input type="checkbox" onChange={this.powerHandler}/>
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div className="SoundName">
                                    {this.state.currentId}
                                </div>

                                <div className="RangeWrapper"> 
                                    <div htmlFor="volume">Volume</div>
                                    <input 
                                        type="range" 
                                        id="start" 
                                        name="volume"
                                        min="0" 
                                        max="100" 
                                        step="10"
                                        value={this.state.rangeValue} 
                                        onChange={this.rangeHandler}
                                    />
                                </div>

                                <div className="BankWrapper">
                                    <div>Bank</div>
                                    <label className="switch">
                                        <input type="checkbox" onChange={this.bankSwitchHandler}/>
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        )
    }
}

export default App;
