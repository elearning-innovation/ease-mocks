import React, { Component } from 'react';
import { Drawer, Modal, Button, Tooltip } from 'antd';
import "antd/dist/antd.css";
import Dashboard from './Dashboard';
import Module1 from './Module1';
import Media from './Media';
import LTI from './LTI';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faAngleRight, faCheckSquare, faFileUpload, faPlayCircle, faCloud, faPencilRuler, faArrowLeft, faWindowMinimize, faWindowMaximize, faListAlt } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';
import module1 from './img/shutterstock_783058903-360.jpg';
import module2 from './img/shutterstock_731631664-360px.jpg';
import module3 from './img/shutterstock_573530671-small.jpg';
import module4 from './img/shutterstock_429812950-360px.jpg';
import module5 from './img/shutterstock_307370969-360px.jpg';
import module6 from './img/857499small.jpg';

library.add(faTachometerAlt, faAngleRight, faCheckSquare, faFileUpload, faPlayCircle, faCloud, faPencilRuler, faArrowLeft, faWindowMinimize, faWindowMaximize, faListAlt)

class App extends Component {

  state = { 
    drawer1visible: false, 
    drawer2visible: false, 
    drawer3visible: false, 
    modal1visible: false, 
    modal2visible: false, 
    modal3visible: false, 
    objectives: false,
  }

  showDrawer1 = () => {
    this.setState({
      drawer1visible: true,
    });
  }

  showDrawer2 = () => {
    this.setState({
      drawer2visible: true,
    });
  }
   
  showDrawer3 = () => {
    var element1=document.getElementsByClassName("module");
    element1[0].classList.add("nav-open");
    var element2=document.getElementsByClassName("nav-left");
    element2[0].classList.add("nav-open");
    var element3=document.getElementsByClassName("ant-drawer-title");
    element3[0].classList.add("nav-open");
    var element4=document.getElementsByClassName("ant-drawer");
    element4[0].classList.add("nav-open");


    this.setState({
      drawer3visible: true,
    });
  }


  shrinkModule = () => {
    var element1=document.getElementsByClassName("ant-drawer");
    var growicon=document.getElementsByClassName("max-icon");
    var shrinkicon=document.getElementsByClassName("min-icon");
    var menucontrol=document.getElementById("menu-control");
    element1[0].classList.add("shrink");
    shrinkicon[0].classList.add("hideme");
    menucontrol.classList.add("hideme");
    growicon[0].classList.add("showme");
    document.getElementsByTagName("BODY")[0].classList.add("allowOverflow");
  }
  growModule = () => {
    var element1=document.getElementsByClassName("ant-drawer");
    var shrinkicon=document.getElementsByClassName("min-icon");
    var growicon=document.getElementsByClassName("max-icon");
    var menucontrol=document.getElementById("menu-control");
    element1[0].classList.remove("shrink");
    shrinkicon[0].classList.remove("hideme");
    menucontrol.classList.remove("hideme");
    growicon[0].classList.remove("showme");
    document.getElementsByTagName("BODY")[0].classList.remove("allowOverflow");
  }

  showObjectives = () => {
    if(this.state.objectives){
      var objectives=document.getElementsByClassName("ease-right");
      objectives[0].classList.remove("showme");
      this.setState({
        objectives: false,
      });
    }else{
      var objectives=document.getElementsByClassName("ease-right");
      objectives[0].classList.add("showme");
      this.setState({
        objectives: true,
      });
    }
  }



  showModal1 = () => {
    this.setState({
      modal1visible: true,
    });
  }
  
  showModal2 = () => {
    this.setState({
      modal2visible: true,
    });
  }

  showModal3 = () => {
    this.setState({
      modal3visible: true,
    });
  }

  onClose1 = () => {
    this.setState({
      drawer1visible: false,
    });
  };
  
  onClose2 = () => {
    this.setState({
      drawer2visible: false,
      drawer3visible: false,
    });
  };
  
  onClose3 = () => {
    this.setState({
      drawer3visible: false,
    });
    var element1=document.getElementsByClassName("module");
    element1[0].classList.remove("nav-open");
    var element2=document.getElementsByClassName("nav-left");
    element2[0].classList.remove("nav-open");
    var element3=document.getElementsByClassName("ant-drawer-title");
    element3[0].classList.remove("nav-open");
    var element4=document.getElementsByClassName("ant-drawer");
    element4[0].classList.remove("nav-open");

  };

  handleCancel1 = (e) => {
    this.setState({
      modal1visible: false,
    });
  }
  
  handleCancel2 = (e) => {
    this.setState({
      modal2visible: false,
    });
  }
  
  handleCancel3 = (e) => {
    this.setState({
      modal3visible: false,
    });
  }

