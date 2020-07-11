import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";

const { Header } = Layout;

const AppHeader: React.FC = () => {
    return (
        <Header className="immi-header">
            <div className="immi-header-logo" />
            <Avatar size="large" icon={<UserOutlined />} />
        </Header>
    );
};

export default AppHeader;
