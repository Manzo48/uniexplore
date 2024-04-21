import React, { useState } from "react";
import { Button, Form, Input, Steps, message , theme} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/userReducer";

const Register = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    registrationDate: new Date(),
    token: Math.floor(Math.random() * 10000),
  });

  const { token } = theme.useToken();

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

  const steps = [
    {
      title: 'Никнейм',
      content: (
        <>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your nickname!" }]}
          >
            <Input placeholder="First Name" onChange={e => setFormData({ ...formData, username: e.target.value })} />
          </Form.Item>
        </>
      ),
    },
    {
      title: 'Email',
      content: (
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }, { type: 'email', message: 'The input is not valid E-mail!'}]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
        </Form.Item>
      ),
    },
    {
      title: 'Password',
      content: (
        <>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })} />
          </Form.Item>
        </>
      ),
    },
  ];

  const dispatch = useDispatch();

  const onFinish = () => {
    console.log("Registration Data: ", formData);
    dispatch(createUser(formData));
    message.success('Registration complete!');
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Form
      name="registration"
      onFinish={onFinish}
      style={{ width: "400px", margin: "auto", marginTop: '50px' }}
    >
      <Steps current={current}>
        {steps.map((step) => (
          <Steps.Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <div style={contentStyle}>{steps[current].content}</div>
      <div>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={prev}>Previous</Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>Next</Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={onFinish}>Register</Button>
        )}
      </div>
    </Form>
  );
};

export default Register;
