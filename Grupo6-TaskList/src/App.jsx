import React, { useState, useEffect, useRef } from 'react';

const MAZE = `
###############
#P        #    #
#          #    #
# ######## #    #
#              # #
# #       # #    #
# # ##### # # #
#              #    #
###############`;

const DIRECTIONS = {
 'UP': [0, -1],
 'DOWN': [0, 1],
 'LEFT': [-1, 0],
 'RIGHT': [1, 0],
};

const getNewPosition = (position, direction) => {
 const [dx, dy] = DIRECTIONS[direction];
 const x = position[0] + dx;
 const y = position[1] + dy;
 return [x, y];
};

const canMove = (maze, position) => {
 const [x, y] = position;
 return maze[y] && maze[y][x] !== '#';
};

const getInitialState = () => {
 const rows = MAZE.trim().split('\n');
 const player = rows.reduce((acc, row, y) => {
    if (acc) return acc;
    const x = row.indexOf('P');
    if (x !== -1) return [x, y];
    return acc;
 }, null);

 return {
    player,
    maze: rows,
 };
};

const App = () => {
 const [state, setState] = useState(getInitialState());
 const intervalRef = useRef(null);

 const movePlayer = (direction) => {
    const newPosition = getNewPosition(state.player, direction);
    if (canMove(state.maze, newPosition)) {
      setState({ ...state, player: newPosition });
    }
 };

 const startGame = () => {
    intervalRef.current = setInterval(() => {
      movePlayer('RIGHT');
    }, 100);
 };

 const stopGame = () => {
    clearInterval(intervalRef.current);
 };

 useEffect(() => {
    startGame();
    return stopGame;
 }, []);

 return (
    <div style={{ margin: '0 auto', width: '200px', height: '400px', border: '1px solid black' }}>
      {state.maze.map((row, y) => {
        return row.split('').map((cell, x) => {
          const style = {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            border: '1px solid black',
          };

          if (state.player && x === state.player[0] && y === state.player[1]) {
            return <div style={{ ...style, background: 'red' }} key={`${x}-${y}`}></div>;
          }

          if (cell === '#') {
            return <div style={{ ...style, background: 'black' }} key={`${x}-${y}`}></div>;
          }

          return <div style={style} key={`${x}-${y}`}></div>;
        });
      })}
    </div>
 );
};

export default App;
