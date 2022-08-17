import React from "react";
import "./blockTwo.scss";

const BlockTwo = () => {
  return (
    <div className="block-two">
      <div className="block-two__items">
        <div className="item-blocks">
          <div className="item-blocks__item">Наши сотрудники</div>
          <div className="item-blocks__item">Просветляет понимающий тест</div>
        </div>
        <div className="item_large">Конформизм</div>
      </div>
      <div className="block-two__colored-items">
        <div className="item item_blue">Интроекция</div>
        <div className="item item_orange">Наши сотрудники</div>
      </div>
    </div>
  );
};

export default BlockTwo;
