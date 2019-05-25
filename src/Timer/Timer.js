import React,{ Component } from 'react';
import './Timer.css';

class Timer extends Component {
    state = {
        time: 0
    }

    addTime = () => {
        let newTime = this.state.time += 1;
        this.setState({
            time: newTime
        })
        console.log('added')
    }
    
    doAddTime = () => {
        // clearInterval(this.doSubtractTime);
        setInterval(this.addTime, 1000);
    }

    subtractTime = () => {
        let newTime = this.state.time -= 1;
        this.setState({
            time: newTime
        })
        console.log('subtracted')
    }
    
    doSubtractTime = () => {
        // clearInterval(this.doAddTime);
        setInterval(this.subtractTime, 1000);
    }
    
    doPause = () => {
        clearInterval(this.doAddTime);
        clearInterval(this.doSubtractTime);
      }
    
    
    render() {
      return (
        <div className="Timer">
          <div className="timer-number">{this.state.time}</div>
          <div>
              <button className="timer-button" onClick={() => this.doAddTime()}>+</button>
              <button className="timer-button" onClick={() => this.doSubtractTime()}>-</button>
              <button className="timer-button" onClick={() => this.doPause()}>pause</button>
          </div>
        </div>
      );
    }
  }


export default Timer;