import React from "react";
import btn from "../../assets/btn.png";
import s from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <div className={s.background}></div>
      <div className={s.container}>
        <div className={s.left}>
          <div className={s.row}>
            <div className={s.col_left}>
              <span>путешествие</span>
              <p>на красную планету</p>
            </div>
          </div>
          <div className={s.start}>
            <a href="#">
              <img src={btn} alt="button" />
            </a>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.first_row}>
            <div className={s.first}>
              <p>мы</p>
              <h2>1</h2>
              <p>на рынке</p>
            </div>
            <div className={s.second}>
              <p>гарантируем</p>
              <h2>50%</h2>
              <p>безопасность</p>
            </div>
          </div>
          <div className={s.second_row}>
            <div className={s.third}>
              <p>календарик за</p>
              <h2>2001</h2>
              <p>в подарок</p>
            </div>
            <div className={s.four}>
              <p>путешествие</p>
              <h2>597</h2>
              <p>дней</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
