import React from "react";
import { Empty as AEmpty } from "antd";
import { EmptyProps } from "antd/lib/empty";
import "./Empty.scss";

const Empty: React.FC<EmptyProps> = (props) => (
    <AEmpty className="immi-empty" {...props} />
);

export default Empty;
