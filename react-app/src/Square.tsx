import { useState } from "react";

interface ISquare {
  value: number;
  onClick: (e?: any) => void;
}
const Square: React.FC<ISquare> = ({ value, onClick }) => {
  const [squareValue, setSquareValue] = useState<null | string>(null);
  return (
    <button
      className="square"
      onClick={() => {
        setSquareValue("X");
        onClick();
      }}
    >
      {value}
    </button>
  );
};

export default Square;
