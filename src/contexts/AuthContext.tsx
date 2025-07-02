import { createContext, useState, useEffect } from "react";
import { userAPI } from "../services/api";
import type { UserInfo, MenuItem } from "../types/auth";

const AuthContext = createContext<{
  userMenus: MenuItem[];
  userInfo: UserInfo | null;
  loading: boolean;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userMenus, setUserMenus] = useState<MenuItem[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        // 模拟从后端获取权限数据
        const {data:userInfo} = await userAPI.getUserInfo();
        const {data:menus} = await userAPI.getUserMenus();
        
        setUserInfo(userInfo as unknown as UserInfo);
        setUserMenus(menus as unknown as MenuItem[]);
      } catch (error) {
        console.error("Failed to load permissions", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPermissions();
  }, []);

  return (
    <AuthContext.Provider value={{ userMenus, userInfo, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
