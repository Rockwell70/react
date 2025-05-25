import {useState} from "react";


let WINNER = false;
function Square({ value, onSquareClick }) {
    if (value === "X") {
        return (
            <button className="square" onClick={onSquareClick} style={{backgroundColor: 'black', color: 'white'}}>
                {value}
            </button>
        );
    } else {
        return (
            <button className="square" onClick={onSquareClick} style={{backgroundColor: 'blue', color: 'white'}}>
                {value}
            </button>
        );
    }

}


function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O"
        }
        onPlay(nextSquares);

    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `${winner} wins !`;
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    let board = [];
    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 0; j < 3; j++) {
            row.push(
                <Square value={squares[i * 3 +j]} onSquareClick = {() => handleClick(i * 3 +j)}/>
            );
        }
        board.push(<div className="board-row">{row}</div>)
    }
    return (
        <div>
            <div className="status">{status}</div>
            {board}
        </div>

    );


    // return (
    //     <>
    //     <div className="status">{status}</div>
    //         <div className="board-row">
    //             <Square value={squares[0]} onSquareClick = {() => handleClick(0)}/>
    //             <Square value={squares[1]} onSquareClick = {() => handleClick(1)}/>
    //             <Square value={squares[2]} onSquareClick = {() => handleClick(2)}/>
    //         </div>
    //         <div className="board-row">
    //             <Square value={squares[3]} onSquareClick = {() => handleClick(3)}/>
    //             <Square value={squares[4]} onSquareClick = {() => handleClick(4)}/>
    //             <Square value={squares[5]} onSquareClick = {() => handleClick(5)}/>
    //         </div>
    //         <div className="board-row">
    //             <Square value={squares[6]} onSquareClick = {() => handleClick(6)}/>
    //             <Square value={squares[7]} onSquareClick = {() => handleClick(7)}/>
    //             <Square value={squares[8]} onSquareClick = {() => handleClick(8)}/>
    //         </div>
    //
    //     </>
    // );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];

        } let WINNER = true;
    }
    return null;
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 2), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0 && move < 9) {
            description = `You are at move #${move}`;
        } else if (move === 9){
            if (!WINNER) {
                description = 'Personne n\'a gagné';
            } else {
                description = 'We have a winner';
            }

        } else {
            description = 'No moves have been made'
        }

        return (
            <div key={move}>
                {/*<button onClick={() => jumpTo(move)}>{description}</button>*/}
                <span>{description}</span>
            </div>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className={"refresh-page"}>
                {<button onClick={() => {
                window.location.reload();
            }}>
                Refresh Page
            </button>}
        </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>

        </div>
    );
}
