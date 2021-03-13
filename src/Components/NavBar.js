import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="columnn">
      <ul className="menue">
        <li>
          <Link
            to="/Compétences"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            {" "}
            Compétences{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/Expériences"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            {" "}
            Expériences{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/Formations"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            {" "}
            Formations{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
