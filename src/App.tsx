import React from "react";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body, { RouteCollection } from "./components/layout/Body";
import Home from "./modules/home/Home";
import FileManagement from "./modules/file-management/FileManagement";
import AllStateContext from "./state/AllStateContext";
import Case from "./modules/case-management/CaseManagement";
import { HomeOutlined, FileOutlined, BankOutlined } from "@ant-design/icons";
import * as firebase from "firebase/app";
import Auth from "./firebase/Auth";
import { useUser } from "./firebase/hooks";
import firebaseConfig from "./firebase/config";

firebase.initializeApp(firebaseConfig);

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

const App: React.FC = () => {
    const user = useUser();

    return (
        <BrowserRouter>
            <AllStateContext>
                <Auth>
                    <Layout className="immi">
                        <Header user={user} />
                        <Body routeCollection={routeCollection} />
                        <Footer />
                    </Layout>
                </Auth>
            </AllStateContext>
        </BrowserRouter>
    );
};

export default App;
