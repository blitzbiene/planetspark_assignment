import React, { Component } from 'react'


import './GamePanel.css';
export class GamePanel extends Component {


    getFinishLine = ()=>{
    if(this.props.finalData.result==="system")return <div>System Wins!</div>;
    else if(this.props.finalData.result==="player")return <div>Congrats!</div>
    else return <div>oops! a draw</div>;
    }

    restart = ()=>{
        this.props.restart();
    }
    getFinishMessage = ()=>{

        return(
            <React.Fragment>
            {this.getFinishLine()}
            <button type="button" class="btn btn-outline-warning" onClick={this.restart}>Restart</button>
            </React.Fragment>
        )
    }


    render() {
        return (
            <div style={{textAlign:'left'}}>
                <div className="score-card">Player: {this.props.finalData.playerWins}</div>
                <div className="score-card">System: {this.props.finalData.systemWins}</div>
                <div className="score-card">Draws:  {this.props.finalData.draws}</div>
                {this.props.finalData.result?<div className="finish-message">{this.getFinishMessage()}</div>:null}

                
            </div>
        )
    }
}

export default GamePanel
