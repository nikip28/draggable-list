import React from "react";
import { observer } from "mobx-react";
import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Niki ©2018 Created by Niki Patel
    </Footer>
  );
};

export default observer(MainFooter);
