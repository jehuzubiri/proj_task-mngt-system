import React from "react";

//IMAGES
import myImg from "../../../img/undraw-img.svg";

//PLUGINS
import { Button } from "antd";

const GetStarted: React.FC<{
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setActiveTab }) => {
  return (
    <div className="getstarted">
      <img src={myImg} alt="" />
      <div className="getstarted_title">
        <h2>Task Management System</h2>
        <p>TK Services Inc. Assessment Test</p>
      </div>
      <Button type="primary" onClick={() => setActiveTab("login")}>
        Get Started
      </Button>
    </div>
  );
};

export default GetStarted;
