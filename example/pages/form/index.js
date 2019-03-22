import { Input, Row, Col, Typography, message } from 'antd';
import "antd/dist/antd.css";
import { Form, FormInput, FormSelect, FormItem, FormUpload, FormRadio } from '../../../dist';

const { Paragraph } = Typography;

const ExampleForm = ({ form }) => {
  return (
    <Form api={form} layout="horizontal">
      <FormInput
        id="d1d"
        init="vvv"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        rules={['required', 'phone']}
      />
      <FormInput
        id="d3d"
        init="vvv"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        rules={['required', 'id']}
      />
      <FormSelect
        id="aaadd"
        init="dd"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        rules={['required']}
        // editable={false}
        options={[{ label: '11', value: 'dd' }, { label: '111', value: 'd1d' }, { label: '131', value: 'd3d' }]}
      />
      {
        null
      }
      <FormItem
        id="api_token"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
      >
        <Paragraph copyable>22222</Paragraph>
      </FormItem>
      <FormUpload
        id="upload"
        init={{ full_url: 'https://chain-static.codoon.com/upload/2019-03-21/a276000e-621a-4d28-9a24-3d28361e66a3.png!large' }}
        name="image"
        action="http://localhost:9003/v1/club_admin/upload_image?club_id=1&club_user_id=1"
        label="upload"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        // dim={{ width: 100, height: 100 }}
        formatApi={res => {
          if (!res) {
            message.error('服务器繁忙')
            return false;
          }

          if (res.url) {
            return { url: res.url, full_url: res.url }
          } else {
            message.error(res.detail || '服务器繁忙')
            return false;
          }
        }}
        editable={false}
        preview
        rules={['required']}
      />
      <FormRadio
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        id="radio"
        init={1}
        label="radio"
        options={[{ value: 1, label: 'test1' }, { value: 2, label: 'test2' }]}
        buttonStyle="solid"
      />
    </Form>
  )
}

export default Form.create()(ExampleForm);