import React, { useState } from "react";
import { Layout, theme, Input } from "antd";
import { Space, Table } from "antd";
const { Content } = Layout;

const columns = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Urls",
    dataIndex: "url",
    key: "url",
  },
  {
    title: "Parameter",
    dataIndex: "parameter",
    key: "parameter",
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
    title: "Receiver",
    dataIndex: "receiver",
    key: "receiver",
  },
  {
    title: "Memo",
    dataIndex: "memo",
    key: "memo",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];
const data = [
  {
    key: "1",
    receiver: "mk.jung01@gsretail.com",
    url: "index.gs",
    parameter: 161385,
    value: 60000,
    operator: ">",
    memo: "1분 전과 비교 시 50000 -> 60000 증가",
    date: "2023-03-01 14:22:56",
  },
  {
    key: "2",
    receiver: "https://teams.hook.com/blahblah",
    url: "index.gs",
    parameter: 161385,
    value: 60000,
    operator: ">",
    memo: "3분 전과 비교 시 60000 -> 50000 20%감소",
    date: "2023-03-01 14:22:58",
  },
  {
    key: "3",
    receiver: "gs@gsretail.com",
    url: "plan/detail.gs",
    parameter: 4432,
    value: "10%",
    operator: ">",
    memo: "5분 전과 비교 시 50000 -> 60000 증가",
    date: "2023-03-04 14:22:56",
  },
];
export const Alarm = () => {
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
        <div className="mb-5">
          <h2 className="page-title">Alarm</h2>
        </div>
        <Table columns={columns} dataSource={data} />
      </Content>
    </Layout>
  );
};
