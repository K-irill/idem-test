import React, { useState } from "react";
import DateNow from "../../Components/DateNow";
import InputMessage from "../../Components/InputMessage";
import logoUser from "../../images/user-img.svg";
import "./dialog.scss";

interface IMessage {
  id?: number;
  avatar?: string;
  isUser?: boolean;
  date?: string;
  value: string;
}

const Dialog = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, { value: message }]);
  };

  const now = new Date();

  return (
    <div className="dialog">
      <div className="content">
        <div className="message">
          <img src={logoUser} alt="avatar" className="avatar" />
          <div className="text">
            Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся
            ценности бóльшие, чем просто деньги или драгоценности, - культурные
            ценности. Произведения искусства, антиквариат, иные предметы
            коллекционирования – все это имущество, безусловно высокая стоимость
            которого.
          </div>
        </div>
        <div className="message message_right">
          <img src={logoUser} alt="avatar" className="avatar" />
          <div className="text_right">Это означает,</div>
        </div>
        <div className="message">
          <img src={logoUser} alt="avatar" className="avatar" />
          <div className="text">доме, офисе, кабинете, мастерской</div>
        </div>
        <div className="date">21 октября 2017</div>
        <div className="message message_right">
          <img src={logoUser} alt="avatar" className="avatar" />
          <div className="text_right">Это означает,</div>
        </div>
        <div className="message">
          <img src={logoUser} alt="avatar" className="avatar" />
          <div className="text">доме, офисе, кабинете, мастерской</div>
        </div>
        {messages.length ? <DateNow /> : null}
        {messages.map((el, i) => (
          <div className="message message_right" key={i}>
            <img src={logoUser} alt="avatar" className="avatar" />
            <div className="text_right">{el.value}</div>
          </div>
        ))}
      </div>
      <div className="input-message">
        <InputMessage sendMessage={addMessage} />
      </div>
    </div>
  );
};

export default Dialog;
