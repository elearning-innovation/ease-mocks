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
      <div className={this.state.module} id="module3">
        <div className="nav-arrows">
          <div className="fa-icon nav nav-right" onClick={this.nextPage}><FontAwesomeIcon icon="angle-right"  /></div>
          <div className="fa-icon nav nav-left" id="nav-left" onClick={this.prevPage}><FontAwesomeIcon icon="angle-left" /></div>
        </div>
    	  
        <div className="module-content" id="reading">
    		  <h3>3.3 The Asymmetric Solution</h3>
          <div className="ease-intro">
          <p>So far we have seen that sharing keys is the biggest weakness in creating an impenetrable tube.</p>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="The Problem" key="1">
              <p>So far we have seen that sharing keys is the biggest weakness in creating an impenetrable tube. Asymmetrical Encryption does away with the problem of exchanging and storing secret keys, because both sender and receiver use the same set of keys and all keys come in pairs. What one key encrypts, only the other can decrypt. This is one of most common methods of sending encrypted information between two people today on the internet.</p>
              <img src={img1} />
            </TabPane>
            <TabPane tab="How it Works" key="2">
              <p>Each user creates two keys. One key is a private key which is kept secret, and the other is a public key which can be shared with anyone.</p> 
              <ul>
                <li>If Bob wants to send Alice a private message, he encrypts the message using her publicly available public key.</li>
                <li>Only Alice, the owner of the private key, can decrypt it.</li>
                <li>When Alice responds, she encrypts the message with Bob’s public key.</li>
                <li>Bob decrypts it using his private key that only he has access too.</li>
              </ul>
              <p>The public key is not a secret. We can exchange public keys because we know they are only useful for encrypting messages to the owner of the public key.</p>
              <img src={img2} />
          <div className="ease-card">
            <h3>Remember</h3>
            <p>We never have to meet to exchange a secret key or worry about it being discovered.</p>
          </div>
            </TabPane>
            <TabPane tab="Key Pairs" key="3">
              <p>We do, however, have to really keep our secret keys VERY safe. These two keys are generated together and are call key pairs and the important thing to remember is that your public key can be out in the open so other people have the ability to send you messages, while your private key must always be kept private so that other people cannot decrypt it.</p>
              <p>When key pairs are generated, an expiration date is typically added on the public key, but never the private key. When the expiration date expires, it is no longer valid and a new key pair should be issued. If a private key is compromised or your network is hacked, it is advisable to revoke keys that may be compromised. When a public key is revoked, other users are informed that they cannot use that public key to send you encrypted messages and that they should look to obtain your newly issued public key.</p>
              <img src={img3} />
            </TabPane>
          </Tabs>

          </div>          
        </div>
      </div>
    )
  }
}

export default Module; // Don’t forget to use export default!

