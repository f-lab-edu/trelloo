import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Form } from "antd";
import { STORAGE_KEY } from "@/constants";
import { useLoginMutation } from "@/queries/auth";
import Button from "@components/buttons/Button";
import * as S from "./style";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const { mutateAsync: loginMutate } = useLoginMutation();

  const handleSubmitClick = async () => {
    const res = await handleLogin();
    handleLoginComplete(res?.accessToken);
  };

  const handleLogin = async () => {
    return await loginMutate({
      id: watch("id"),
      password: watch("password"),
    });
  };

  const handleLoginComplete = (token: string) => {
    localStorage.setItem(STORAGE_KEY.TOKEN, token);
    navigate("/board");
    toast.success("Welcome!");
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
        <Form.Item label="Id" name="id">
          <S.Input {...register("id")} name="id" />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <S.InputPassword {...register("password")} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button appearance={{ type: "blue" }} type="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};

export default LoginPage;
