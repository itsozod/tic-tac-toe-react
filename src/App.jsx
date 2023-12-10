import { useState, useEffect } from "react";
import "./App.css";
import { Board } from "./components/board/Board";

function App() {
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState("X");
  // const [winColor, setWinColor] = useState("");
  // const [gameOver, setGameOver] = useState(false);

  const showMove1 = (id) => {
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
  };

  useEffect(() => {
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const checkWinner = (board) => {
      for (let i = 0; i < winningMoves.length; i++) {
        const [a, b, c] = winningMoves[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          console.log("Game over!");
          if (board[a] === "X") {
            console.log("X wins the game!");
          } else {
            console.log("O wins the game!");
          }
        }
      }
    };
    checkWinner(boards);
  }, [boards, isX]);

  return (
    <>
      <div className="mainBoardContainer">
        {boards.map((board, id) => (
          <Board key={id} onClick={() => showMove1(id)} value={board} />
        ))}
      </div>
    </>
  );
}

export default App;
