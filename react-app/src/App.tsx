import React from "react";
import Board from "./Board";
import FilterableProductTable from "./FilterableProductTable";
import "./index.css";
export default function Game() {
  return (
    <div className="game">
      {/* <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div></div>
        <ol></ol>
      </div> */}
      <FilterableProductTable />
    </div>
  );
}
