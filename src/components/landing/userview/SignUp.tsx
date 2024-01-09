import React from "react";

//IMAGES
import myImg from "../../../img/undraw-coffee-2.svg";
import personIcon from "../../../img/person-circle.svg";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "../../../store/feature/accountSlice";

//PLUGINS
import { Button, Form, Input } from "antd";

//HELPERS
import { Person } from "@/helpers/Model";

const SignUp: React.FC<{
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  popNotif: (
    message: string,
    description: string,
    type: "success" | "info" | "warning" | "error"
  ) => void;
}> = ({ setActiveTab, popNotif }) => {
  //plugins
  const dispatch = useDispatch();

  //retux store
  const { accountList } = useSelector((state: any) => state.accountstore);

  //TS states
  type FieldType = {
    givenname: string;
    username: string;
    password: string;
  };

  //functions
  const onFinish = (values: Person) => {
    const { username } = values;
    if (!accountList.length) {
      onFinishFinal(values);
    } else {
      const newList = [...accountList].map((i) => i.username);
      if (newList.includes(username)) {
        popNotif(
          `Username ${username} is already taken.`,
          "Please use other unique username lorem ipsum dolor amet.",
          "warning"
        );
      } else onFinishFinal(values);
    }
  };

  const onFinishFinal = (values: Person) => {
    const { givenname, username, password } = values;
    const data: Person = {
      id: `${Date.now()}`,
      isGoogle: false,
      givenname,
      imgUrl: personIcon,
      username,
      password,
    };
    dispatch(addAccount(data));
    popNotif(
      `Create Account: ${givenname}`,
      "Account successfully created lorem ipsum dolor amet.",
      "success"
    );
    setActiveTab("login");
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
