import React from "react";
import InputMessage from "../../Components/InputMessage";
import "./dialog.scss";

const Dialog = () => {
  return (
    <div className="dialog">
      <div className="messages"></div>
      <div className="input-message">
        <InputMessage />
      </div>
    </div>
  );
};

export default Dialog;
