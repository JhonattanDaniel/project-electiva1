import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, message } from "antd";
import axios from "axios";

const { Option } = Select;

export const Register = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3200/api/v1/listarDatos"
      );
      const data = response.data;
      setDepartamentos(data);
    } catch (error) {
      console.log("Error al obtener los datos:", error);
    }
  };

  const handleDepartamentoChange = (value) => {
    const selectedDepartment = departamentos.find(
      (departamento) => departamento._id === value
    );

    if (selectedDepartment) {
      setMunicipios(selectedDepartment.municipios);
    } else {
      setMunicipios([]);
    }
  };

  const onFinish = async (values) => {
    const registerData = {
      ...values,
      departamento: values.departamento,
      municipio: values.municipio,
    };
    axios
      .post("http://localhost:3200/api/v1/auth/register", registerData)
      .then(()=>
      message.success("registro exitoso")
      ) 
      .catch((error) => {
        console.log("Error de registro", error)
        message.error("Error revise sus datos")
        
      });

    /*     form.resetFields(); */
  };

  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Nombre"
        name="firstname"
        rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellido"
        name="lastname"
        rules={[{ required: true, message: "Por favor ingresa tu apellido" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Por favor ingresa tu email" },
          { type: "email", message: "Por favor ingresa un email válido" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Departamento"
        name="departamento"
        rules={[
          { required: true, message: "Por favor selecciona un departamento" },
        ]}
      >
        <Select
          placeholder="Selecciona departamento"
          onChange={handleDepartamentoChange}
        >
          {departamentos.map((departamento) => (
            <Option key={departamento._id} value={departamento._id}>
              {departamento._id}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="municipio"
        rules={[
          { required: true, message: "Por favor selecciona un municipio" },
        ]}
      >
        <Select placeholder="Seleccionar municipio">
          {municipios.map((municipio) => (
            <Option key={municipio} value={municipio}>
              {municipio}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};
