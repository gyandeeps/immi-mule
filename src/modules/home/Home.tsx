import React from "react";
import Empty from "../../components/empty/Empty";
import "./Home.scss";
import { useTitle } from "react-use";

const Home: React.FC = () => {
    useTitle("Immigration Mule");

    return (
        <div className="immi-home">
            <Empty description={false} />
        </div>
    );
};

export default Home;
