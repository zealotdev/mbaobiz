import { PlusOutlined } from '@ant-design/icons';
import { Empty, Button, Modal, Form, Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function Index() {
  const [modalOpened, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpened(false);
    });
  };
  return (
    <div className="w-full flex flex-col items-center mt-20">
      <Empty
        className="flex flex-col items-center w-52"
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
            There is no <span className="text-blue-500">Business</span>{' '}
            registered.
          </span>
        }
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setModalOpened(!modalOpened)}
        >
          Register Now
        </Button>
      </Empty>
      <Modal
        title="Register a new Business"
        centered
        visible={modalOpened}
        onCancel={() => setModalOpened(false)}
        onOk={() => setModalOpened(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => setModalOpened(false)}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Business Name"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="Mbao Business" size="large" />
          </Form.Item>
          <Form.Item
            label="Description"
            tooltip={{
              title: 'This is optional field',
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input placeholder="Biashara ya Mbao Kibena" size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
