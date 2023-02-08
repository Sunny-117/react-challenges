import React, { useEffect, useState } from "react";
import Square from "./Square";
import { calculateWinner } from "./utils";

const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState<null | string>(null);
  function renderSquare(i: number) {
    const handleClick = (i: number) => {
      const squaresArr = squares.slice();
      console.log(squaresArr);
      squaresArr[i] = xIsNext ? "X" : "O";
      setXIsNext(!xIsNext);
      setSquares(squaresArr);
    };
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus("Winner" + winner);
    } else {
      setStatus("next player" + (xIsNext ? "X" : "O"));
    }
  }, [squares]);

  return (
    <div>
      <p> {status}</p>
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
