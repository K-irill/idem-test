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
          <div className="item-alert_image-bg">Наши сотрудники</div>
          <Link to={"/dialog"}>
            <Alert className="alert-img" />
          </Link>
        </div>
      </div>
      <div className="block-three__items_large"></div>
    </div>
  );
};

export default BlockThree;
