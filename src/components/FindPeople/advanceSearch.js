import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import {
  DownOutlined,
  FileSearchOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import styled from "styled-components";

const { Option } = Select;
const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  function onChange(value) {}
  const getFields = () => {
    return (
      <>
        <Col span={6} key={1}>
          <Form.Item
            name={`field-${1}`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Select placeholder="I am ..">
              <Option value="jack">Male</Option>
              <Option value="lucy">Female</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6} key={2}>
          <Form.Item
            name={`at_age`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <InputNumber
              placeholder="at age"
              defaultValue={3}
              onChange={onChange}
            />
          </Form.Item>
        </Col>
        <Col span={6} key={3}>
          <Form.Item
            name={`field-${3}`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Select placeholder="Looking For..">
              <Option value="jack">Male</Option>
              <Option value="lucy">Female</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6} key={2}>
          <Form.Item
            name={`of_age`}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <InputNumber placeholder="of age" onChange={onChange} />
          </Form.Item>
        </Col>
      </>
    );
  };

  const onFinish = (values) => {};

  return (
    <StyledFormContainer>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24} className="m-0 ">
          {getFields()}
        </Row>
        <Row className="mt-3 ">
          <Col
            span={24}
            style={{
              textAlign: "center",
            }}
          >
            <Button
              type="primary"
              danger
              size="small"
              className="px-3 submitButton"
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
            >
              Search
            </Button>
            <Button
              danger
              size="small"
              className="px-3"
              style={{
                margin: "0 8px",
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
            <a
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setExpand(!expand);
              }}
            ></a>
          </Col>
        </Row>
      </Form>
    </StyledFormContainer>
  );
};
export default AdvancedSearchForm;

const StyledFormContainer = styled.div`
  .ant-form-item {
    width: 70%;
  }
  #advanced_search {
    padding: 24px;
    background: inherit;
    border: none;
    .ant-form-item {
      /* margin: 0; */
      margin-right: auto;
      display: block;
      margin-left: auto;
      .ant-select-selector,
      .ant-input-number {
        border: none;
        border-bottom: 1px solid #c60b1e;
        .ant-input-number-input {
          font-size: 12px;
        }
      }
    }
    ::placeholder {
      color: red;
    }
    .ant-select-selection-placeholder {
      font-size: 12px;
      opacity: 1;
    }
  }
  .submitButton {
    background: var(--main-red);
  }
`;
