import React from "react";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body, { RouteCollection } from "./components/layout/Body";
import Home from "./modules/home/Home";
import FileManagement from "./modules/file-management/FileManagement";
import { GlobalState } from "./context/GlobalContext";

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
    <BrowserRouter>
        <GlobalState>
            <Layout className="immi">
                <Header />
                <Body routeCollection={routeCollection} />
                <Footer />
            </Layout>
        </GlobalState>
    </BrowserRouter>
);

export default App;
