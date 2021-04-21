import React from 'react'

import './GameBoard.css'


const getSymbol = (playerType)=>{
    const system = <div className="X">X</div>;
    const player = <div className="O">O</div>;
    if(playerType===0)return player;
    if(playerType===1)return system;
    return null;

}


const Box= (props)=> {

    return (
        <div className="box" onClick={()=>props.boxClickHandler(props.currentPlayer,props.boxNumber)}>
            {getSymbol(props.playerType)}
        </div>
    )
}

export default Box
