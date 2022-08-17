import React from "react";
import "./blockThree.scss";
import { ReactComponent as Alert } from "../../images/alert.svg";

const BlockThree = () => {
  return (
    <div className="block-three">
      <div className="block-three__items">
        <div className="item">
          Понятие модернизации понимает механизм власти
        </div>
        <div className="item item_image-bg">Наши сотрудники</div>
        <Alert className="item__alert" />
      </div>
      <div className="block-three__items_large"></div>
    </div>
  );
};

export default BlockThree;
