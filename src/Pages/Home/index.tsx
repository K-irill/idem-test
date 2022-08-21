import React from "react";
import BlockFour from "../../Components/BlockFour";
import BlockOne from "../../Components/BlockOne";
import BlockThree from "../../Components/BlockThree";
import BlockTwo from "../../Components/BlockTwo";
import "./home.scss";

const Home = () => {
  return (
    <div className="page">
      <div className="page__header">
        <h1 className="title">header</h1>
      </div>
      <div className="page__main">
        <BlockOne />
        <BlockTwo />
        <BlockThree />
        <BlockFour />
      </div>
      <div className="page__footer">
        <div className="footer-content">footer</div>
      </div>
    </div>
  );
};

export default Home;
