import React, { useMemo } from 'react';
import { Layout, Menu, theme, Avatar, Dropdown } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import type { UserInfo, MenuItem } from '../types/auth';

const { Header, Sider, Content } = Layout;

const SidebarLayout: React.FC = () => {
  const navigate = useNavigate();
  const { userInfo, userMenus } = useAuth() as { userInfo: UserInfo; userMenus: MenuItem[] };
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // 递归生成菜单项
  const generateMenuItems = (menus: MenuItem[]) => {
    return menus.map(menu => {
      const item = {
        key: menu.id,
        label: menu.name,
        onClick: () => menu.path && navigate(menu.path),
      } as any;
      if (menu.children && menu.children.length > 0) {
        item.children = generateMenuItems(menu.children);
      }
      return item;
    });
  };

  const menuItems = useMemo(() => generateMenuItems(userMenus), [userMenus, navigate]);

  // 用户下拉菜单
  const userMenuItems = [
    {
      key: 'logout',
      icon: <LogoutOutlined />, 
      label: '退出登录',
      onClick: () => {
        navigate('/login');
      },
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        trigger={null} 
        collapsible 
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          // @ts-ignore - 自定义MenuItem类型与Ant Design类型不匹配，但功能正确
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: 0, 
          background: colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16
        }}>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar src={userInfo?.avatar} icon={<UserOutlined />} />
              <span>{userInfo?.username}</span>
            </div>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
