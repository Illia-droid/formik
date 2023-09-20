import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";
const Header = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/logo.png" alt="squardhelp logo" className={styles.logo}/>
      </Link>

      {pathname === "/" || pathname === "/sign-up" ? (
        <Link to="/sign-in">
          {" "}
          <button className={styles.btn}>Login</button>{" "}
        </Link>
      ) : (
        <Link to="/sign-up">
          {" "}
          <button className={styles.btn}>Sign up</button>
        </Link>
      )}
    </header>
  );
};

export default Header;
