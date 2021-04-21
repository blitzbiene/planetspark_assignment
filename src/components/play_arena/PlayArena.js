import React from 'react';


import GameBoard from './game_board/GameBoard';
import GamePanel from './game_panel/GamePanel';

import './PlayArena.css'
class PlayArena extends React.Component{

    state={
        systemWins:0,
        playerWins:0,
        playerName:"Player",
        draws:0,
        disabled:false,
        result:null
    }

    endGame = (winner)=>{
        if(winner===0){
            this.setState({playerWins:this.state.playerWins+1});
            this.finishGame("player")
        }
        else{
            this.setState({systemWins:this.state.systemWins+1});
            this.finishGame("system");
        }
    
    }

    drawGame = ()=>{
        this.setState({draws:this.state.draws+1});
        this.finishGame("draw");
    }
    finishGame = (result)=>{
        this.setState({disabled:true,result:result});


    }
    restartGame = ()=>{
        this.setState({disabled:false,result:"restart"});

    }
    flushMoves = ()=>{
        this.setState({result:null});
    }


    render(){

        return(
            <React.Fragment>
                <div className="row">
                <div className="col-8 container"><GameBoard flushMoves={this.flushMoves} disabled={this.state.disabled} endGame={this.endGame} drawGame={this.drawGame} result={this.state.result}/></div>
                <div className="col-4 game-panel"><GamePanel restart={this.restartGame}finalData={this.state}/></div>
                </div>


            </React.Fragment>
     );
    }
}
export default PlayArena;