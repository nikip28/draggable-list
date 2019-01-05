import React from "react";
import { observer, inject } from "mobx-react";
import { Form, Icon, Input, Button, Card, message } from "antd";
import { withRouter } from "react-router";
import SocialButtons from "./SocialButton";
import "./Login.scss";

const FormItem = Form.Item;

const LoginPage = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (
          values.userName === "admin@admin.com" &&
          values.password === "admin@123"
        ) {
          props.globals.onLoginStatusChange(true);
          props.history.push("/profile");
        } else {
          message.error("Invalid Username or Password!");
        }
      }
    });
  };

  const handleSocialLogin = user => {
    console.log(user._profile.name);

    props.globals.setUserFromSocial(user._profile.name);
    props.history.push("/profile");
  };

  const handleSocialLoginFailure = error => {
    console.log(error);
  };

  return (
    <div>
      <div className="login-page">
        <Card>
          <Form
            className="login-form"
            onSubmit={e => handleSubmit(e, props.form)}
          >
            <FormItem>
              <h2>Login</h2>
            </FormItem>
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "100%" }}
              >
                Log in
              </Button>
            </FormItem>
          </Form>
          <div>
            <SocialButtons
              provider="google"
              appId="942375517894-47iiickf15ai5aeg0s3s0r0r4gn6ugp1.apps.googleusercontent.com"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
              className="google-plus-button"
            >
              Login With Google+
            </SocialButtons>
          </div>
        </Card>
      </div>
    </div>
  );
};

const WrappedLoginPage = Form.create()(LoginPage);

export default inject("globals")(withRouter(observer(WrappedLoginPage)));
