import React from "react";
import { Link } from "react-router-dom";
import "./page404.scss";

const Page404 = () => {
  return (
    <div className="error">
      <div className="error__header">
        <h1>
          Данная страница не существует вернитесть пожалуйста на{" "}
          <span>
            <Link to={"/"}>главную</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Page404;
