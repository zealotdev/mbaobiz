import { Layout, Menu } from 'antd';
import {
  ShopOutlined,
  PieChartOutlined,
  FundOutlined,
  FileTextOutlined,
  HomeOutlined,
  ApartmentOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { useState } from 'react';

import Topbar from './topBar';
import Sidebar from './sideBar';

const { Footer, Content } = Layout;
const { SubMenu } = Menu;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Topbar />

        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
