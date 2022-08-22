import React from "react";
import dateFormat, { i18n } from "dateformat";
import "./dateNow.scss";

const DateNow = () => {
  i18n.monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябарь",
    "Декабрь",
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const now = new Date();

  return <div className="date">{dateFormat(now, "d mmmm yyyy")}</div>;
};

export default DateNow;
