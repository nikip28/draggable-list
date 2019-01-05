import React from "react";
import { observer } from "mobx-react";
import { Layout } from "antd";
import Header from "./header/Header";
import Sider from "./sider/Sider";
import Footer from "./footer/Footer";
import "./MainLayout.scss";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="dashboard">
      <Sider />
      <Layout>
        <Header />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            height: "100vh"
          }}
        >
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default observer(MainLayout);
