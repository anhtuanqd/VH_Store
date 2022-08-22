import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  ERROR_MESSAGE,
  popupNotice,
  SUCCESS_MESSAGE,
} from "../../components/popupNotice/popupNotice";
import "antd/dist/antd.css";
import "./Login.scss";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values) => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(values),
    });
    console.log(res);
    if (res.status === 201 && values.email === "test125@gmail.com") {
      localStorage.setItem(
        "access_token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"
      );
      setLoading(false);
      popupNotice(SUCCESS_MESSAGE, "Success", "Login Successful");
      setError(false);
      navigate("/", { replace: true });
    } else {
      setError(true);
      setLoading(false);
      popupNotice(ERROR_MESSAGE, "Error", "Login Fail");
      form.resetFields(["password"]);
    }
  };

  return (
    <>
      <div className="LoginContainer">
        <Form
          form={form}
          name="basic"
          initialValues={{}}
          onFinish={(values) => onSubmit(values)}
          autoComplete="off"
        >
          <h1 style={{ textAlign: "center" }}>Log In</h1>
          <Form.Item
            name="email"
            className="InputField"
            rules={[
              {
                required: true,
                message: "Required to enter email!",
              },
              {
                type: "email",
                message: "Enter a valid email address!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Required to enter password!!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item className="ItemSignin">
            <Button
              className="Button"
              style={{ position: "absolute" }}
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Sign In
            </Button>
          </Form.Item>
          {error && (
            <p
              style={{ color: "red", textAlign: "center", paddingTop: "10px" }}
            >
              Email or Password fail!!
            </p>
          )}
        </Form>
      </div>
    </>
  );
};

export default Login;
