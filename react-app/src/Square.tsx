interface ISquare {
  value: number;
}
const Square: React.FC<ISquare> = ({ value }) => {
  return <button className="square">{value}</button>;
};
export default Square;
