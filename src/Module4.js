import React, { Component } from 'react';
import './Module.scss';
import Media from './Media';
import LTI from './LTI';
import { Tabs, Carousel, Collapse, Modal, Button, Drawer } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import img1 from './img/Public_key_cryptography.png';
import img2 from './img/shutterstock_224607571.jpg';
import img3 from './img/shutterstock_96914246.jpg';


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
      <div className={this.state.module} id="module4">
        <div className="nav-arrows">
          <div className="fa-icon nav nav-right" onClick={this.nextPage}><FontAwesomeIcon icon="angle-right"  /></div>
          <div className="fa-icon nav nav-left" id="nav-left" onClick={this.prevPage}><FontAwesomeIcon icon="angle-left" /></div>
        </div>
    	  
        <div className="module-content" id="reading">
    		  <h3>3.4 The Diffie-Hellman Key Exchange Algorithm</h3>
          <div className="ease-intro">
          <p>Watch this video to learn how the Diffie-Hellman Key Exchange algorithm is used to establish an encryption key between two parties that have not interacted before.</p>
          <iframe className="vid-embed" width="560" src="https://www.youtube.com/embed/YEBfamv-_do" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>

          </div>          
        </div>
      </div>
    )
  }
}

export default Module; // Don’t forget to use export default!

