import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";

import firebase from "firebase";
import { registerWithPhone } from "../../redux/user/user.actions.types";
import rsf from "./../../redux/rsf";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const LoginWithEmail = () => {
  const [form] = Form.useForm();

  return (
    <StyledDiv className="col">
      <div className="row">
        <div className="col-12">
          <Form
            layout="vertical"
            form={form}
            name="register"
            // onFinish={onSignInSubmit}
          >
            <Form.Item
              name="phone"
              // label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Enter Email Here.." />
            </Form.Item>
            <div id="recaptcha-container"></div>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyledDiv>
  );
};

export default LoginWithEmail;
const StyledDiv = styled.div`
  .ant-form-item-label {
    label {
      font-size: 11px;
      color: #fff;
    }
  }
  .ant-btn-primary {
    width: 100%;
    background: transparent;  
  }
`;
