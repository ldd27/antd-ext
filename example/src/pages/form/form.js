import React from 'react';
import { Input, Row, Col } from 'antd';
import {
  Modal,
  Form,
  FormItem,
  FormInput,
  FormInputNumber,
  FormCheckbox,
  FormSwitch,
  FormTextArea,
  FormRadio,
  FormSelect,
  FormDatePicker,
  FormTimePicker,
} from '../../../../dist';

const Index = ({ item, visible, onCancel, onOk, editable }) => {
  const [form] = Form.useForm();
  const modalProps = {
    visible,
    title: 'form',
    onCancel,
    onOk() {
      form
        .validateFields()
        .then(data => {
          onOk(data);
        })
        .catch(err => {
          console.log(err, 22);
        });
    },
  };

  const formProps = {
    form,
    initialValues: item,
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  return (
    <Modal {...modalProps}>
      <Form {...formProps}>
        <FormItem name="name1" label="name1" rules={['required']}>
          <Input style={{ width: '100%' }} />
        </FormItem>
        <FormItem name="name2" label="name2" rules={['required']} before="before" after="after">
          <Input style={{ width: 100 }} />
        </FormItem>
        <FormItem
          name="name3"
          label="name3"
          rules={['required']}
          show={({ getFieldValue }) => getFieldValue('name2') === '111'}
        >
          <Input />
        </FormItem>
        <FormItem
          name="name4"
          label="name4"
          rules={['required']}
          before="before"
          after="after"
          editable={false}
        >
          <Input style={{ width: 100 }} />
        </FormItem>

        <FormInput
          name="name5"
          label="name5"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
          show={({ getFieldValue }) => getFieldValue('name2') === '111'}
        />
        <FormInputNumber
          name="name6"
          label="name6"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
        />
        <FormItem noStyle show={({ getFieldValue }) => getFieldValue('name2') === '111'}>
          <Row>
            <Col span={12}>
              <FormInputNumber
                name="name6"
                label="name6"
                rules={['required']}
                before="before"
                // after="after"
                // editable={editable}
              />
            </Col>
          </Row>
        </FormItem>
        <FormCheckbox
          name="name7"
          label="name7"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
          options={[
            {
              label: '111',
              value: 1,
            },
            {
              label: '222',
              value: 2,
            },
            {
              label: '333',
              value: 3,
            },
          ]}
        />
        <FormSwitch
          name="name8"
          label="name8"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
          checkedChildren="yes"
          unCheckedChildren="no"
        />
        <FormTextArea
          name="name9"
          label="name9"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
        />
        <FormRadio
          name="name10"
          label="name10"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
          options={[
            {
              label: '111',
              value: 1,
            },
            {
              label: '222',
              value: 2,
            },
            {
              label: '333',
              value: 3,
            },
          ]}
        />
        <FormSelect
          name="name11"
          label="name11"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
          options={[
            {
              label: '111',
              value: 1,
            },
            {
              label: '222',
              value: 2,
            },
            {
              label: '333',
              value: 3,
            },
          ]}
        />
        <FormDatePicker
          name="name12"
          label="name12"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
        />
        <FormTimePicker
          name="name13"
          label="name13"
          rules={['required']}
          before="before"
          after="after"
          editable={editable}
        />
      </Form>
    </Modal>
  );
};

export default Index;
