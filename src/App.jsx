import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Board } from "./components/board/Board";
import { winningMoves } from "./Moves";

function App() {
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const showMove1 = (id) => {
    if (gameOver) {
      return;
    }
    const array = [...boards];
    if (array[id] !== null) {
      return;
    }
    array[id] = isX;
    setBoards(array);
    if (array[id] === "X") {
      setIsX("O");
    } else {
      setIsX("X");
    }
    console.log(id);
  };

  useEffect(() => {
    const checkWinner = (board) => {
      for (let i = 0; i < winningMoves.length; i++) {
        const [a, b, c] = winningMoves[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          console.log("Game over!");
          if (board[a] === "X") {
            setGameOver(true);
            console.log("X wins the game!");
          } else {
            setGameOver(true);
            console.log("O wins the game!");
          }
          return;
        }
      }
      const boardIsFilled = board.every((board) => board !== null);
      if (boardIsFilled) {
        setGameOver(true);
        console.log("Draw!!!");
      }
    };
    checkWinner(boards);
  }, [boards]);

  return (
    <>
      <Header />
      <main>
        <div className="mainBoardContainer">
          {boards.map((board, id) => (
            <Board key={id} onClick={() => showMove1(id)} value={board} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
