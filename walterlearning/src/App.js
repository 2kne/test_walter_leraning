import React from 'react';
import './App.css';


class App extends React.Component {
    state = {
        left : 4,
        right : 0,
        background_col : "blue",
        off_color: false
    };



    setcompteur = (left, right) => {
        if (right+left !== 0) {
            if (right === 0) {
                this.setState({ left : left-1,
                                     right : right+9})
            }
            else {
                this.setState({right : right-1})
            }
        }
    };

    change_color = () => {
        const {left} = this.state;
        const {right} = this.state;
        if (left === 1 && right === 2) {
            this.setState({background_col:'red',
                                off_color: true});
        }
        else if (left+right < 3) {
            this.setState({background_col:'orange'})
        }

    };

    start = () => {
        setInterval(() => {
          this.setcompteur(this.state.left, this.state.right);
          if (this.state.off_color === false) {
              this.change_color();
          }
        },1000)
    };


    render() {
        const {left} = this.state;
        const {right} = this.state;
        const {background_col} = this.state;

        return (
                <div className='content'>
                    <div style={{ background: background_col, width: '100px', height: '100px' }}>
                        {left}
                        {right}
                    </div>
                    <button onClick={() => this.start()}>Start</button>
                </div>
        );
    }
}

    export default App;
