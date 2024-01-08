import React from "react";

//PLUGINS
import { FaGooglePlusG } from "react-icons/fa";

const LoginGoogle: React.FC = () => {
  return (
    <div className="loginmain_actions_google">
      <p>or</p>
      <div className="button">
        <FaGooglePlusG />
        <p>Login with Google</p>
      </div>
    </div>
  );
};

export default LoginGoogle;
