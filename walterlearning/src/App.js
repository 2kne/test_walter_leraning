import React from 'react';
import './App.css';


class App extends React.Component {
    state = {
        btn_start: false,
        btn_pause: false,
        left: 4,
        right: 0,
        background_col: "blue",
        off_color: false,
        pause : "Pause",
        first_start : true,
    };

    setcompteur = (left, right) => {
        if (right + left !== 0) {
            if (right === 0) {
                this.setState({
                    left: left - 1,
                    right: right + 9
                })
            } else {
                this.setState({right: right - 1})
            }
        }
    };

    change_color = () => {
        const {left} = this.state;
        const {right} = this.state;
        if (left === 1 && right === 2) {
            this.setState({
                background_col: 'red',
                off_color: true
            });
        } else if (left + right < 3) {
            this.setState({background_col: 'orange'})
        }

    };

    start = () => {
        this.setState({first_start : false});
        if (this.state.btn_start === false) {
            this.timer = setInterval(() => {
                this.setcompteur(this.state.left, this.state.right);
                if (this.state.off_color === false) {
                    this.change_color();
                }
            }, 1000)
            this.setState({btn_start: true});
        } else if (this.state.btn_pause === true) {
            clearInterval(this.timer);
        }

    };

    pause = () => {
        if (this.state.first_start === false) {
            if (this.state.btn_pause === false) {
                this.setState({btn_start: true,
                    btn_pause: true,
                    pause : "Play"}, () => {
                    this.start();
                });
            }
            else if (this.state.btn_pause === true) {
                this.setState({btn_start: false,
                    btn_pause: false,
                    pause : "Pause"}, () => {
                    this.start();
                });
            }
        }
    };


    render() {
        const {left} = this.state;
        const {right} = this.state;
        const {background_col} = this.state;
        const {pause} = this.state;

        return (
            <div className='content'>
                <div style={{background: background_col, width: '100px', height: '100px'}}>
                    {left}
                    {right}
                </div>
                <div className="btn-control">
                    <button onClick={() => this.start()}>Start</button>
                    <button onClick={() => this.pause()}>{pause}</button>
                </div>
            </div>
        );
    }
}

export default App;
