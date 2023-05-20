import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await axios.post(`http://localhost:3200/api/v1/auth/login`, values);
      // Aquí puedes manejar la respuesta del backend
      message.success('Inicio de sesión exitoso');
    } catch (error) {
      console.log('Error en el inicio de sesión:', error);
      message.error('Error en el inicio de sesión');
    }

    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Error en el formulario:', errorInfo);
  };

  return (
    <Form
      name="loginForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Por favor ingresa tu email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  )
}

