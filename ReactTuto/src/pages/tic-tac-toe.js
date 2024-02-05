import "./tic.css";
import { useState } from 'react';

// JSX 은 babel 에서 HTML 로 컴파일된다
function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
  
  function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    // <> 는 fragment 라고 한다. Wrapper 없이 요소들을 묶어주는 역할을 한다.
return (
    <> 
    <div className="status">{status}</div>
    <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </>
  );

}

export default function Game() {
    // https://react.dev/reference/react/useState
    // "리액트 훅"은 리액트의 함수형 컴포넌트 조작을 위한 라이브러리이다.
    // 이때, 함수형 컴포넌트는 State(상태)와 LifeCycle(생명주기)를 서로 Hook(연동) 한다는 개념이다.
    // useState 
    // 1. useState 는 컴포넌트의 상태 변수를 추가한 "리액트 훅"이다.
    // State는 컴포넌트의 메모리다. 예를들면, '구매하기' 버튼을 누르면 장바구니로 들어간다.
    // 이때 우리는 장바구니에 들어갈 물건의 입력값, 이미지, 장바구니를 기억해놓아야 한다.
  
    // [변수명, 상태 업데이트 할 변수명] = 초기값
    // 상태 변경시마다 페이지를 리랜더 한다
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
    // Arrow Function
    // 하나의 기능을 하는 함수를 가독성 있게 구현 가능하다
    // 함수의 맥락에 따라서 this가 가리키는 대상이 달라진다.
    // Arrow function은 내부의 this 를 변화시키지 않으므로, 바깥의 this 를 내부에서도 그대로 사용한다.

    // this를 콘솔에 찍어보면 window Object(=전역객체 = 모든 전역변수,함수,DOM을 보관하는 객체)가 찍힌다.
    // 즉, 빈 콘솔 공간에서 console.log()를 가지고있는 주체는 Window Object 라는 것이다.
    // 같은 관점으로, 함수 호출시 this가 가리키는것을 알고싶다면 그 함수를 가지고 있는 주체가 어떤것인지 판단하면 된다.

    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
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
      }
    }
    return null;
  }
  