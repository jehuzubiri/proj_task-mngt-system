import React, { useCallback, useState } from "react";

//HELPERS
import { Person } from "@/helpers/Model";

//PLUGINS
import { FcGoogle } from "react-icons/fc";
import { IResolveParams, LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../store/feature/accountSlice";

const LoginGoogle: React.FC<{
  popNotif: (
    message: string,
    description: string,
    type: "success" | "info" | "warning" | "error"
  ) => void;
}> = ({ popNotif }) => {
  //plugins
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //states
  const GOOGLE_CLIENT_ID =
    "7241488333-6ukh6rn7ri7r9irkvvqda74bnovk83oi.apps.googleusercontent.com";

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
          const { name: givenname, given_name, picture } = data || {};
          const accData: Person = {
            id: `${Date.now()}`,
            isGoogle: true,
            givenname,
            imgUrl: picture,
            username: "Google Account",
            password: "Google Account",
          };
          dispatch(signIn(accData));
          navigate("/main");
        }}
        onReject={(err) => {
          console.log(err);
          popNotif(
            "Something Went Wrong",
            "The email you selected does not have permission on this application. Please contact administrator or create an account (SignUp)",
            "error"
          );
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
