export default function GameBoard() {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <>
      <ol id='game-board'>
        {initialBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button>{col}</button>
              </li>
            ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
