import { Link } from "react-router-dom";
import "./Detail.css";
function DetailHead() {
  return (
    <div>
      <div className="navDiv">
        <Link to="/" className="customLink">
          Home
        </Link>
        <Link to="/aboutus" className="customLink">
          About
        </Link>
        <Link to="/features" className="customLink">
          Features
        </Link>
        <Link to="/room" className="customLink">
          Room-Order
        </Link>
        <Link to="/food" className="customLink">
          Food-Order
        </Link>
        <Link to="/detail" className="customLink">
          Order-Detail
        </Link>
      </div>
      <div className="linkDiv">
        <div>
          <Link to="/detail" className="CustomLink">
            Food Detail
          </Link>
          <Link to="/detail2" className="CustomLink2">
            Room Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailHead;
