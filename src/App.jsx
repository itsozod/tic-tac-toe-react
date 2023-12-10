import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Board } from "./components/board/Board";
import { Result } from "./components/result/Result";
import { winningMoves } from "./Moves";

function App() {
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState("X");
  const [result, setResult] = useState("Start the game!");
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
      setResult("Next player: O");
    } else {
      setIsX("X");
      setResult("Next player: X");
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
            setResult("X wins the game!");
          } else {
            setGameOver(true);
            setResult("O wins the game!");
          }
          return;
        }
      }
      const boardIsFilled = board.every((board) => board !== null);
      if (boardIsFilled) {
        setGameOver(true);
        setResult("Draw!!!");
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
        <Result result={result} />
      </main>
    </>
  );
}

export default App;
