import React, { Component } from 'react';
import logo from './logo.svg';
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
import earth from './earth.jpg';
import ecosystem from './ecosystem.jpg';
import animal from './animal.jpg';

library.add(faTachometerAlt, faAngleRight, faCheckSquare, faFileUpload, faPlayCircle, faCloud, faPencilRuler, faArrowLeft)

class App extends Component {

 state = { 
  drawer1visible: false, 
  drawer2visible: false, 
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
            <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Analyze healthcare product markets where firms have substantial market power through knowledge of factors that permit firms to amass this power</li>
            <li><span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Predict outcomes for consolidated healthcare markets</li>
          </ul>
        </div>
        <div className="ease-intro">
          <h3>Course Introduction</h3>
            <p>In theory, maximizing the difference between the value of the health services produced and the cost of producing them will improve efficiency for the provider and for the health system. Profit is the difference between revenue and cost.  Although many health services providers are not-for-profit organizations, they still must attend to revenues and costs.  In addition to discussing the goals that you optimize as a manager, we will consider the objectives that other healthcare organizations appear to be optimizing and what this means for health policy goals.</p>
            <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="check-square" /></div> 
            <div className="ease-activity-info">
              <span>10 pts</span>
              <span>4 questions</span>
              <span>Umlimited attempts</span>
              <span>0 attempts taken</span>
            </div>
            <h4>Survey</h4>
            <p>Take this survey to help us understand how you best learn</p>
            <button>Start</button>
          </div>
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="pencil-ruler" /></div> 
            <div className="ease-activity-info">
              <span>10 pts</span>
              <span>3 questions</span>
              <span>Umlimited attempts</span>
              <span>0 attempts taken</span>
              <span>High Score Method</span>
            </div>
            <h4>Quiz</h4>
            <p>Take a moment to answer the following questions. Try to work it out before clicking on the "Answer" tab.</p>
            <button>Start</button>
          </div>
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="play-circle" /></div> 
            <h4>Media</h4>
            <p>Welcome to your first day on the job! In this activity, you will learn about common roles within a corporate security team and typical responsibilities of each role.</p>
            <button onClick={this.showModal2}>Open</button>
          </div>
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="cloud" /></div> 
            <div className="ease-activity-info">
              <span>10 pts</span>
            </div>
            <h4>LTI</h4>
            <p>In this learning lab you will use the social engineering toolkit to create a fake website on your test station for Google or Twitter, and test it to capture a login.</p>
            <p>The lab environment will open in a new tab. Click OK [in the dialogue box] and follow the prompts to complete each task.</p>
            <button  onClick={this.showModal3}>Open</button>
          </div>
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="file-upload" /></div> 
            <div className="ease-activity-info">
              <span>100 pts</span>
              <span>Umlimited attempts</span>
              <span>0 attempts taken</span>
              <span>High Score Method</span>
            </div>
            <h4>File Upload</h4>
            <p>Upload your assignment here.</p>
            <button>Submit</button>
          </div>
        </div>
        <div className="ease-modules">
          <div className="ease-module" onClick={this.showDrawer2}>
            <img src={earth} className="respnsive-image" />
            <div className="ease-module-text">
            <h4>New Module With Very Long and Complicated Title for this Page</h4>
            </div>
            <div className="ease-status"></div>
          </div>
          <div className="ease-module" onClick={this.showDrawer2}>
            <img src={ecosystem} className="respnsive-image" />
            <div className="ease-module-text">
            <h4>New Module 2</h4>
            </div>
            <div className="ease-status"></div>
          </div>
          <div className="ease-module" onClick={this.showDrawer2}>
            <img src={animal} className="respnsive-image" />
            <div className="ease-module-text">
            <h4>New Module 3</h4>
            </div>
            <div className="ease-status"></div>
          </div>
          <div className="ease-module" onClick={this.showDrawer2}>
            <div className="ease-module-text">
            <h4>New Module 4</h4>
            </div>
            <div className="ease-status"></div>
          </div>
          <div className="ease-module" onClick={this.showDrawer2}>
            <div className="ease-module-text">
            <h4>New Module 5</h4>
            </div>
            <div className="ease-status"></div>
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
