import React, { Fragment } from 'react';
import { Button, Popconfirm } from 'antd';
import { CRUDPage, Form, FormInput, FormSelect } from '../../../../dist';

const Index = () => {
  const [filterForm] = Form.useForm();
  const [CUForm] = Form.useForm();
  const ref = React.useRef();

  const getTableData = ({ current, pageSize, filters, sorter, ...rest }) => {
    console.log(rest);
    return fetch(`https://randomuser.me/api?results=55&page=${current}&size=${pageSize}`)
      .then(res => res.json())
      .then(res => ({
        total: res.info.results,
        data_list: res.results,
      }));
  };

  const filter = {
    form: filterForm,
    initialValues: { gender: '' },
    children: (
      <Fragment>
        <FormSelect
          // id="xx"
          name="gender"
          label="gender"
          options={[
            { label: 'all', value: '' },
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
          ]}
          style={{ width: 200 }}
        />
        <Button.Group>
          <Button type="primary" onClick={() => ref.current.search.submit()}>
            查询
          </Button>
          <Button type="primary" onClick={() => ref.current.onAdd()}>
            添加
          </Button>
        </Button.Group>
      </Fragment>
    ),
  };

  const table = {
    showIndex: true,
    getTableData,
    rowKey: 'email',
    columns: [
      {
        title: 'name',
        dataIndex: ['name', 'last'],
      },
      {
        title: 'email',
        dataIndex: 'email',
      },
      {
        title: 'phone',
        dataIndex: 'phone',
      },
      {
        title: 'gender',
        dataIndex: 'gender',
      },
      {
        title: '操作',
        render(value, row) {
          return (
            <Button.Group size="small">
              <Button type="primary" onClick={() => ref.current.onEdit(row)}>
                编辑
              </Button>
              <Popconfirm title="确认删除该数据？" onConfirm={() => ref.current.search.submit()}>
                <Button type="primary" danger>
                  删除
                </Button>
              </Popconfirm>
            </Button.Group>
          );
        },
      },
    ],
  };

  const form = {
    form: CUForm,
    title: 'xxxx',
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    children: [
      <FormInput name={['name', 'last']} label="name" rules={['required']} />,
      <FormInput name="email" label="email" rules={['required', 'email']} />,
      <FormInput name="phone" label="phone" rules={['required', 'phone']} />,
      <FormSelect
        name="gender"
        label="gender"
        options={[
          { label: 'male', value: 'male' },
          { label: 'female', value: 'female' },
        ]}
        rules={['required']}
      />,
    ],
    onOk() {
      return new Promise((resolve, reject) => resolve());
    },
  };

  const pageProps = {
    table,
    filter,
    form,
  };

  return <CRUDPage ref={ref} {...pageProps} />;
};

export default Index;
