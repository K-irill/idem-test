import React from "react";
import "./blockFour.scss";

const BlockFour = () => {
  return (
    <div className="block-four">
      <div className="block-four__items_small">
        <div className="item">Лидерство</div>
        <div className="item item_red">Невероятный гений</div>
      </div>
      <div className="block-four__items_large">
        <div className="item-large">Однако</div>
        <div className="items-small">
          <div className="item item_orange">Точка перегиба</div>
          <div className="item">Длина вектора</div>
        </div>
      </div>
    </div>
  );
};

export default BlockFour;
