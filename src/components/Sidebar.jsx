import { ThunderboltOutlined, AlertOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import React, { useState } from "react";
const { Sider } = Layout;
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <h1 className="text-white text-left font-bold text-2xl ml-6 my-4">NOW</h1>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "threshold",
            icon: <ThunderboltOutlined />,
            label: <Link to="/threshold">Threshold</Link>,
          },
          {
            key: "alarm",
            icon: <AlertOutlined />,
            label: <Link to="/alarm">Alarm</Link>,
          },
        ]}
      />
    </Sider>
  );
};
