import Link from 'next/link';
import { useRouter } from 'next/router';

import slugify from 'slugify';

// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { change } from './CollapseSlice';
import { RootState } from '../../app/store';

// Antd imports
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

export default function SiderNav() {
  const dispatch = useDispatch();
  // Collapse State
  const collapsed = useSelector((state: RootState) => state.collapse.value);
  // BusinessList State
  const businessList = useSelector((staet: RootState) => staet.bussiness);

  let links: string[] = [];

  businessList.map((business) =>
    links.push(slugify(business.name, { lower: true }))
  );

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={() => dispatch(change(true))}
      className="bg-blue-500"
    >
      <div className="py-6 text-white">Logo</div>
      <Menu defaultSelectedKeys={['1']} mode="inline" className="mt-10">
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          // onMouseEnter={collapsed ? () => dispatch(change(false)) : null}
        >
          <Link href="/">Home</Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<ApartmentOutlined />}
          title="My Businesses"
          onTitleClick={collapsed ? () => dispatch(change(false)) : null}
          onTitleMouseEnter={collapsed ? () => dispatch(change(false)) : null}
        >
          {links.map((link, index) => (
            <SubMenu
              key={`sub2-${index}`}
              icon={<ShopOutlined />}
              className="capitalize"
              title={`${link} Business`}
            >
              <Menu.Item key={`${link}-1`} icon={<PieChartOutlined />}>
                <Link href={`${link}/dashboard`}>
                  <a>Dashboard</a>
                </Link>
              </Menu.Item>
              <Menu.Item key={`${link}-2`} icon={<FundOutlined />}>
                <Link href={`${link}/inventory`}>
                  <a>Inventory</a>
                </Link>
              </Menu.Item>
              <Menu.Item key={`${link}-3`} icon={<UsergroupAddOutlined />}>
                <Link href={`${link}/stores`}>
                  <a>Stores</a>
                </Link>
              </Menu.Item>
              <Menu.Item key={`${link}-4`} icon={<FileTextOutlined />}>
                <Link href={`${link}/reports`}>
                  <a>Reports</a>
                </Link>
              </Menu.Item>
            </SubMenu>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
}
