import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Steps } from "antd";
import { loginUser } from "../../redux/userReducer";

const Login = () => {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();

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
      {steps[current].content}
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button onClick={next}>Next</Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit">Done</Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={prev}>Previous</Button>
        )}
      </div>
    </Form>
  );
};

export default Login;
