import React, { useState } from "react";

//COMPONENTS
import GetStarted from "./GetStarted";
import Login from "./Login";
import SignUp from "./SignUp";

const AccSetup: React.FC = () => {
  //states
  const [activeTab, setActiveTab] = useState<string>("getstarted");

  return (
    <div className="accountsetup">
      {activeTab === "getstarted" ? (
        <GetStarted setActiveTab={setActiveTab} />
      ) : null}
      {activeTab === "login" ? <Login setActiveTab={setActiveTab} /> : null}
      {activeTab === "signup" ? <SignUp setActiveTab={setActiveTab} /> : null}
    </div>
  );
};

export default AccSetup;
