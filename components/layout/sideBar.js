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

const { Sider } = Layout;
const { SubMenu } = Menu;

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={() => onCollapse()}>
      <div className="py-6 text-white">Logo</div>
      <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<ApartmentOutlined />}
          title="My Businesses"
          onTitleClick={isCollapsed ? () => setIsCollapsed(false) : null}
          onTitleMouseEnter={isCollapsed ? () => setIsCollapsed(false) : null}
        >
          <SubMenu key="sub1-2" icon={<ShopOutlined />} title={'Mbao Business'}>
            <Menu.Item key={'2'} icon={<PieChartOutlined />}>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>
            <Menu.Item key={'3'} icon={<FundOutlined />}>
              <Link href="/inventory">
                <a>Inventory</a>
              </Link>
            </Menu.Item>
            <Menu.Item key={'4'} icon={<UsergroupAddOutlined />}>
              <Link href="/users">
                <a>Users</a>
              </Link>
            </Menu.Item>
            <Menu.Item key={'5'} icon={<FileTextOutlined />}>
              <Link href="/reports">
                <a>Reports</a>
              </Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
