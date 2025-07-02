import ErrorBoundary from '../components/ErrorBoundary';
import SidebarLayout from '../layouts/SidebarLayout';
import FullLayout from '../layouts/FullLayout';
import Dashboard from '../pages/Dashboard';
import UserList from '../pages/UserList';
import Settings from '../pages/Settings';
import { RouterProvider,createBrowserRouter } from "react-router";
import { useAuth } from "../hooks/useAuth";

// 创建基础路由（静态路由）
const routers = [
    {
      path: '/',
      element: <SidebarLayout />,
      children: [
        { 
            index: true, 
            element: <Dashboard />
        },
        {
            path:'/dashboard',
            element:<Dashboard />,
            errorElement:<ErrorBoundary />
        },
        {
            path:'/user-list',
            element:<UserList />,
            errorElement:<ErrorBoundary />
        },
        {
            path:'/settings',
            element:<Settings />,
            errorElement:<ErrorBoundary />
        }
      ]
    },
    {
      path: '/fullpage',
      element: <FullLayout />,
      children: [
        {
          path: '/fullpage/dashboard',
          element: <Dashboard />,
          errorElement: <ErrorBoundary />
        }
      ],
      errorElement: <ErrorBoundary />
    },
    {
        path:'*',
        element:<div>404</div>,
        errorElement: <ErrorBoundary />
    }
  ];

const Router = () => {
    const { loading } = useAuth();

    if(loading) return <div>Loading...</div>;

    const router = createBrowserRouter(routers);
  
    return <RouterProvider router={router} />
  }
export default Router;