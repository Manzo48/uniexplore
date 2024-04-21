import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userReducer';
import { Form, Input, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import Link from 'antd/es/typography/Link';

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        dispatch(loginUser(values));
        notification.success({
          message: 'Вход выполнен',
          description: 'Вы успешно вошли в систему.',
          placement: 'topRight',
        });
      }).then(() => navigate('/'))
      .catch(error => {
        console.log('Ошибка входа', error);
      });
  };

  return (
    <Form
      style={{width: '30%', margin: 'auto', padding: '150px 0px'}}
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
    >
      <h2>Вход в систему</h2>
      <Form.Item
        name="login"
        label="Логин"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш логин!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
        <Link href='/register'>Нет аккаунта?</Link>
      </Form.Item>
    </Form>
  );
}

export default Login;
