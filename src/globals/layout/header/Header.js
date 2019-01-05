import React from "react";
import { observer, inject } from "mobx-react";
import { Layout, Icon, Avatar, Popover } from "antd";
import { withRouter } from "react-router";
import "./Header.scss";

const { Header } = Layout;

const onLogout = (e, globals, history) => {
  globals.onLoginStatusChange(false);
  history.push("/login");
};

const MainHeader = ({ globals, layout, history }) => {
  const content = (
    <div>
      <span>{globals.user.nmae}</span>
      <span
        style={{ cursor: "pointer" }}
        onClick={e => onLogout(e, globals, history)}
      >
        Logout
      </span>
    </div>
  );

  return (
    <Header
      style={{ background: "#fff", padding: "0px 0px 0px 15px" }}
      className="header"
    >
      <Icon
        className="trigger"
        type={layout.collapsed ? "menu-unfold" : "menu-fold"}
        onClick={layout.toggle}
      />
      <div className="user-avt">
        <Popover placement="bottom" content={content} trigger="click">
          <Avatar icon="user" />
        </Popover>
      </div>
    </Header>
  );
};

export default inject("globals", "layout")(withRouter(observer(MainHeader)));
