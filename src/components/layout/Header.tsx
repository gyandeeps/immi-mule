import React from "react";
import { Layout, Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import { User } from "firebase";

const { Header } = Layout;

type AppHeaderProps = {
    user: User | null;
};

const AppHeader: React.FC<AppHeaderProps> = ({ user }) => (
    <Header className="immi-header">
        <div className="immi-header-logo" />
        <Tooltip title={user?.displayName || "Please login"}>
            <Avatar
                size="large"
                icon={user?.photoURL ? null : <UserOutlined />}
                alt={user?.displayName || undefined}
                src={user?.photoURL || undefined}
            />
        </Tooltip>
    </Header>
);

export default AppHeader;
