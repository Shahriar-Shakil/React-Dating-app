import { Button, DatePicker, Form, Input, Select } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from "@ant-design/icons";

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const { Option } = Select;

const Label = ({ label, icon }) => {
  return (
    <div className="d-flex">
      <span className="pl-1">{label}</span>
      <span className="icon">{icon}</span>
    </div>
  );
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} defaultValue="86">
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);
export default function UserProfileUpdateForm() {
  const user = useSelector((state) => state.userData.user);
  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {};
  return (
    <StyledForm
      layout="vertical"
      {...layout}
      name="userProfileUpdate"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        label={<Label label="User Name" icon={<UserOutlined />} />}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item
        name="password"
        label={<Label label="Password" icon={<SecurityScanOutlined />} />}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>
      <Form.Item
        name="birthDay"
        label={<Label label="Birth Date" />}
        rules={[
          {
            required: false,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="phone"
        label={<Label label="Phone" icon={<PhoneOutlined />} />}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: "100%" }}
          placeholder="0xxxxxxx"
        />
      </Form.Item>
      <Form.Item
        name="email"
        label={<Label label="Email" icon={<MailOutlined />} />}
        rules={[{ type: "email" }]}
      >
        <Input defaultValue={user.email} />{" "}
      </Form.Item>
      <Form.Item
        name={"Character"}
        label={<Label label="Desired Character Qualites " />}
      >
        <Input.TextArea maxLength={20} autoSize={{ minRows: 1, maxRows: 2 }} />
      </Form.Item>
      <Form.Item {...tailLayout} className="submit">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
}
const StyledForm = styled(Form)`
  .ant-form-item {
    border: 1px solid #d9d9d9;
  }
  .ant-form-item-label {
    padding: 0px !important;
    label {
      display: flex;
      background: #dcdcdc;
      span.icon {
        position: absolute;
        right: 5px;
      }
    }
  }

  .ant-input:focus,
  .ant-input-focused {
    border: none;
    box-shadow: none !important;
  }
  .ant-input,
  .ant-input-affix-wrapper,
  .ant-picker,
  .ant-input-group-addon,
  .submit {
    border: none;
  }
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border: none;
    box-shadow: none !important;
  }
  .ant-picker:hover,
  .ant-picker-focused {
    border: none;
    box-shadow: none !important;
  }
  .ant-input-group-addon
    .ant-select.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector {
    background-color: #fff;
    border: 1px solid white;
  }
`;
const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
