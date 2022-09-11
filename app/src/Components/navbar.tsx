import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  BiHomeAlt,
  BiLogIn,
  BiMessageAlt,
  BiUser,
  BiMenu,
} from "react-icons/bi";
import "../distCSS/NavBar/nav-bar.css";
const logOut = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
interface Props {
  name: string;
}
const NavBar: FC<Props> = ({ name }) => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <button className="side-nav-btn">
            <BiMenu />
          </button>
          <a>
            <Link to={"/profile"}>
              <BiUser />
            </Link>
          </a>
          <a>
            <Link to={"/login"}>
              <BiLogIn />
            </Link>
          </a>
          <a>
            <Link to={"/chat"}>
              <BiMessageAlt />
            </Link>
          </a>
          <a>
            <Link to={"/home"}>
              <BiHomeAlt />
            </Link>
          </a>
          <button onClick={logOut}>{name}</button>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
