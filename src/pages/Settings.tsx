import React from 'react';
import { Form, Input, Button, Card, Switch, Select, Space } from 'antd';

const Settings: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('设置保存:', values);
  };

  return (
    <div>
      <h2>系统设置</h2>
      <Card title="基本设置" style={{ marginBottom: 16 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            siteName: 'MGM Plus',
            siteDescription: '视频管理平台',
            enableRegistration: true,
            enableComments: true,
            language: 'zh-CN',
          }}
        >
          <Form.Item
            label="网站名称"
            name="siteName"
            rules={[{ required: true, message: '请输入网站名称' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="网站描述"
            name="siteDescription"
          >
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item
            label="语言设置"
            name="language"
          >
            <Select>
              <Select.Option value="zh-CN">中文</Select.Option>
              <Select.Option value="en-US">English</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="允许用户注册"
            name="enableRegistration"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="允许评论"
            name="enableComments"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                保存设置
              </Button>
              <Button onClick={() => form.resetFields()}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Settings; 