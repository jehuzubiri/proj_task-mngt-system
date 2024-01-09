import React from "react";

//IMAGES
import myImg from "../../../img/undraw-coffee.svg";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../store/feature/accountSlice";

//HELPERS
import { Person } from "@/helpers/Model";

//PLUGINS
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import LoginGoogle from "./LoginGoogle";

const Login: React.FC<{
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  popNotif: (
    message: string,
    description: string,
    type: "success" | "info" | "warning" | "error"
  ) => void;
}> = ({ setActiveTab, popNotif }) => {
  //plugins
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //retux store
  const { accountList } = useSelector((state: any) => state.accountstore);

  //TS states
  type FieldType = {
    username: string;
    password: string;
  };

  //functions
  const onFinish = (values: FieldType) => {
    let accDetails: Person | {} = {};
    const { username: uName, password: pw } = values;

    if (accountList?.length) {
      accountList.forEach((acc: Person) => {
        const { username, password } = acc;
        if (uName === username && pw === password) {
          accDetails = acc;
          dispatch(signIn(acc));
          navigate("/main");
        }
      });
      if (!Object.keys(accDetails))
        popNotif(
          "Invalid Credientials",
          " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "error"
        );
    } else
      popNotif(
        "No Accounts Yet",
        "Be the first person to create an account.",
        "warning"
      );
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
