import React from "react";
import { Button, Modal } from "antd";
import {LogoutOutlined} from "@ant-design/icons";


export const Logout = () => {
    const handleLogout = () => {
        Modal.confirm({
            title: "Cerrar Sesion",
            Content: "estas seguro que quieres cerrar sesion?",
            onOk: () => {
                console.log('cerrando sesion');
            },
        } );
    };
    return (
        <Button type="link" onClick= {handleLogout}>
            <LogoutOutlined/>
        </Button>
    );
};