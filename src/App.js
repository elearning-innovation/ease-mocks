import React, { Component } from 'react';
import { Drawer, Modal, Button } from 'antd';
import "antd/dist/antd.css";
import Dashboard from './Dashboard';
import Module from './Module';
import Media from './Media';
import LTI from './LTI';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faAngleRight, faCheckSquare, faFileUpload, faPlayCircle, faCloud, faPencilRuler, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';
import earth from './earth.jpg';
import ecosystem from './ecosystem.jpg';
import animal from './animal.jpg';

library.add(faTachometerAlt, faAngleRight, faCheckSquare, faFileUpload, faPlayCircle, faCloud, faPencilRuler, faArrowLeft)

class App extends Component {

  state = { 
    drawer1visible: false, 
    drawer2visible: false, 
    drawer3visible: false, 
    modal1visible: false, 
    modal2visible: false, 
    modal3visible: false, 
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
    this.setState({
      drawer3visible: true,
    });
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
            <h1>My Special Learning Path</h1>
            <div className="ease-controls">
              <div className="fa-icon"><FontAwesomeIcon icon="tachometer-alt" onClick={this.showDrawer1} /></div>
            </div>
          </div>
        </div>
      
        <div className="ease-content">
          <h2>Course Overview</h2>
          <div className="ease-card">
            <h3>Learning Objectives</h3>
            <ul class="fa-ul">
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Analyze a simple model of production and firm demand to determine the profit-maximizing price-quantity-quality combination</li>
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Extend the profit maximization model to encompass other objectives of some healthcare producers</li>
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Consider the efficiency of the profit maximization model and the profit-maximizing price-quantity-quality combination</li>
              <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Contrast outcomes for a competitive market with outcomes of a market with few buyers or few sellers</li>
            </ul>
          </div>

          <div className="ease-intro">
            <h3>Course Introduction</h3>
            <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.</p>
          </div>

          <div className="ease-modules">
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={earth} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>New Module With Very Long and Complicated Title for this Page</h4>
              </div>
              <div className="ease-status status100"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={ecosystem} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>New Module 2</h4>
              </div>
              <div className="ease-status status75"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <img src={animal} className="respnsive-image" />
              <div className="ease-module-text">
              <h4>New Module 3</h4>
              </div>
              <div className="ease-status status100"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <div className="ease-module-text">
                <h4>New Module 4</h4>
              </div>
              <div className="ease-status status25"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <div className="ease-module-text">
                <h4>New Module 5</h4>
              </div>
              <div className="ease-status status25"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <div className="ease-module-text">
                <h4>New Module 6</h4>
              </div>
              <div className="ease-status"></div>
            </div>
            
            <div className="ease-module large-module" onClick={this.showDrawer2}>
              <img src={ecosystem} className="respnsive-image" />
              <div className="ease-module-text">
                <h4>New Module 6</h4>
              </div>
              <div className="ease-status"></div>
            </div>
            
            <div className="ease-module" onClick={this.showDrawer2}>
              <div className="ease-module-text">
                <h4>New Module 4</h4>
              </div>
              <div className="ease-status"></div>
            </div>
          </div>

          <Drawer
            placement="bottom"
            closable={true}
            title="New Module"
            onClose={this.onClose2}
            visible={this.state.drawer2visible}
            className="ease-drawer2"
            mask={false}
          >
            <FontAwesomeIcon icon="bars" className="menu-icon" onClick={this.showDrawer3} />
            <Module />

            <Drawer
              placement="left"
              closable={true}
              width={200}
              onClose={this.onClose3}
              visible={this.state.drawer3visible}
              className="ease-drawer3"
              mask={false}
            >
              <FontAwesomeIcon icon="arrow-left" onClick={this.onClose3} />
              <ul>
                <li>Module Overview</li>
                <li>Module Page 1</li>
                <li>Module Page 2</li>
                <li>Module Page 3</li>
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
