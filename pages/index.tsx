import Link from 'next/link';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';

import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Form, Input, List, Skeleton } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { addBusiness } from '../features/business/BusinessSlice';

const RegistrationCreateForm = ({ visible, onRegister, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Register a new business"
      okText="Register"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onRegister(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="name"
          label="Business Name"
          rules={[
            {
              required: true,
              message: 'Please input the name of business!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function Index() {
  const businessList = useSelector((state: RootState) => state.bussiness);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // let businesses: Business[] = [];
  const onRegister = (values) => {
    setVisible(false);
    dispatch(addBusiness(values));
    // console.log(businessList);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  };

  setTimeout(() => setLoading(false), 1700000);

  return (
    <div className="w-full flex flex-col items-center mt-20">
      <List
        style={{ width: '1080px' }}
        className="rounded"
        size="large"
        itemLayout="horizontal"
        header={<h2 className="text-blue-500 text-xl">Business List</h2>}
        footer={
          <Button
            className="flex items-center mx-auto"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setVisible(true)}
          >
            Register New
          </Button>
        }
        bordered
        dataSource={businessList}
        renderItem={(business) => (
          <List.Item
            actions={[
              <a key="edit" className="text-green-500 uppercase">
                edit
              </a>,
              <a key="delete" className="text-red-300 uppercase">
                more
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                title={
                  <Link href={`/${business.name}/dashboard`}>
                    <a className="capitalize text-lg text-gray-600">
                      {business.name} - Business
                    </a>
                  </Link>
                }
                description={business.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      {/* {businesses.length == 0 && (
        <div>
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
              className="flex items-center"
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setVisible(true)}
            >
              Register Now
            </Button>
          </Empty>
        </div>
      )} */}
      <RegistrationCreateForm
        visible={visible}
        onRegister={onRegister}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}
