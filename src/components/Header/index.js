import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div>
    <div className="header-content">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1736656683/Screenshot_1416_jekeq6.png"
          alt="logo"
          className="logo-image"
        />
        <h1 className="logo-heading">K Night Reliant India</h1>
      </div>
      <ul className="nav-list">
        <li className="list-1">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="list-2">
          <Link to="/projects" className="link">
            Projects
          </Link>
        </li>
        <li className="list-3">
          <Link to="/about-us" className="link">
            About Us
          </Link>
        </li>
      </ul>
    </div>
    <hr />
  </div>
);

export default Header;
