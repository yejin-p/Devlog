import {Link} from 'react-router-dom';

export default function Home(){
  // Inline일시 camelCase를 따라야 한다.
  const menu = {
    listStyleType : "none",
    marginTop : "40px",
    marginLeft : "20px"
  }
  const list = {
    display:"block",
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    marginBottom: "10px"
  }
  return (
    <>
      <ul style={menu}>
      <li> <Link to="/tic-tac-toe" style={list}>1. Tic Tac Toe</Link></li>
      <li> <Link to="/pass-prop" style={list}>2. Pass Prop Style</Link></li>
      <li> <Link to="/filter-render" style={list}>3. Use Filter and Map </Link></li>
      <li> <Link to="/tree-struct" style={list}>4. Parent - Child </Link></li>
      <li> <Link to="/handle-event" style={list}>5. Handle Event </Link></li>
      <li> <Link to="/object" style={list}>6. Object Manage </Link></li>
      <li> <Link to="/example1" style={list}>7. Example1 - TodoList </Link></li>
      <li> <Link to="/example2" style={list}>7. Example2 - TodoList(useImmer) </Link></li>
      <li> <Link to="/interactive-state" style={list}>7. interactive-state </Link></li>
      </ul>
    </>
  )

  
}



