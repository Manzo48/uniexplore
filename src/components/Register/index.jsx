import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Radio, Steps, message } from 'antd';
import { createUser } from '../../redux/userReducer';
import { useNavigate } from 'react-router-dom';
import Link from 'antd/es/typography/Link';

const { Step } = Steps;

function Register() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    sex: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const history = useNavigate();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = () => {
    // Проверка подтверждения пароля
    if (formData.password !== formData.confirmPassword) {
      message.error('Пароли не совпадают!');
      return;
    }
    dispatch(createUser({
      login: formData.login,
      password: formData.password,
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email
    }));
    message.success('Регистрация успешна!');
    history('/'); // редирект на главную страницу
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const steps = [
    {
      title: 'Основная информация',
      content: (
        <Form layout="vertical">
          <Form.Item label="Имя" required>
            <Input name="name" onChange={onChange} value={formData.name} />
          </Form.Item>
          <Form.Item label="Фамилия" required>
            <Input name="lastName" onChange={onChange} value={formData.lastName} />
          </Form.Item>
          <Form.Item label="Пол">
            <Radio.Group name="sex" onChange={onChange} value={formData.sex}>
              <Radio value="male">Мужской</Radio>
              <Radio value="female">Женский</Radio>
            </Radio.Group>
          </Form.Item>
          <Button type="primary" onClick={next}>Далее</Button>
        </Form>
      ),
    },
    {
      title: 'Учетные данные',
      content: (
        <Form layout="vertical">
          <Form.Item label="Логин" required>
            <Input name="login" onChange={onChange} value={formData.login} />
          </Form.Item>
          <Form.Item label="Почта" required>
            <Input type="email" name="email" onChange={onChange} value={formData.email} />
          </Form.Item>
          <Button onClick={prev}>Назад</Button>
          <Button type="primary" onClick={next}>Далее</Button>
        </Form>
      ),
    },
    {
      title: 'Пароль',
      content: (
        <Form layout="vertical">
          <Form.Item label="Пароль" required>
            <Input.Password name="password" onChange={onChange} value={formData.password} />
          </Form.Item>
          <Form.Item label="Подтвердите пароль" required>
            <Input.Password name="confirmPassword" onChange={onChange} value={formData.confirmPassword} />
          </Form.Item>
          <Button onClick={prev}>Назад</Button>
          <Button type="primary" onClick={handleSubmit}>Зарегистрироваться</Button>
        </Form>
      ),
    },
  ];

  return (
    <div style={{width: '30%', margin: 'auto', padding: '150px 0px'}}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <Link href='/login'>Уже есть аккаунт?</Link>
    </div>
  );
}

export default Register;
