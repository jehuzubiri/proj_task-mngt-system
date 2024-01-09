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

  //TS states
  type FieldType = {
    username?: string;
    password?: string;
  };

  //functions
  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
    const { username, password } = values;
  };

  return (
    <div className="loginmain d-flex-col_center">
      <div className="loginmain_banner d-flex-col_center">
        <img src={myImg} alt="" />
        <p>Assessment Test by Jehu</p>
      </div>
      <h3>SignIn</h3>
      <Form
        name="loginform"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <div className="loginmain_actions d-flex-col_center">
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
