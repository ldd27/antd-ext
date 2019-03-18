import { Input, Row, Col, Typography } from 'antd';
import "antd/dist/antd.css";
import { Form, FormInput, FormSelect, FormItem } from '../../../dist';

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
    </Form>
  )
}

export default Form.create()(ExampleForm);