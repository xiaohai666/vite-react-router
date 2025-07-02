// 用户权限接口
export interface MenuItem {
  id?: string;
  key?: string;
  label?: string;
  name?: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
  onClick?: () => void;
}
// 用户权限接口
export interface UserPermission {
  id: string;
  name: string;
  code: string;
  type: 'menu' | 'button' | 'api';
}

// 用户信息接口
export interface UserInfo {
  id: string;
  username: string;
  avatar?: string;
  permissions: UserPermission[];
}

// 路由配置接口
export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  children?: RouteConfig[];
  permission?: string;
  meta?: {
    title: string;
    icon?: string;
    hidden?: boolean;
  };
} 