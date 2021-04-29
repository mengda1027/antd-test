import React from "react";
import { Form, Input, Row } from "antd";
const FormItem = Form.Item;

function Test({ form: { getFieldDecorator }, list }) {
  return (
    <div style={{ maxHeight: "300px", overflowX: "scroll" }}>
      <Form>
        {list.map((item, index) => (
          <Row style={{ marginBottom: "20px" }}>
            <FormItem label={index + 1}>
              {getFieldDecorator(`list-${index}`, {
                initialValue: item.content,
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(<Input />)}
            </FormItem>
            {/* <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(<Input />)}
            </FormItem> */}
          </Row>
        ))}
      </Form>
    </div>
  );
}

const TestForm = Form.create()(Test);

export default TestForm;
