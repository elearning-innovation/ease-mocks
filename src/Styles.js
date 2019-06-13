import React, { Component } from 'react';
import { Button, Form, Input, Row, Tabs, Select } from 'antd';
import './Styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight)

class Styles extends Component {
  render() {

const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
  };

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

    return(
      <div>

<p>Select a preset theme or edit the values below. To edit the CSS directly use the advanced tab.</p>
<Form {...formItemLayout} >
  <Form.Item label="Select Preset Theme" colon={false}>

<Select defaultValue="default" style={{ width: 120 }}>
      <Option value="custom">Custom</Option>
      <Option value="default">Default</Option>
      <Option value="blue">Blue</Option>
      <Option value="academic">Academic</Option>
    </Select>
    </Form.Item>
      </Form>
<br/><br/>
  <Tabs defaultActiveKey="1">
    <TabPane tab="Standard" key="1">

<Form {...formItemLayout} >
	<h3>Colors</h3>
	<Form.Item label="Heading Background Color" colon={false}>
       <Input  size="small" defaultValue="#fdb913" />
    </Form.Item>
	<Form.Item label="Primary Color" colon={false}>
       <Input  size="small" defaultValue="#388cb6" />
    </Form.Item>
	<Form.Item label="Secondary Color" colon={false}>
       <Input  size="small" defaultValue="#a9cfdf" />
    </Form.Item>
	<Form.Item label="Light Background Color" colon={false}>
       <Input  size="small" defaultValue="#F9F8F3" />
    </Form.Item>
	<Form.Item label="Dark Background Color" colon={false}>
       <Input  size="small" defaultValue="#262626" />
    </Form.Item>
	<Form.Item label="Text Color" colon={false}>
       <Input  size="small" defaultValue="#444444" />
    </Form.Item>

	<h3>Fonts</h3>
	<Form.Item label="Body Font" colon={false}>
       <Input  size="small" defaultValue="'Lora', serif" />
    </Form.Item>
	<Form.Item label="Heading Font" colon={false}>
       <Input  size="small" defaultValue="'Patua One', san-serif" />
    </Form.Item>
	<Form.Item label="San Serif Font" colon={false}>
       <Input  size="small" defaultValue="'Source Sans Pro', sans-serif;" />
    </Form.Item>
	<Form.Item label="Body Font Size" colon={false}>
       <Input  size="small" defaultValue="18px" />
    </Form.Item>
	<Form.Item label="Body Line Height" colon={false}>
       <Input  size="small" defaultValue="32px" />
    </Form.Item>
	<Form.Item label="Heading 1 Font Size" colon={false}>
       <Input  size="small" defaultValue="1.6rem" />
    </Form.Item>
	<Form.Item label="Heading 2 Font Size" colon={false}>
       <Input  size="small" defaultValue="1.4rem" />
    </Form.Item>
	<Form.Item label="Heading 3 Font Size" colon={false}>
       <Input  size="small" defaultValue="1.2rem" />
    </Form.Item>

	<h3>Other</h3>
	<Form.Item label="Reading Width" colon={false}>
       <Input  size="small" defaultValue="750px" />
    </Form.Item>
	<Form.Item label="Border Radius" colon={false}>
       <Input  size="small" defaultValue="8px" />
    </Form.Item>
	<Form.Item label="Element Spacing" colon={false}>
       <Input  size="small" defaultValue="30px" />
    </Form.Item>


      </Form>



    </TabPane>
    <TabPane tab="Advanced" key="2">

<TextArea rows={20} />
    </TabPane>
  </Tabs>


</div>
    )
  }
}

export default Styles; // Don’t forget to use export default!

