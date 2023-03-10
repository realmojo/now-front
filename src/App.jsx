import { Layout, theme } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Alarm } from "./views/Alarm";
import { Threshold } from "./views/Threshold";
const { Header } = Layout;
import { Button } from "antd";
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="float-right">
            <div className="mr-8">
              <Button type="default">Logout</Button>
            </div>
          </div>
        </Header>
        <Routes>
          <Route path="/" index element={<Threshold />} />
          <Route path="/threshold" exact={true} element={<Threshold />} />
          <Route path="/alarm" exact={true} element={<Alarm />} />
        </Routes>
      </Layout>
    </Layout>
  );
};
export default App;
