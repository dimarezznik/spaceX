import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Corners from "../../assets/corners.png";
import styles from "./Header.module.css";


const Header = () => {
  const [clickBurger, setClickBurger] = useState(true)

  const burgerHandler = () => setClickBurger(!clickBurger)

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.row}>
          <a href="#" className={styles.logo}>
              <div className={styles.corners}>
            <img src={Corners} alt="corners" />
            </div>
            <div className={styles.spaceX}>
            <img src={Logo} alt="logo" />
            </div>
          </a>
          <div onClick={burgerHandler} className={clickBurger ? styles.burger : styles.burger_act}>
            <span></span>
            </div>
          <nav className={clickBurger ? styles.menu : styles.active}>
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Технология</a>
              </li>
              <li>
                <a href="#">График полетов</a>
              </li>
              <li>
                <a href="#">Гарантии</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>          
        </div>
      </div>
    </header>
  );
};

export default Header;
