import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";

import firebase from "firebase";
import { registerWithPhone } from "../../redux/user/user.actions.types";
import rsf from "./../../redux/rsf";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const LoginWithPhone = () => {
  const [form] = Form.useForm();
  const Option = { Select };
  const dispatch = useDispatch();
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        // other options
      }
    );
  }, []);
  const onSignInSubmit = (values) => {
    const number = values.prefix + values.phone;
    const appVerifier = window.recaptchaVerifier;
    dispatch(registerWithPhone({ number, appVerifier }));
  };
  useEffect(() => {}, []);
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+88">+88</Option>
        <Option value="+86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <StyledDiv className="col">
      <div className="row">
        <div className="col-12">
          <Form
            layout="vertical"
            form={form}
            name="register"
            onFinish={onSignInSubmit}
            initialValues={{
              prefix: "+88",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="phone"
              // label="PLEASE ENTER YOUR MOBILE PHONE NUMBER"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
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

export default LoginWithPhone;
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
