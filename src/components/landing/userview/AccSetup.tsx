import React, { useState } from "react";

//COMPONENTS
import GetStarted from "./GetStarted";
import Login from "./Login";
import SignUp from "./SignUp";

//PLUGINS
import { notification } from "antd";

const AccSetup: React.FC = () => {
  //states
  const [activeTab, setActiveTab] = useState<string>("getstarted");
  const [api, contextHolder] = notification.useNotification();

  //functions
  const popNotif = (
    message: string,
    description: string,
    type: "success" | "info" | "warning" | "error"
  ) => {
    api[type]({
      message,
      description,
      placement: "topLeft",
      duration: 0,
    });
  };

  return (
    <div className="accountsetup">
      {contextHolder}
      {activeTab === "getstarted" ? (
        <GetStarted setActiveTab={setActiveTab} />
      ) : null}
      {activeTab === "login" ? (
        <Login setActiveTab={setActiveTab} popNotif={popNotif} />
      ) : null}
      {activeTab === "signup" ? (
        <SignUp setActiveTab={setActiveTab} popNotif={popNotif} />
      ) : null}
    </div>
  );
};

export default AccSetup;
