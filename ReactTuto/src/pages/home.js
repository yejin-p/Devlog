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
    fontSize: "20px",
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
      </ul>
    </>
  )

  
}



