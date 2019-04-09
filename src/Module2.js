import React, { Component } from 'react';
import './Module.scss';
import Media from './Media';
import LTI from './LTI';
import { Tabs, Carousel, Collapse, Modal, Button, Drawer } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import img1 from './img/asym-encryption.png';


library.add(faAngleLeft, faAngleRight, faBars, faTimes)

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
    modal1visible: false, 
    modal2visible: false, 
    modal3visible: false, 
    drawervisible: false, 
    activity: "hide-activity", 
    activityContainer: "", 
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
  
  showActivity = () => {
    this.setState({
      activity: "show-activity",
      activityContainer: "wide-activity",
    });
  }
  hideActivity = () => {
    this.setState({
      activity: "hide-activity",
      activityContainer: "",
    });
  }

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
      <div className={this.state.module} id="module2">
        <div className="nav-arrows">
          <div className="fa-icon nav nav-right" onClick={this.nextPage}><FontAwesomeIcon icon="angle-right"  /></div>
          <div className="fa-icon nav nav-left" id="nav-left" onClick={this.prevPage}><FontAwesomeIcon icon="angle-left" /></div>
        </div>
    	  
        <div className="module-content" id="reading">
    		  <h3>3.2 Introduction to Asymmetric Encryption</h3>
          <div className="ease-intro">
          <p>Symmetric encryption solves the need for secrecy, but with risks when sharing passwords and passphrases. Asymmetric solves this kind of problem with keypairs. Please watch this video to see how asymmetric encryption works, and why it is an improvement.</p>
          <iframe className="vid-embed" width="560" src="https://www.youtube.com/embed/AQDCe585Lnc" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>

          </div>          
        </div>
      </div>
    )
  }
}

export default Module; // Don’t forget to use export default!

