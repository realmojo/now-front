import React, { useState } from "react";
import {
  Layout,
  theme,
  Button,
  Drawer,
  Select,
  Input,
  Checkbox,
  InputNumber,
} from "antd";
import { Space, Table } from "antd";
const { Content } = Layout;
const { TextArea } = Input;

const columns = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Urls",
    dataIndex: "urls",
    key: "urls",
    render: (urls) => {
      return (
        <ul>
          {urls.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ul>
      );
    },
  },
  {
    title: "Parameter",
    dataIndex: "parameter",
    key: "parameter",
  },
  {
    title: "Minute",
    dataIndex: "minute",
    key: "minute",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
  {
    title: "Operator",
    dataIndex: "operator",
    key: "operator",
  },
  {
    title: "Receivers",
    dataIndex: "receivers",
    key: "receivers",
    render: (receivers) => {
      return (
        <ul>
          {receivers.map((receiver, index) => (
            <li key={index}>{receiver}</li>
          ))}
        </ul>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    urls: ["index.gs", "plan/shop/detail.gs"],
    parameter: 161385,
    minute: 1,
    value: 60000,
    operator: ">",
    receivers: ["mk.jung01@gsretail.com", "https://teams.hook.com/blahblah"],
  },
  {
    key: "2",
    urls: ["deal/deal.gs"],
    parameter: 3355235,
    minute: 3,
    value: "10%",
    operator: "=",
    receivers: ["mk.jung01@gsretail.com", "https://teams.hook.com/blahblah"],
  },
  {
    key: "3",
    urls: ["deal/deal.js"],
    parameter: 0,
    minute: 10,
    value: "12%",
    operator: "<",
    receivers: ["mk.jung01@gsretail.com", "https://teams.hook.com/blahblah"],
  },
];
export const Threshold = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [percent, setPercent] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Layout className="site-layout">
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <div className="flex justify-between">
          <h2 className="page-title">Threshold</h2>
          <div className="mb-4">
            <Button onClick={showDrawer}>Add</Button>
          </div>
        </div>
        <Drawer
          title="Threshold Add"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div>
            <h3>Urls</h3>
            <TextArea
              rows={4}
              placeholder="index.gs&#13;&#10;data/index.gs"
              maxLength={6}
              className="mb-2"
            />
            <h3>
              Parameter <small className="text-gray-300">(optional)</small>
            </h3>
            <Input className="mb-2" />
            <h3>Minute</h3>
            <InputNumber
              className="mb-2"
              style={{ width: "100%" }}
              min={0}
              defaultValue={1}
            />
            <h3>Value</h3>
            <InputNumber
              className="mb-2"
              style={{ width: "70%" }}
              min={0}
              defaultValue={3}
            />
            <Checkbox
              onChange={() => {
                setPercent(!percent);
              }}
              checked={percent}
              className="ml-2"
            >
              Percent
            </Checkbox>
            <h3>Operator</h3>
            <Select
              defaultValue=">"
              style={{ width: "100%" }}
              className="mb-2"
              onChange={handleChange}
              options={[
                { value: "gt", label: ">" },
                { value: "lt", label: "<" },
                { value: "eq", label: "=" },
              ]}
            />
            <h3>Receivers</h3>
            <TextArea
              rows={4}
              placeholder="mk.jung01@gsretail.com&#13;&#10;https://teams.office.com/blahblah"
              maxLength={6}
            />
          </div>
          <div className="mt-2 float-right">
            <Button>Add</Button>
          </div>
        </Drawer>

        <Table columns={columns} dataSource={data} />
      </Content>
    </Layout>
  );
};
