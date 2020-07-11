import React from "react";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body, { RouteCollection } from "./components/layout/Body";
import Home from "./modules/Home";
import FileManagement from "./modules/FileManagement";

const routeCollection: RouteCollection = [
    {
        title: "Home",
        href: "/",
        Component: Home
    },
    {
        title: "Files",
        href: "/files",
        Component: FileManagement
    }
];

const App: React.FC = () => (
    //https://github.com/ReactTraining/react-router/blob/v6.0.0-beta.0/docs/api-reference.md
    <BrowserRouter>
        <Layout className="immi">
            <Header />
            <Body routeCollection={routeCollection} />
            <Footer />
        </Layout>
    </BrowserRouter>
);

export default App;
