import { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Col,
  Row
} from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App = () => {
  const [form] = Form.useForm();
  const [dates, setDates] = useState(null);
  const [hackValue, setHackValue] = useState(null);
  const [value, setValue] = useState(null);

  

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
        return;
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };



  return (
    <Row>
      <Col
        span={24}
      >
        <div style={{
          marginTop: "40px",
          marginRight: '250px'
        }}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#001529",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "300px"
            }}
          >
            A form with ant design and reactJS example
          </h1>
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
              name="note"
              label="Note"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="todo"
              label="Todo"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="input placeholder"
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="date-picker"
              label="DatePicker"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <RangePicker
                value={hackValue || value}
                onCalendarChange={(val) => setDates(val)}
                onChange={(val) => setValue(val)}
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default App;