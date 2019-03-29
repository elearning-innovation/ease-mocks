import React, { Component } from 'react';
import './Module.scss';
import Media from './Media';
import { Tabs, Carousel, Collapse, Modal, Button, Drawer } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight, faBars)

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Module extends Component {

  state = { 
    modal2visible: false, 
    drawervisible: false, 
    activity: "hide-activity", 
    activityContainer: "", 
  }

  showModal2 = () => {
    this.setState({
      modal2visible: true,
    });
  }
  
  showActivity = () => {
    this.setState({
      activity: "show-activity",
      activityContainer: "wide-activity",
    });
  }
  
  handleCancel2 = (e) => {
    this.setState({
      modal2visible: false,
    });
  }

  showDrawer = () => {
    this.setState({
      drawervisible: true,
    });
  }
  
  onClose2 = () => {
    this.setState({
      drawervisible: false,
    });
  };
  
  nextPage = () => {
    var element=document.getElementById("reading");
    element.classList.add("page-animate");
    setTimeout(function() {
      element.classList.add("page-animate2");
    }, 250);
    setTimeout(function() {
      element.classList.remove("page-animate");
      element.classList.remove("page-animate2");
    }, 500);
  }

  render() {
    return(
      <div class="module">
        <div className="nav-arrows">
          <div className="fa-icon nav nav-right"><FontAwesomeIcon icon="angle-right" onClick={this.nextPage} /></div>
          <div className="fa-icon nav nav-left"><FontAwesomeIcon icon="angle-left" onClick={this.prevPage} /></div>
        </div>
    	  
        <div className="module-content" id="reading">
    		  <h3>Module Overview</h3>
          <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.  Although many health services providers are not-for-profit organizations, they still must attend to revenues and costs.  In addition to discussing the goals that you optimize as a manager, we will consider the objectives that other healthcare organizations appear to be optimizing and what this means for health policy goals.</p>
          <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>
          
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.  Although many health services providers are not-for-profit organizations, they still must attend to revenues and costs.  In addition to discussing the goals that you optimize as a manager, we will consider the objectives that other healthcare organizations appear to be optimizing and what this means for health policy goals.</p>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              <p>This is the third tab</p>
            </TabPane>
          </Tabs>

          <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.  Although many health services providers are not-for-profit organizations, they still must attend to revenues and costs.  In addition to discussing the goals that you optimize as a manager, we will consider the objectives that other healthcare organizations appear to be optimizing and what this means for health policy goals.</p>
          <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>

          <Carousel afterChange={onChange}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>

          <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.  Although many health services providers are not-for-profit organizations, they still must attend to revenues and costs.  In addition to discussing the goals that you optimize as a manager, we will consider the objectives that other healthcare organizations appear to be optimizing and what this means for health policy goals.</p>
          <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>

          <Collapse accordion>
            <Panel header="First Part" key="1">
              <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.  Although many health services providers are not-for-profit organizations, they still must attend to revenues and costs.  In addition to discussing the goals that you optimize as a manager, we will consider the objectives that other healthcare organizations appear to be optimizing and what this means for health policy goals.</p>
            </Panel>
            <Panel header="Second Part" key="2">
              <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>
            </Panel>
            <Panel header="Third part" key="3">
              <p>This is the third tab</p>
            </Panel>
          </Collapse>
          
          <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.  Although many health services providers are not-for-profit organizations, they still must attend to revenues and costs.  In addition to discussing the goals that you optimize as a manager, we will consider the objectives that other healthcare organizations appear to be optimizing and what this means for health policy goals.</p>
          <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>

          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="play-circle" /></div> 
            <h4>Media</h4>
            <p>Welcome to your first day on the job! In this activity, you will learn about common roles within a corporate security team and typical responsibilities of each role.</p>
            <button onClick={this.showModal2}>Open</button>
          </div>

          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="play-circle" /></div> 
            <h4>Media</h4>
            <p>Welcome to your first day on the job! In this activity, you will learn about common roles within a corporate security team and typical responsibilities of each role.</p>
            <button onClick={this.showActivity}>Open</button>
          </div>
          
          <div className={this.state.activity} ><Media /></div>

          <Modal
            title="Media"
            footer={null}
            visible={this.state.modal2visible}
            className="ease-module-modal2"
            onCancel={this.handleCancel2}
          >
            <Media />
          </Modal>
        </div>
      </div>
    )
  }
}

export default Module; // Don’t forget to use export default!

