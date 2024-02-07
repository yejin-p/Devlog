import { useState } from 'react';

// onAddTodo(title) : nextId++, title : title, done:false 로 객체 업데이트 하는 함수를 상위 컴포넌트에서 내려받아 클릭시 해당 함수를 실행.
export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
