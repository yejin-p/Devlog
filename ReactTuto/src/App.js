import TicTacToe from './pages/tic-tac-toe';
import Profile from './pages/pass-prop';
import List from './pages/filter-render';
import Tree from './pages/tree-struct';
import Event from './pages/handle-event';
import Object from './pages/object';
import Example1 from './pages/example1';
import Example2 from './pages/example2';
import Interactive from './pages/interactive-state';

import Home from './pages/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// Tobe... 전역 컴포넌트 관리를 할 수 있다면 좋을 것 같은데... 
// useContext 또는 Redux와 같은 상태관리 툴을 이용해야할 것 같다
export default function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tic-tac-toe" element={<TicTacToe/>}></Route>
        <Route path="/pass-prop" element={<Profile/>}></Route>
        <Route path="/filter-render" element={<List/>}></Route>
        <Route path="/tree-struct" element={<Tree/>}></Route>
        <Route path="/handle-event" element={<Event/>}></Route>
        <Route path="/object" element={<Object/>}></Route>
        <Route path="/example1" element={<Example1/>}></Route>
        <Route path="/example2" element={<Example2/>}></Route>
        <Route path="/interactive-state" element={<Interactive/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}
