import React, { useCallback, useState } from "react";

//PLUGINS
import { FcGoogle } from "react-icons/fc";
import { IResolveParams, LoginSocialGoogle } from "reactjs-social-login";

const LoginGoogle: React.FC = () => {
  //states
  const GOOGLE_CLIENT_ID =
    "7241488333-6ukh6rn7ri7r9irkvvqda74bnovk83oi.apps.googleusercontent.com";

  //ts satates
  type ResDataType = {
    name?: string;
    given_name?: string;
    picture?: string;
  };

  //functions
  const onLoginStart = useCallback(() => {
    // alert("login start");
  }, []);

  const onResolve = useCallback(() => {}, []);

  return (
    <div className="loginmain_actions_google">
      <LoginSocialGoogle
        client_id={GOOGLE_CLIENT_ID}
        onLoginStart={onLoginStart}
        onResolve={({ provider, data }: IResolveParams) => {
          const { name, given_name, picture } = data || {};
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <div className="button d-flex-row_center">
          <FcGoogle />
          <p>Login with Google</p>
        </div>
      </LoginSocialGoogle>
    </div>
  );
};

export default LoginGoogle;
