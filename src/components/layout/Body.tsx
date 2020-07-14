import React from "react";
import { Layout, Menu } from "antd";
import "./Body.scss";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const { Content, Sider } = Layout;

export type RouteCollection = {
    title: string;
    Component: React.FC;
    Icon: React.FC;
    href: string;
}[];

type AppBodyProps = {
    routeCollection: RouteCollection;
};

const AppBody: React.FC<AppBodyProps> = ({ routeCollection }) => {
    const location = useLocation();

    return (
        <Layout className="immi-body">
            <Sider breakpoint="md" className="immi-body-slider-left">
                <Menu
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    style={{ height: "100%", borderRight: 0 }}
                >
                    {routeCollection.map(({ Icon, href, title }) => (
                        <Menu.Item icon={<Icon />} key={href}>
                            <Link to={href}>{title}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Content className="immi-body-content">
                <Routes>
                    {routeCollection.map(({ title, href, Component }) => (
                        <Route
                            key={title}
                            path={href}
                            element={<Component />}
                        />
                    ))}
                </Routes>
            </Content>
        </Layout>
    );
};

export default AppBody;
