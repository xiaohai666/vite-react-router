import React from 'react';
import { useRouteError, isRouteErrorResponse, Navigate } from 'react-router';
import { Result, Button } from 'antd';
import { ReloadOutlined, LoginOutlined } from '@ant-design/icons';

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  // 处理 401 未授权错误
  if (isRouteErrorResponse(error) && error.status === 401) {
    return <Navigate to="/login" replace />;
  }

  // 处理 403 禁止访问错误
  if (isRouteErrorResponse(error) && error.status === 403) {
    return (
      <Result
        status="403"
        title="403"
        subTitle="抱歉，您没有权限访问此页面。"
        extra={
          <Button type="primary" onClick={() => window.history.back()}>
            返回上一页
          </Button>
        }
      />
    );
  }

  // 处理其他错误
  return (
    <Result
      status="500"
      title="500"
      subTitle="抱歉，服务器出现了问题。"
      extra={[
        <Button 
          key="reload" 
          type="primary" 
          icon={<ReloadOutlined />}
          onClick={() => window.location.reload()}
        >
          刷新页面
        </Button>,
        <Button 
          key="login" 
          icon={<LoginOutlined />}
          onClick={() => window.location.href = '/login'}
        >
          重新登录
        </Button>
      ]}
    />
  );
};

export default ErrorBoundary; 