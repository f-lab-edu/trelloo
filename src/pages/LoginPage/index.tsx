import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form } from "antd";
import { STORAGE_KEY } from "@/constants";
import { useLoginMutation } from "@/queries/auth";
import * as S from "./style";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginMutate } = useLoginMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubmitClick = () => {
    loginMutate({
      id: watch("id"),
      password: watch("password"),
    }).then((res) => {
      localStorage.setItem(STORAGE_KEY.TOKEN, res.accessToken);
      navigate("/");
      // TODO: add toast
    });
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit(handleSubmitClick)}
        autoComplete="off"
      >
        <Form.Item label="id" name="id">
          <S.Input {...register("id")} name="id" />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <S.InputPassword {...register("password")} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          {/* TODO: replace to the Button component instead of antd */}
          <Button type="primary" htmlType="submit" onClick={handleSubmitClick}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};

export default LoginPage;
