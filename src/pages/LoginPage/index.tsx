import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { STORAGE_KEY } from "@/constants";
import * as S from "./style";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    const token = "OJs_login_token_3sDEjxdjZE";
    localStorage.setItem(STORAGE_KEY.TOKEN, token);
    navigate("/");
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmitClick}
        autoComplete="off"
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={handleSubmitClick}>
            Submit
          </Button>
        </Form.Item>
      </S.Form>
    </S.Container>
  );
};

export default LoginPage;
