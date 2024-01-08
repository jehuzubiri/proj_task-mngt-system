import React, { useCallback, useState } from "react";

//PLUGINS
import { FcGoogle } from "react-icons/fc";
import { IResolveParams, LoginSocialGoogle } from "reactjs-social-login";

const LoginGoogle: React.FC = () => {
  //states
  // const REDIRECT_URI = "http://localhost:3000/account/login";

  //functions
  const onLoginStart = useCallback(() => {
    // alert("login start");
  }, []);

  const onLogout = useCallback(() => {}, []);

  return (
    <div className="loginmain_actions_google">
      <LoginSocialGoogle
        client_id="7241488333-6ukh6rn7ri7r9irkvvqda74bnovk83oi.apps.googleusercontent.com"
        onLoginStart={onLoginStart}
        // redirect_uri={REDIRECT_URI}
        onResolve={({ provider, data }: IResolveParams) => {
          console.log(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <div className="button">
          <FcGoogle />
          <p>Login with Google</p>
        </div>
      </LoginSocialGoogle>
    </div>
  );
};

export default LoginGoogle;
