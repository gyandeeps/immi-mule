import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import { User } from "firebase";

const { Header } = Layout;

type AppHeaderProps = {
    user: User | null;
};

const AppHeader: React.FC<AppHeaderProps> = ({ user }) => {
    return (
        <Header className="immi-header">
            <div className="immi-header-logo" />
            {user ? (
                <Avatar
                    key="user"
                    size="large"
                    alt={user.displayName || undefined}
                    src={user.photoURL || undefined}
                />
            ) : (
                <Avatar size="large" icon={<UserOutlined />} />
            )}
        </Header>
    );
};

export default AppHeader;
