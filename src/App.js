import React, { Component } from 'react';
import { Drawer, Modal, Button, Tooltip, Form, Input, Checkbox, Upload, Icon, Radio } from 'antd';
import "antd/dist/antd.css";
import Dashboard from './Dashboard';
import Module1 from './Module1';
import Media from './Media';
import Styles from './Styles';
import LTI from './LTI';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faAngleRight, faFileUpload, faPlayCircle, faCloud, faPencilRuler, faArrowLeft, faWindowMinimize, faWindowMaximize, faListAlt, faPaintBrush, faGripHorizontal, faGripVertical, faTrashAlt, faPlus, faPencilAlt, faImage, faVideo, faVolumeUp, faCheckSquare, faCommentAlt, faLayerGroup, faCog} from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';
import module1 from './img/shutterstock_783058903-360.jpg';
import module2 from './img/shutterstock_731631664-360px.jpg';
import module3 from './img/shutterstock_573530671-small.jpg';
import module4 from './img/shutterstock_429812950-360px.jpg';
import module5 from './img/shutterstock_307370969-360px.jpg';
import module6 from './img/857499small.jpg';
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable
} from 'react-reorder';


library.add(faTachometerAlt, faAngleRight, faFileUpload, faPlayCircle, faCloud, faPencilRuler, faArrowLeft, faWindowMinimize, faWindowMaximize, faListAlt, faPaintBrush, faGripHorizontal, faGripVertical, faTrashAlt, faPlus, faPencilAlt, faImage, faVideo, faVolumeUp, faCheckSquare, faCommentAlt, faLayerGroup, faCog)

const Dragger = Upload.Dragger;


class App extends Component {

  state = { 
    dashboardvisible: false, 
    modulevisible: false, 
    modulesettingsvisible: false, 
    moduleimagevisible: false, 
    mediavisible: false, 
    stylesvisible: false, 
    objectives: "start",
    grid:1,
  }

  showDashboard = () => {
    this.setState({
      dashboardvisible: true,
    });
  }

  showModule = () => {
    this.setState({
      modulevisible: true,
    });
  }
   
  showModuleSettings = (e) => {
e.stopPropagation();
    this.setState({
      modulesettingsvisible: true,

    });
  }

  showModuleImage = (e) => {
e.stopPropagation();
    this.setState({
      moduleimagevisible: true,

    });
  }

  changeGrid = () => {
    if(this.state.grid == 1){
    var element1=document.getElementsByClassName("ease-module-grid");
    element1[0].classList.add("large-grid");
    element1[0].classList.remove("small-grid");
    this.setState({
      grid: 3,
    });
    }
    if(this.state.grid == 3){
    var element1=document.getElementsByClassName("ease-module-grid");
    element1[0].classList.add("small-grid");
    element1[0].classList.remove("large-grid");
    this.setState({
      grid: 2,
    });
    }
    if(this.state.grid == 2){
    var element1=document.getElementsByClassName("ease-module-grid");
    element1[0].classList.remove("small-grid");
    element1[0].classList.remove("large-grid");
    this.setState({
      grid: 1,
    });
    }
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
    if(this.state.objectives == "start"){
      var objectives=document.getElementsByClassName("learning-objectives");
      var objectives2=document.getElementsByClassName("learning-objectives2");
      objectives[0].classList.add("showme");
      objectives2[0].classList.remove("showme");
      this.setState({
        objectives: false,
      });
    }else if(this.state.objectives){
      var objectives2=document.getElementsByClassName("learning-objectives2");
      objectives2[0].classList.remove("showme");
      this.setState({
        objectives: false,
      });
    }else{
      var objectives2=document.getElementsByClassName("learning-objectives2");
      objectives2[0].classList.add("showme");
      this.setState({
        objectives: true,
      });
    }
  }

  showStyles = () => {
    this.setState({
      stylesvisible: true,
    });
  }

  onClose1 = () => {
    this.setState({
      dashboardvisible: false,
    });
  };
  
  onClose2 = () => {
    this.setState({
      modulevisible: false,
    });
  };
    
