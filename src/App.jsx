import { useState, useEffect } from "react";
import "./App.css";
import { Loader } from "./components/loader/Loader";
import { Header } from "./components/header/Header";
import { Board } from "./components/board/Board";
import { Result } from "./components/result/Result";
import { Restart } from "./components/restart/Restart";
import { winningMoves } from "./Moves";

function App() {
  const [loader, setLoader] = useState(false);
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState("X");
  const [result, setResult] = useState("Start the game!");
  const [gameOver, setGameOver] = useState(false);

  const refresh = () => {
    setLoader(true);
    setBoards(Array(9).fill(null));
    setIsX("X");
    setResult("Start the game!");
    setGameOver(false);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  };

  useEffect(() => {
    refresh();
  }, []);
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

  const checkWinner = (board) => {
    console.log("Rendered!");
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

  useEffect(() => {
    const boardsNotClicked = boards.every((board) => board === null);
    if (boardsNotClicked) {
      return;
    }
    checkWinner(boards);
  }, [boards]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <div className="mainBoardContainer">
              {boards.map((board, id) => (
                <Board key={id} onClick={() => showMove1(id)} value={board} />
              ))}
            </div>
            <Result result={result} />
            <Restart onClick={() => refresh()} />
          </main>
        </>
      )}
    </>
  );
}

export default App;
