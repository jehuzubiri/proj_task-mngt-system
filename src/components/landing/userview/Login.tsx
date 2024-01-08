import React from "react";

//IMAGES
import myImg from "../../../img/undraw-coffee.svg";

//PLUGINS
import { Button, Form, Input } from "antd";
import LoginGoogle from "./LoginGoogle";

const Login: React.FC<{
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setActiveTab }) => {
  //states

  //functions
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  //TS states
  type FieldType = {
    username?: string;
    password?: string;
  };

  return (
    <div className="loginmain">
      <div className="loginmain_banner">
        <img src={myImg} alt="" />
        <p>Task Management System by Jehu</p>
      </div>
      <h3>SignIn</h3>
      <Form
        name="loginform"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: false }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <div className="loginmain_actions">
        <LoginGoogle />
        <p className="loginmain_actions_sign">
          Dont have an account yet?{" "}
          <span onClick={() => setActiveTab("signup")}>SignUp</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
