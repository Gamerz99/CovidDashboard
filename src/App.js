import { Layout } from "antd";
import React, { useState } from "react";
import "./App.css";
import CovidDashboard from "./pages/CovidDashboard.tsx";
import { Footer } from "antd/lib/layout/layout";

const { Header, Content } = Layout;

function App() {

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: '0 0 0 24px' }}>
        Covid Dashboard
      </Header>
      <Content className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
        }}>
        <CovidDashboard />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;