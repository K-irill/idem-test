import React from "react";
import "./blockThree.scss";
import { ReactComponent as Alert } from "../../images/alert.svg";
import { Link } from "react-router-dom";

const BlockThree = () => {
  return (
    <div className="block-three">
      <div className="block-three__items">
        <div className="item">
          Понятие модернизации понимает механизм власти
        </div>
        <div className="item-alert">
          <Link to={"/dialog"}>
            <div className="item-alert_image-bg">Наши сотрудники</div>
            <Alert className="alert-img" />
          </Link>
        </div>
      </div>
      <div className="user-information">
        <div className="item user-information__last-name">
          <div className="title">Фамилия</div>
          <div className="dashed"></div>
          <div className="value">Мамай</div>
        </div>
        <div className="item user-information__first-name">
          <div className="title">Имя и отчество</div>
          <div className="dashed"></div>
          <div className="value">Станиславаленина Владимировна</div>
        </div>
        <div className="item user-information__policy-number">
          <div className="title">Номер полиса выдан заведомо ложный</div>
          <div className="dashed"></div>
          <div className="value">01354879</div>
        </div>
        <div className="item user-information__birthday">
          <div className="title">Дата рождения</div>
          <div className="dashed"></div>
          <div className="value">01.12.1976</div>
        </div>
        <div className="item user-information__telephone">
          <div className="title">Телефон</div>
          <div className="dashed"></div>
          <div className="value">+79254218069</div>
        </div>
      </div>
    </div>
  );
};

export default BlockThree;
