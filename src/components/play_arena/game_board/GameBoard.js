import React, { Component } from 'react'


import Box from './Box';


import './GameBoard.css';
export class GameBoard extends Component {


    state ={
      boxes:{},
      currentPlayer:0,
    }

    randomMachineMove = ()=>{
      const emptyBoxes = [];
      for(let i=0;i<9;i++)if(this.state.boxes[i]===undefined)emptyBoxes.push(i);
      if(emptyBoxes.length===0){
        this.props.drawGame();
      }
      this.boxClickHandler(1,emptyBoxes[Math.floor(Math.random()*emptyBoxes.length)]);
    }


    checkWin = ()=>{
        const grid = this.state.boxes;

        if(grid[0]!==undefined){
          if(grid[0]===grid[1] && grid[1]===grid[2])return grid[0];
          if(grid[0]===grid[3] && grid[3]===grid[6])return grid[0];
          if(grid[0]===grid[4] && grid[4]===grid[8])return grid[0];
        }

        if(grid[2]!==undefined){
          if(grid[2]===grid[5] && grid[5]===grid[8])return grid[2];
          if(grid[2]===grid[4] && grid[4]===grid[6])return grid[2];
          }
        if(grid[4]!==undefined){
          if(grid[4]===grid[1] && grid[1]===grid[7])return grid[4];
          if(grid[5]===grid[3] && grid[3]===grid[4])return grid[4];

        }
        if(grid[7]!==undefined){
          if(grid[7]===grid[8] && grid[7]===grid[6])return grid[7];
        }


        return 2;



    }


    boxClickHandler = (currentPlayer,key)=>{
        if(this.props.disabled)return;
       if(this.state.boxes[key])return;
       const new_box = this.state.boxes;
       console.log(this.state.boxes);
       new_box[key]=currentPlayer;
       this.setState({boxes:new_box});
       if(currentPlayer===0)this.setState({currentPlayer:1});
       else this.setState({currentPlayer:0});
       const winner = this.checkWin();
       console.log("winner is ",winner);
       if(winner!==2){
         this.props.endGame(winner);
         return;
       } 
       if(currentPlayer===0)this.randomMachineMove();
    }
    
    
    componentDidUpdate = ()=>{
      if(this.props.result==="restart")
      { this.setState({boxes:{},currentPlayer:0});

        this.props.flushMoves();}
    }

    render() {

      
        
        return (
            
        <div id="gameboard">
          <Box currentPlayer={this.state.currentPlayer} boxNumber='0' playerType={this.state.boxes[0]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='1' playerType={this.state.boxes[1]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='2' playerType={this.state.boxes[2]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='3' playerType={this.state.boxes[3]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='4' playerType={this.state.boxes[4]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='5' playerType={this.state.boxes[5]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='6' playerType={this.state.boxes[6]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='7' playerType={this.state.boxes[7]} boxClickHandler={this.boxClickHandler}/>
          <Box currentPlayer={this.state.currentPlayer} boxNumber='8' playerType={this.state.boxes[8]} boxClickHandler={this.boxClickHandler}/>
        </div>
            
        )
    }
}

export default GameBoard;
