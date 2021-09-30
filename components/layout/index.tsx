import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { change } from '../../features/SiderNav/CollapseSlice';
import { RootState } from '../../app/store';

import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import SiderNav from '../../features/SiderNav/SiderNav';

const { Header, Content } = Layout;

export default function AppLayout({ children }) {
  const collapsed = useSelector((state: RootState) => state.collapse.value);
  const dispatch = useDispatch();

  const toggleCallapse = () => {
    if (collapsed) dispatch(change(false));
    if (!collapsed) dispatch(change(true));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderNav />
      <Layout className="bg-white">
        <Header className="bg-white text-black" style={{ padding: 0 }}>
          {collapsed && (
            <MenuUnfoldOutlined
              className="fill-current text-blue-500 text-2xl px-4 cursor-pointer hover:text-blue-500 font-bold "
              onClick={() => toggleCallapse()}
            />
          )}
          {!collapsed && (
            <MenuFoldOutlined
              className="fill-current text-blue-500 text-2xl px-4 cursor-pointer hover:text-blue-500 font-bold"
              onClick={() => toggleCallapse()}
            />
          )}
        </Header>
        <Content className="bg-gray-100">
          <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
