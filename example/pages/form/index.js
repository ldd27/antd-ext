import {
  Input,
  Row,
  Col,
  Typography,
  message,
  Button,
  Form as AntForm
} from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import {
  Form,
  FormInput,
  FormSelect,
  FormItem,
  FormUpload,
  FormRadio,
  FormDatePicker,
  FormInputNumber,
  FormTextArea,
  FormLabel,
  FormCheckbox
} from "../../../dist";

const Test = form => {
  <FormItem id="bbbb" form={form} init="bbbb">
    <Input />
  </FormItem>;
};

const { Paragraph } = Typography;
const ExampleForm = ({ form }) => {
  const onSave = () => {
    form.validateFields(errors => {
      if (errors) {
        return;
      }

      console.log(
        form.getFieldsValue().number,
        typeof form.getFieldsValue().number
      );
    });
  };

  return (
    <Form
      api={form}
      layout="horizontal"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
    >
      <Button type="primary" onClick={onSave}>
        保存
      </Button>
      <Row>
        <Col span={12}>
          <FormInput
            id="num22ber"
            init="fasdf"
            label="test"
            // labelCol={{ span: 4 }}
            // wrapperCol={{ span: 14 }}
            rules={["required", "number", "minNum=1", "maxNum=10"]}
          />
        </Col>
        <Col span={12}>
          <FormInput
            id="num222ber"
            init="fasdf"
            label="test"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            rules={["required", "number", "minNum=1", "maxNum=10"]}
          />
        </Col>
      </Row>

      {form.getFieldDecorator("namename", {
        initialValue: "ddd"
      })(<Input />)}

      <FormItem id="vvvvv" form={form} init="333">
        <Input />
      </FormItem>

      <FormLabel id="ddad" init={`${form.getFieldsValue().num222ber}`} />
      <FormLabel id="dddasdasd" init={`${form.getFieldsValue().namename}`} />
      <FormLabel id="dddasdasd" init={`${form.getFieldsValue().vvvvv}`} />
      <FormLabel id="dddasdasd" init={`${form.getFieldsValue().bbbb}`} />
      <FormInput
        id="number"
        init="vvv"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        rules={["required", "number", "minNum=1", "maxNum=10"]}
      />
      <FormInput
        id="d1d"
        init="vvv"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        // rules={['required', 'phone']}
      />
      <FormInput
        id="d3d"
        init="vvv"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        // rules={['required', 'id']}
      />
      <FormSelect
        id="aaadd"
        init="dd"
        label="ccc"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        rules={["required"]}
        // editable={false}
        options={[
          { label: "11", value: "dd" },
          { label: "111", value: "d1d" },
          { label: "131", value: "d3d" }
        ]}
      />
      {null}
      <FormItem label="ccc" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
        <Paragraph copyable>22222</Paragraph>
      </FormItem>
      <FormUpload
        id="upload"
        init={{
          full_url:
            "https://chain-static.codoon.com/upload/2019-03-21/a276000e-621a-4d28-9a24-3d28361e66a3.png!large"
        }}
        name="image"
        action="http://localhost:9003/v1/club_admin/upload_image?club_id=1&club_user_id=1"
        label="upload"
        // ext={["video/mp4"]}
        ext={["application/zip"]}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        // dim={{ width: 100, height: 100 }}
        listType="picture"
        formatApi={res => {
          if (!res) {
            message.error("服务器繁忙");
            return false;
          }

          if (res.url) {
            return { url: res.url, full_url: res.url };
          } else {
            message.error(res.detail || "服务器繁忙");
            return false;
          }
        }}
        imageStyle={{ width: 338, height: 140 }}
        // editable={false}
        preview
        rules={["required"]}
        right={
          <Button style={{ marginLeft: 8 }} onClick={e => e.stopPropagation()}>
            换一换
          </Button>
        }
      >
        {(value, loading) => <span>111</span>}
      </FormUpload>
      <FormRadio
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        id="radio"
        init={1}
        label="radio"
        options={[{ value: 1, label: "test1" }, { value: 2, label: "test2" }]}
        buttonStyle="solid"
      />
      <FormCheckbox
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        id="checkbox"
        init={[1]}
        label="checkbox"
        options={[{ value: 1, label: "test1" }, { value: 2, label: "test2" }]}
        buttonStyle="solid"
      />
      <FormDatePicker
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        id="date_picker"
        label="date_picker"
        init={moment()}
        editable={false}
        style={{ width: 300 }}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
      />
      <FormInputNumber
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        id="input_number"
        label="input_number"
        init={1111}
        // editable={false}
        style={{ width: 300 }}
        before={<span>111&nbsp;</span>}
        after={<span>&nbsp;222</span>}
      />
      <FormTextArea
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        id="text_area"
        label="text_area"
        init="text_area"
        editable={false}
        style={{ width: 300 }}
        autosize={{
          minRows: 4,
          maxRows: 10
        }}
      />
    </Form>
  );
};

export default Form.create()(ExampleForm);
