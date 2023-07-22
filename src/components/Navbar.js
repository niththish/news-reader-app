import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>NEWS READER</h1>
      <Link to={"/channel-list"}>
        <i className="fas fa-tv channel-icon"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
