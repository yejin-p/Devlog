import TicTacToe from './pages/tic-tac-toe';
import Profile from './pages/pass-prop';
import List from './pages/filter-render';
import Tree from './pages/tree-struct';
import Event from './pages/handle-event';

import Home from './pages/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
      </Routes>
    </BrowserRouter>
  </>
  );
}
