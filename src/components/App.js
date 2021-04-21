import React from 'react';

import GameTitle from './game_title/GameTitle';
import PlayArena from './play_arena/PlayArena';

import './App.css'

class App extends React.Component{





    render(){
     return(
            <div className="container app">
            <div className="game-title"><GameTitle/></div>
            <div className="play-arena"><PlayArena/></div>
            </div>
        );
    }
};

export default App;