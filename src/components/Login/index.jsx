import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Steps, theme } from "antd";
import { loginUser } from "../../redux/userReducer";
import Link from "antd/es/typography/Link";

const Login = () => {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const {token} = theme.useToken()

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    dispatch(loginUser(values))
  };

  const steps = [
    {
      title: 'Почта',
      content: (
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Введите вашу почту!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Почта" />
          <Link href="/register"></Link>
        </Form.Item>
      ),
    },
    {
      title: 'Пароль',
      content: (
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Введите ваш пароль!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: '20px'
  };

  return (
    <Form
      name="login_form"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ width: "400px", margin: "auto", marginTop: '50px' }}
    >
      <Steps current={current}>
        {steps.map((step) => (
          <Steps.Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <div style={contentStyle}>{steps[current].content}</div>
      <span></span>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button onClick={next}>Вперед</Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit">Завершить</Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={prev}>Назад</Button>
        )}
      </div>
    </Form>
  );
};

export default Login;
