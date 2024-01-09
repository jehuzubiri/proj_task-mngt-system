import React from "react";

//IMAGES
import myImg from "../../../img/undraw-coffee-2.svg";

//PLUGINS
import { Button, Form, Input } from "antd";

const SignUp: React.FC<{
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setActiveTab }) => {
  //states

  //TS states
  type FieldType = {
    givenname?: string;
    username?: string;
    password?: string;
  };

  //functions
  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
    const { givenname, username, password } = values;
  };

  return (
    <div className="signup d-flex-col_center">
      <div className="signup_banner d-flex-col_center">
        <img src={myImg} alt="" />
        <p>Create an Account</p>
      </div>
      <h3>SignUp</h3>
      <Form
        name="signupform"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="givenname"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input autoComplete="off" />
        </Form.Item>
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
        <div className="actions d-flex-row_center-between gap1">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              SignUp
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={() => setActiveTab("login")}>Cancel</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
