import React from "react";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body, { RouteCollection } from "./components/layout/Body";
import Home from "./modules/home/Home";
import FileManagement from "./modules/file-management/FileManagement";
import AllStateContext from "./context/AllStateContext";
import Case from "./modules/case/Case";
import { HomeOutlined, FileOutlined, BankOutlined } from "@ant-design/icons";

const routeCollection: RouteCollection = [
    {
        title: "Home",
        href: "/",
        Component: Home,
        Icon: HomeOutlined
    },
    {
        title: "Cases",
        href: "/case",
        Component: Case,
        Icon: BankOutlined
    },
    {
        title: "Files",
        href: "/files",
        Component: FileManagement,
        Icon: FileOutlined
    }
];

const App: React.FC = () => (
    <BrowserRouter>
        <AllStateContext>
            <Layout className="immi">
                <Header />
                <Body routeCollection={routeCollection} />
                <Footer />
            </Layout>
        </AllStateContext>
    </BrowserRouter>
);

export default App;
