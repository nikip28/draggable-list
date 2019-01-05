import React from "react";
import { observer, inject } from "mobx-react";
import { Layout, Icon, Menu } from "antd";
import { Link } from "react-router-dom";
import "./Sider.scss";

const { Sider } = Layout;

const MainSider = ({ layout }) => {
  return (
    <Sider trigger={null} collapsed={layout.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>Profile</span>
          <Link to={"/profile"} />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default inject("layout")(observer(MainSider));
