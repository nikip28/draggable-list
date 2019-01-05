import React from "react";
import { observer, inject } from "mobx-react";
import { Avatar, Divider, Button, Radio, Form, Input, Icon } from "antd";
import ReactDragList from "react-drag-list";
import "./profile.scss";

const Profile = props => {
  const { getFieldDecorator } = props.form;
  const _handleUpdate = (evt, updated) => {
    props.globals.updateSkills(updated);
  };
  const removeSkill = (e, record) => {
    let skills = [...props.globals.user.skills];
    let s = skills.filter(skill => skill.title !== record.title);
    props.globals.updateSkills(s);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        {!props.profile.editProfile ? (
          <div style={{ width: "70%" }}>
            <div style={{ fontSize: "35px", margin: "10px 0" }}>
              <span>{props.globals.user.name}</span>
              <span style={{ float: "right" }}>
                <Button icon="edit" onClick={props.profile.onToggleProfile} />
              </span>
            </div>
            <div style={{ fontSize: "20px" }}>
              Age: {props.globals.user.age}
            </div>
            <div style={{ fontSize: "20px" }}>
              Gender: {props.globals.user.gender}
            </div>
            <div style={{ fontSize: "20px" }}>
              Skills:{" "}
              <ul>
                {props.globals.user.skills.map(skill => (
                  <li key={skill.title}>{skill.title}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ width: "70%" }}>
            <div style={{ fontSize: "35px", margin: "10px 0" }}>
              <span>{props.globals.user.name}</span>
              <span style={{ float: "right" }}>
                <Button icon="edit" onClick={props.profile.onToggleProfile} />
              </span>
            </div>
            <Form onSubmit={e => e} className="login-form">
              <Form.Item label="Age">
                {getFieldDecorator("age", {
                  rules: [
                    { required: true, message: "Please input your age!" }
                  ],
                  initialValue: props.globals.user.age
                })(<Input style={{ width: "300px" }} placeholder="Age" />)}
              </Form.Item>
              <Form.Item label="Gender">
                {getFieldDecorator("gender", {
                  rules: [
                    {
                      required: true
                    }
                  ],
                  initialValue: props.globals.user.gender
                })(
                  <Radio.Group>
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item label="Skills">
                {getFieldDecorator("skills", {
                  rules: [
                    {
                      required: false
                    }
                  ],
                  initialValue: props.globals.user.skills
                })(
                  <React.Fragment>
                    <ReactDragList
                      dataSource={props.globals.user.skills}
                      rowKey="title"
                      row={(record, index) => (
                        <div
                          key={index}
                          style={{
                            color: "black",
                            background: record.color,
                            marginBottom: "5px"
                          }}
                        >
                          <div
                            style={{
                              justifyContent: "space-between",
                              display: "flex"
                            }}
                          >
                            <span>{record.title}</span>
                            <span
                              style={{ display: "block", cursor: "pointer" }}
                              onClick={e => removeSkill(e, record)}
                            >
                              <Icon type="delete" />
                            </span>
                          </div>
                        </div>
                      )}
                      handles={false}
                      className="simple-drag"
                      rowClassName="simple-drag-row"
                      onUpdate={_handleUpdate}
                    />
                  </React.Fragment>
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={e =>
                    props.globals.updateProfile(e, props.form, props.profile)
                  }
                >
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        <Divider type="vertical" style={{ height: "220px" }} />
        <div style={{ width: "30%", textAlign: "center" }}>
          <Avatar shape="square" src="" size={200} icon="user" />
        </div>
      </div>
    </div>
  );
};

export default inject("globals", "profile")(Form.create()(observer(Profile)));