  render() {
    return (
      <div className="ease-app">
        
        <div className="ease-header">
          <div className="ease-header-content">
            <h1>Welcome to Cryptography</h1>
            <div className="ease-controls">
              <div className="fa-icon"><Tooltip placement="bottom" title="Course Dashboard"><FontAwesomeIcon icon="tachometer-alt" onClick={this.showDrawer1} /></Tooltip></div>
            </div>
          </div>
        </div>
      
        <div className="ease-content">
          <h2>Course Overview</h2>
          <div className="ease-card">
            <h3>Course Outcomes</h3>
            <ul class="fa-ul">
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Identify the major uses of cryptography for maintaining the confidentiality, integrity and availability of data both at rest and in flight</li>
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Describe how digital signatures and PKI are used to validate the source and integrity of information</li>
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Analyze the conflict between data privacy and organizational security as presented by the use of encryption</li>
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Solve decryption problems using a variety of keys.</li>
            </ul>
          </div>

          <div className="ease-intro">
            <h3>Course Description</h3>
            <p>Cryptography plays a vital role in the implementation of confidentiality and integrity in an overall security strategy. As a professional you must be able to explain several types of encryption, how they work, and given a scenario, determine the appropriate method and algorithm to meet the security need. Most technology systems use crypto in one form or another and explaining how these tools utilize the capability and its fit for purpose in an enterprise is key to a successful security program. Professionals also need to describe how cryptography can be utilized to support privacy issues and to ensure trust and how to apply it in the field.</p>
            <p>“When cryptography is outlawed, bayl bhgynjf jvyy unir cevinpl.”<br /> John Perry Barlow </p>
          </div>
        </div>
        <div className="ease-modules">
            <div className="ease-module-grid">

            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={module1} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>Topic 1: Symmetric Encryption</h4>
              </div>
              <div className="ease-status status100"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={module2} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>Topic 2: One-Time Pads</h4>
              </div>
              <div className="ease-status status75"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={module3} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>Topic 3: Asymmetric Encryption</h4>
              </div>
              <div className="ease-status status100"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={module4} className="respnsive-image" />
              <div className="ease-module-text">
                <h4>Topic 4: Encryption in Use</h4>
              </div>
              <div className="ease-status status25"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={module5} className="respnsive-image" />
              <div className="ease-module-text">
                <h4>Topic 5: Common Uses of Encryption</h4>
              </div>
              <div className="ease-status status25"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={module6} className="respnsive-image" />
              <div className="ease-module-text">
                <h4>Bonus: Hacking Lab</h4>
              </div>
              <div className="ease-status"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <div className="ease-module-text">
                <h4>Test</h4>
              </div>
              <div className="ease-status"></div>
            </div>
            
            </div>
          <Drawer
            placement="bottom"
            closable={true}
            title="Topic 3: Asymmetric Encryption"
            onClose={this.onClose2}
            visible={this.state.drawer2visible}
            className="ease-drawer2"
            mask={true}
          >
            <Tooltip placement="right" title="Module Contents"><FontAwesomeIcon icon="bars" className="menu-icon" id="menu-control" onClick={this.showDrawer3} /></Tooltip>
            <Tooltip placement="right" title="Shrink Module"><FontAwesomeIcon icon="window-minimize"  className="min-icon" onClick={this.shrinkModule} /></Tooltip>
            <FontAwesomeIcon icon="window-maximize"  className="max-icon" onClick={this.growModule} />
            <Tooltip placement="right" title="Show/Hide Learning Objectives"><FontAwesomeIcon icon="list-alt"  className="lo-icon" onClick={this.showObjectives} /></Tooltip>
            <Module1 />

            <Drawer
              placement="left"
              closable={false}
              width={200}
              onClose={this.onClose3}
              visible={this.state.drawer3visible}
              className="ease-drawer3"
              mask={false}
            >
              <FontAwesomeIcon icon="times" onClick={this.onClose3} />
              <h3>Module Contents</h3>
              <ul>
                <li>3.1 Topic Overview</li>
                <li>3.2 Introduction to Asymmetric Encryption</li>
                <li>3.3 The Asymmetric Solution</li>
                <li>3.4 The Diffie-Hellman Key Exchange Algorithm</li>
                <li>3.5 Vulnerabilites</li>
                <li>3.6 Learning Lab</li>
                <li>3.7 Knowledge Check</li>
              </ul>
            </Drawer>
          </Drawer>

          <Modal
            title="Media"
            footer={null}
            visible={this.state.modal2visible}
            className="ease-module-modal2"
            onCancel={this.handleCancel2}
          >
            <Media />
          </Modal>
        
          <Modal
            title="LTI"
            footer={null}
            visible={this.state.modal3visible}
            className="ease-module-modal2"
            onCancel={this.handleCancel3}
          >
            <LTI />
          </Modal>

          <Drawer
            title="Dashboard for Course"
            placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.drawer1visible}
            className="ease-drawer"
          >
            <Dashboard />
          </Drawer>
        </div>
      </div>
    );
  }
}

export default App;
