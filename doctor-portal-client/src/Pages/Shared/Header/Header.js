import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logos/logo-2.png";
import { AuthContext } from './../../../contexts/AuthProvider';
import Doctors from "../../Registration/doctors";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser().then(() => {
      console.log("User Log Out");
      alert("User Log Out");
    });
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="appointment">Appointment</Link>
      </li>
      <li>
        <Link to="Doctors">octor</Link>
      </li>
 
      <li>
        <Link to="review">Review</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
     
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-base-100 lg:px-52">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-xl flex justify-center items-center"
          >
            <img className="w-12" src={logo} alt="" />
            Hospital Management
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
         {
          user?.uid ?
          <div>
            <Link onClick={handleLogout} className="btn btn-primary text-white">SignOut</Link>
          </div>
          : 
          <Link to="/login" className="btn btn-primary text-white">LogIn</Link>
         }
        </div>
      </div>
    </div>
  );
};

export default Header;