  onClose3 = () => {
    this.setState({
      modulesettingsvisible: false,
    });
  };
  onClose4 = () => {
    this.setState({
      moduleimagevisible: false,
    });
  };


  handleCancel4 = (e) => {
    this.setState({
      stylesvisible: false,
    });
  }



  render() {
    return (
      <div className="ease-app">
        
        <div className="ease-header">
          <div className="ease-header-content">
            <h1>Welcome to Cryptography</h1>
            <div className="ease-controls">
              <div className="fa-icon"><Tooltip placement="bottom" title="Course Dashboard"><FontAwesomeIcon icon="tachometer-alt" onClick={this.showDashboard} /></Tooltip></div>
              <div className="fa-icon"><Tooltip placement="bottom" title="Customize Styles"><FontAwesomeIcon icon="paint-brush" onClick={this.showStyles} /></Tooltip></div>
            </div>
          </div>
        </div>
      
        <div className="ease-content">
          <h2 className="inline-edit" tabindex="1"><span>Course Overview</span> <input type="text" value="Course Overview" /></h2>
          <div className="ease-card">
            <h3>Course Outcomes</h3>
            <Reorder reorderId="my-list" component="ul" className="fa-ul" lock="horizontal">
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Identify the major uses of cryptography for maintaining the confidentiality, integrity and availability of data both at rest and in flight 
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Describe how digital signatures and PKI are used to validate the source and integrity of information 
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Analyze the conflict between data privacy and organizational security as presented by the use of encryption 
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Solve decryption problems using a variety of keys. 
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <div className="add-menu">
                <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
              </div>
            </Reorder>



          </div>

          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group" /></Tooltip></span>
              </div>
            </div>
          </div>

          <div className="ease-intro">
          <h3 className="inline-edit" tabindex="1"><span>Course Description</span> <input type="text" value="Course Description" /></h3>
            <div className="pageel textel">
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <p>Cryptography plays a vital role in the implementation of confidentiality and integrity in an overall security strategy. As a professional you must be able to explain several types of encryption, how they work, and given a scenario, determine the appropriate method and algorithm to meet the security need. Most technology systems use crypto in one form or another and explaining how these tools utilize the capability and its fit for purpose in an enterprise is key to a successful security program. Professionals also need to describe how cryptography can be utilized to support privacy issues and to ensure trust and how to apply it in the field.</p>
              <p>“When cryptography is outlawed, bayl bhgynjf jvyy unir cevinpl.”<br /> John Perry Barlow </p>
              <div className="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Edit Layout"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
              </div>
            </div>
          </div>
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group" /></Tooltip></span>
              </div>
            </div>
          </div>

        </div>
        <div className="ease-modules">
              <FontAwesomeIcon icon="grip-horizontal" className="grid-icon" onClick={this.changeGrid} />
            
            <Reorder reorderId="module-list" holdTime={200} component="div" className="ease-module-grid" lock="">
            <div className="ease-module" onClick={this.showModule}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <img src={module1} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>Topic 1: Symmetric Encryption</h4>
              </div>
              <div className="ease-status status100"></div>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Change Image"><FontAwesomeIcon icon="image" onClick={this.showModuleImage} /></Tooltip></span>
                <span><Tooltip placement="top" title="Module Setting"><FontAwesomeIcon icon="cog" onClick={this.showModuleSettings} /></Tooltip></span>
              </div>
            </div>
            
            <div className="ease-module" onClick={this.showModule}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <img src={module2} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>Topic 2: One-Time Pads</h4>
              </div>
              <div className="ease-status status75"></div>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Change Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Module Setting"><FontAwesomeIcon icon="cog" /></Tooltip></span>
              </div>
            </div>
            
            <div className="ease-module" onClick={this.showModule}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <img src={module3} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>Topic 3: Asymmetric Encryption</h4>
              </div>
              <div className="ease-status status100"></div>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Change Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Module Setting"><FontAwesomeIcon icon="cog" /></Tooltip></span>
              </div>
            </div>
            
            <div className="ease-module" onClick={this.showModule}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <img src={module4} className="respnsive-image" />
              <div className="ease-module-text">
                <h4>Topic 4: Encryption in Use</h4>
              </div>
              <div className="ease-status status25"></div>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Change Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Module Setting"><FontAwesomeIcon icon="cog" /></Tooltip></span>
              </div>
            </div>
            
            <div className="ease-module" onClick={this.showModule}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <img src={module5} className="respnsive-image" />
              <div className="ease-module-text">
                <h4>Topic 5: Common Uses of Encryption</h4>
              </div>
              <div className="ease-status status25"></div>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Change Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Module Setting"><FontAwesomeIcon icon="cog" /></Tooltip></span>
              </div>
            </div>
            
            <div className="ease-module" onClick={this.showModule}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <img src={module6} className="respnsive-image" />
              <div className="ease-module-text">
                <h4>Bonus: Hacking Lab</h4>
              </div>
              <div className="ease-status"></div>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Change Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Module Setting"><FontAwesomeIcon icon="cog" /></Tooltip></span>
              </div>
            </div>
            
            <div className="ease-module" onClick={this.showModule}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <div className="ease-module-text">
                <h4>Test</h4>
              </div>
              <div className="ease-status"></div>
              <div class="edit-menu horizontal">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Change Image"><FontAwesomeIcon icon="image" /></Tooltip></span>
                <span><Tooltip placement="top" title="Module Setting"><FontAwesomeIcon icon="cog" /></Tooltip></span>
              </div>
            </div>
            <div className="ease-module add-module" onClick={this.showModule}>
              <div className="ease-module-text">
                <h4><FontAwesomeIcon icon="plus" /> Add Module</h4>
              </div>
            </div>
            
            </Reorder>

          <Drawer
            placement="bottom"
            closable={true}
            title="Topic 3: Asymmetric Encryption"
            onClose={this.onClose2}
            visible={this.state.modulevisible}
            className="ease-drawer2"
            mask={true}
          >
            <Tooltip placement="right" title="Shrink Module"><FontAwesomeIcon icon="window-minimize"  className="min-icon" onClick={this.shrinkModule} /></Tooltip>
            <FontAwesomeIcon icon="window-maximize"  className="max-icon" onClick={this.growModule} />
            <Tooltip placement="right" title="Show/Hide Learning Objectives"><FontAwesomeIcon icon="list-alt"  className="lo-icon" onClick={this.showObjectives} /></Tooltip>
            <Module1 />
          </Drawer>

          <Modal
            title="Customize Styles"
            visible={this.state.stylesvisible}
            closable={true}
            okText="Save"
            className="ease-styles"
            onCancel={this.handleCancel4}
          >
            <Styles />
          </Modal>

          <Modal
            title="Module Settings"
            visible={this.state.modulesettingsvisible}
            closable={true}
            okText="Save"
            className="ease-styles"
            onCancel={this.onClose3}
          >
          <h3>Layout Options</h3>

            <Form.Item label="Module Panel Size" colon={false}>
              <Radio.Group onChange={this.onChange} value={2}>
                <Radio value={1}>Small</Radio>
                <Radio value={2}>Medium</Radio>
                <Radio value={3}>Large</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="" colon={false}>
                <Checkbox>Apply this Size to All Modules</Checkbox>
            </Form.Item>
            <br />
          
          <h3>Completion Requirements</h3>
          Select the requirements for module completion
          <Form>

          <div className="modreq">
            <Form.Item label="" colon={false}>
              <Checkbox>Require all pages to have been read for completion.</Checkbox>
            </Form.Item>
          </div>
          <div className="modreq">
            <Form.Item label="Special Quiz" colon={false}>
              Learning must receive a score of <input />
            </Form.Item>
          </div>
          </Form>
          <Button>Add Requirement</Button>

          </Modal>

          <Modal
            title="Module Image"
            visible={this.state.moduleimagevisible}
            closable={true}
            okText="Save"
            className="ease-styles"
            onCancel={this.onClose4}
          >

            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                You may provide a .bmp, .gif, .jpg, or .png image to upload.
              </p>
            </Dragger>


          </Modal>


          <Drawer
            title="Dashboard for Course"
            placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.dashboardvisible}
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
