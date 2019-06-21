import React, { Component } from 'react';
import './Module.scss';
import Media from './Media';
import LTI from './LTI';
import { Tabs, Carousel, Collapse, Modal, Button, Drawer, Tooltip, Upload, Icon, Form, Input, Radio, Checkbox } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import img1 from './img/asym-encryption.png';

import img2 from './img/Public_key_cryptography.png';
import img3 from './img/shutterstock_224607571.jpg';
import img4 from './img/shutterstock_96914246.jpg';

import img5 from './img/GettyImages-857874124.jpg';
import img6 from './img/controls.png';
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable
} from 'react-reorder';

const Dragger = Upload.Dragger;


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
    modal4visible: false, 
    modal5visible: false, 
    modal6visible: false, 
    modal7visible: false, 
    modal8visible: false, 
    modal9visible: false, 
    drawervisible: false, 
    drawer3visible: false, 
    activity: "hide-activity", 
    activityContainer: "", 
    module: 2,
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
  
  showModal4 = () => {
    this.setState({
      modal4visible: true,
    });
  }
  showModal5 = () => {this.setState({modal5visible: true,});}
  showModal6 = () => {this.setState({modal6visible: true,});}
  showModal7 = () => {this.setState({modal7visible: true,});}
  showModal8 = () => {this.setState({modal8visible: true,});}
  showModal9 = () => {this.setState({modal9visible: true,});}

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

  handleCancel4 = (e) => {
    this.setState({
      modal4visible: false,
    });
  }
  handleCancel5 = (e) => {this.setState({modal5visible: false,});}
  handleCancel6 = (e) => {this.setState({modal6visible: false,});}
  handleCancel7 = (e) => {this.setState({modal7visible: false,});}
  handleCancel8 = (e) => {this.setState({modal8visible: false,});}
  handleCancel9 = (e) => {this.setState({modal9visible: false,});}


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
  
  showDrawer3 = () => {
    var element1=document.getElementsByClassName("module");
    element1[0].classList.add("nav-open");
    var element2=document.getElementsByClassName("nav-left");
    element2[0].classList.add("nav-open");
    var element3=document.getElementsByClassName("ant-drawer-title");
    element3[0].classList.add("nav-open");
    var element4=document.getElementsByClassName("ant-drawer");
    element4[0].classList.add("nav-open");
    var element5=document.getElementById("menu-control");
    element5.classList.add("hideme");


    this.setState({
      drawer3visible: true,
    });
  }

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
    var element5=document.getElementById("menu-control");
    element5.classList.remove("hideme");

  };


 toggleEdit = (event) => {
  console.log(event.target);
 }

  nextPage = (pagenum) => {
    console.log(pagenum)
    var element=document.getElementById("reading");
    if(pagenum>0){
      var newpage="page" + pagenum;
    }
    else{
      console.log("setting new page")
      var newpage="page" + this.state.module;
    }
    var curpage="page" + (this.state.module - 1);
    var hidepage=document.getElementById(curpage);
    var showpage=document.getElementById(newpage);
    var self=this;
    if(this.state.module != 9 || pagenum>0){
    element.classList.add("next-animate");
    console.log(this.state.module);
    setTimeout(function() {
    if(pagenum){
      self.setState((prevState, props) => ({
        module: pagenum+1
      })); 
    }
    else{
      self.setState((prevState, props) => ({
        module: prevState.module + 1
      })); 
    }
      showpage.classList.add("showpage");
      showpage.classList.remove("hidepage");
      hidepage.classList.add("hidepage");
      element.classList.add("next-animate2");
    }, 250);
    setTimeout(function() {
      element.classList.remove("next-animate");
      element.classList.remove("next-animate2");
    }, 500);
    console.log(this.state.module);

  }

  }


  prevPage = (pagenum) => {
    var element=document.getElementById("reading");
    var curpage="page" + (this.state.module-1);
    var hidepage=document.getElementById(curpage);
    var newpage="page" + (this.state.module-2);
    var showpage=document.getElementById(newpage);
    var self=this;
    if(this.state.module != 2){
    element.classList.add("prev-animate2");
    setTimeout(function() {
      self.setState((prevState, props) => ({
        module: prevState.module - 1
      }));  
      showpage.classList.add("showpage");
      showpage.classList.remove("hidepage");
      hidepage.classList.add("hidepage");
      element.classList.add("prev-animate");
    }, 250);
    setTimeout(function() {
      element.classList.remove("prev-animate2");
      element.classList.remove("prev-animate");
      showpage.classList.remove("hidepage");
    }, 500);
  }

  }



  render() {
    return(
      <div className="module" id="module1">
            <FontAwesomeIcon icon="bars" className="menu-icon" id="menu-control" onClick={this.showDrawer3} />

        <div className="nav-arrows">
          <div className="fa-icon nav nav-right" onClick={() => this.nextPage(0)}><Tooltip placement="left" title="Next Page"><FontAwesomeIcon icon="angle-right"  /></Tooltip></div>
          <div className="fa-icon nav nav-left"  onClick={this.prevPage}><Tooltip placement="right" title="Previous Page"><FontAwesomeIcon icon="angle-left" /></Tooltip></div>
        </div>
    	  
        <div id="reading">
              <div className="learning-objectives2">
                <h3>Learning Objectives</h3>
                <ul class="fa-ul">
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Explain the difference between Asymmetric Encryption and Symmetric Encryption
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Match two different scenarios where each is appropriate (generic, self-inferred)
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Explain how an attacker would obtain the secret keys to read a secret message
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              </ul>
              </div>

          <div className="module-content" id="page1">
    		    <h3 className="inline-edit" tabindex="1"><span>3.1 Topic Overview</span> <input type="text" value="3.1 Topic Overview" /></h3>
              <div className="learning-objectives">
                <h3>Learning Objectives</h3>
                <ul class="fa-ul">
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Explain the difference between Asymmetric Encryption and Symmetric Encryption
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Match two different scenarios where each is appropriate (generic, self-inferred)
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              <li className="pageel">
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <span class="fa-li" ><FontAwesomeIcon icon="angle-right" /></span>Explain how an attacker would obtain the secret keys to read a secret message
                <div className="edit-menu"><span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span></div>
              </li>
              </ul>
              </div>
            <div className="ease-intro">
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>
              <div className="pageel leftel" onClick={this.showModal4}>
                <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
                <img src={img1} className="leftimg" />
                <div class="edit-menu">
                  <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                </div>
              </div>
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>
              <div className="pageel textel" tabindex="0" onClick={this.toggleEdit}>
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <div class="controls"><img src={img6} /></div>
              <p>Asymmetric Encryption algorithms are used in secure web browsing using the https protocol, and also in creating digital signatures and digital certificates. Asymmetric Encryption, also known as Public Key Encryption, uses a pair of keys, one public and one private, to encrypt and decrypt data, respectively. In this section, we will outline the differences between Asymmetric and Symmetric Encryption, analyse two different scenarios and apply the appropriate encryption scheme to each, and describe how an attacker could compromise the private key in order to decrypt and read an encrypted message. </p>
              <p>Organizations with market power have more control over their destiny than organizations participating in a competitive market. We will also examine how market power is gained, used, and lost in health services markets.</p>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
              </div>
              </div>
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>
              <div className="pageel" tabindex="0">
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="The Problem" key="1">
                  <p>So far we have seen that sharing keys is the biggest weakness in creating an impenetrable tube. Asymmetrical Encryption does away with the problem of exchanging and storing secret keys, because both sender and receiver use the same set of keys and all keys come in pairs. What one key encrypts, only the other can decrypt. This is one of most common methods of sending encrypted information between two people today on the internet.</p>
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
                  <div className="ease-card">
                    <h3>Remember</h3>
                    <p>We never have to meet to exchange a secret key or worry about it being discovered.</p>
                  </div>
                </TabPane>
                <TabPane tab="Key Pairs" key="3">
                  <p>We do, however, have to really keep our secret keys VERY safe. These two keys are generated together and are call key pairs and the important thing to remember is that your public key can be out in the open so other people have the ability to send you messages, while your private key must always be kept private so that other people cannot decrypt it.</p>
                  <p>When key pairs are generated, an expiration date is typically added on the public key, but never the private key. When the expiration date expires, it is no longer valid and a new key pair should be issued. If a private key is compromised or your network is hacked, it is advisable to revoke keys that may be compromised. When a public key is revoked, other users are informed that they cannot use that public key to send you encrypted messages and that they should look to obtain your newly issued public key.</p>
                </TabPane>
              </Tabs>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Edit Layout"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
              </div>
              </div>
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>
              <div className="pageel">
              <div className="drag-menu"><FontAwesomeIcon icon="grip-vertical" className="icon-left" /></div>
            <div className="ease-activity">
              <div className="fa-icon-activity"><FontAwesomeIcon icon="cloud" /></div> 
              <div className="ease-activity-info">
                <span>10 pts</span>
              </div>
              <h4>Explore: Creating a One Time Pad</h4>
              <p>In this lab, you will explore generating a OTP sequence of random values and see what happens when a random number generator is not random at all. </p>
              <p>The lab environment will open in a modal window. Click OK [in the dialogue box] and follow the prompts to complete each task.</p>
              <button  onClick={this.showModal3}>Open</button>
            </div>
              <div class="edit-menu">
                <span><Tooltip placement="top" title="Delete Module"><FontAwesomeIcon icon="trash-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Edit Quiz"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
              </div>
            </div>
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>

            </div>          
          </div>

          <div className="module-content" id="page2">
            <h3>3.2 Introduction to Asymmetric Encryption</h3>
            <div className="ease-intro">
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>
              <span className="pageel">
              <p>Symmetric encryption solves the need for secrecy, but with risks when sharing passwords and passphrases. Asymmetric solves this kind of problem with keypairs. Please watch this video to see how asymmetric encryption works, and why it is an improvement.</p>
              </span>
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>
              <span className="pageel">
              <iframe className="vid-embed" width="560" src="https://www.youtube.com/embed/AQDCe585Lnc" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>
              </span>
          <div className="add-menu">
            <input type="checkbox" />
            <div className="add-item"><FontAwesomeIcon icon="plus" /></div>
            <div className="add-menu-items">
              <div className="action_items">
                <span><Tooltip placement="top" title="Add Text"><FontAwesomeIcon icon="pencil-alt" /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Image"><FontAwesomeIcon icon="image" onClick={this.showModal9} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Video"><FontAwesomeIcon icon="video"  onClick={this.showModal5} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Audio"><FontAwesomeIcon icon="volume-up" onClick={this.showModal6} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Assessment"><FontAwesomeIcon icon="check-square" onClick={this.showModal7} /></Tooltip></span>
                <span><Tooltip placement="top" title="Add Layout"><FontAwesomeIcon icon="layer-group"  onClick={this.showModal8} /></Tooltip></span>
              </div>
            </div>
          </div>
            </div>          
          </div>

          <div className="module-content" id="page3">
            <h3>3.3 The Asymmetric Solution</h3>
            <div className="ease-intro">
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

              <span className="pageel">
              <p>So far we have seen that sharing keys is the biggest weakness in creating an impenetrable tube.</p>
              </span>

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

              <span className="pageel">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="The Problem" key="1">
                  <img width="350" src={img2} className="rightimg"/>
                  <p>So far we have seen that sharing keys is the biggest weakness in creating an impenetrable tube. Asymmetrical Encryption does away with the problem of exchanging and storing secret keys, because both sender and receiver use the same set of keys and all keys come in pairs. What one key encrypts, only the other can decrypt. This is one of most common methods of sending encrypted information between two people today on the internet.</p>
                </TabPane>
                <TabPane tab="How it Works" key="2">
                  <img  width="350" src={img3}  className="rightimg" />
                  <p>Each user creates two keys. One key is a private key which is kept secret, and the other is a public key which can be shared with anyone.</p> 
                  <ul>
                    <li>If Bob wants to send Alice a private message, he encrypts the message using her publicly available public key.</li>
                    <li>Only Alice, the owner of the private key, can decrypt it.</li>
                    <li>When Alice responds, she encrypts the message with Bob’s public key.</li>
                    <li>Bob decrypts it using his private key that only he has access too.</li>
                  </ul>
                  <p>The public key is not a secret. We can exchange public keys because we know they are only useful for encrypting messages to the owner of the public key.</p>
                  <div className="ease-card">
                    <h3>Remember</h3>
                    <p>We never have to meet to exchange a secret key or worry about it being discovered.</p>
                  </div>
                </TabPane>
                <TabPane tab="Key Pairs" key="3">
                  <img width="250" src={img4} className="rightimg"/>
                  <p>We do, however, have to really keep our secret keys VERY safe. These two keys are generated together and are call key pairs and the important thing to remember is that your public key can be out in the open so other people have the ability to send you messages, while your private key must always be kept private so that other people cannot decrypt it.</p>
                  <p>When key pairs are generated, an expiration date is typically added on the public key, but never the private key. When the expiration date expires, it is no longer valid and a new key pair should be issued. If a private key is compromised or your network is hacked, it is advisable to revoke keys that may be compromised. When a public key is revoked, other users are informed that they cannot use that public key to send you encrypted messages and that they should look to obtain your newly issued public key.</p>
                </TabPane>
              </Tabs>
              </span>

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
          </div>     

          <div className="module-content" id="page4">
            <h3>3.4 The Diffie-Hellman Key Exchange Algorithm</h3>
            <div className="ease-intro">

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

              <span className="pageel">
              <p>Watch this video to learn how the Diffie-Hellman Key Exchange algorithm is used to establish an encryption key between two parties that have not interacted before.</p>
              </span>

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

              <span className="pageel">
              <iframe className="vid-embed" width="560" src="https://www.youtube.com/embed/YEBfamv-_do" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>
              </span>

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
          </div>

          <div className="module-content" id="page5">
            <h3>3.5 Vulnerabilites</h3>
            <div className="ease-intro">
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

              <span className="pageel">
              <p>The purpose of public keys is to give access to other people to send you encrypted messages. The private key must be kept safe. If it is exposed, any encrypted message sent to you using your public key becomes vulnerable.</p>
              </span>

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

              <span className="pageel">
              <Carousel afterChange={onChange}>
                <div>
                  <h3>Cryptography In the News</h3>
                  <img width="300" src={img5} className="leftimg" />
                  <p>The purpose of public keys is to give access to other people to send you encrypted messages. The private key must be kept safe. If it is exposed, any encrypted message sent to you using your public key becomes vulnerable.</p>
                  <p>Take a moment to read the article Serious Crypto-Flaw Lets Hackers Recover Private RSA Keys Used in Billions of Devices that outlines a flaw that opened a huge door to hackers. </p>
                </div>
                <div>
                  <h3>Return of Coppersmiths Attack</h3>
                  <p>Imagine a failure so big that anyone who knew your public key could fully derive your private key with some very simple brute force methods.  In 2017 this actually happened. Infineon distributed a flawed chip that was designed to produce secure key pairs! The attack was called ROCA (Return of Coppersmiths Attack). This attack allowed an attacker to reverse calculate the private key, if they are given the public key (no physical or remote presence is needed on the target). </p>
                  <p>Every key that was generated with this chip was vulnerable. These didn’t only impact messages using GPG, but also encrypted hard drives, software and HTTPS keys. After this occurred, Microsoft, Infineon, HP, Lenovo, Google and others sent patches to the devices and warned that keys needed to be regenerated. </p>
                </div>
                <div>
                  <h3>Reflection</h3>
                  <p>Take a moment to consider the following questions. Try to guess each answer before clicking on the links for more information.</p>
                  <Collapse accordion>
                    <Panel header="Why does it take so long to patch a vulnerability?" key="1">
                      <p>Once a vulnerability is discovered and reported by a researcher or a vendor, the vendor of the software is sometimes notified of the bug. Not all security researchers give away their work for free. They can make more money selling exploits, keep them for nefarious reasons, or disregard them completely. Once the vendor is aware of the vulnerability, they must reproduce the error on their own to fully understand where it evolved from.  Once they have reverse engineered, debugged and patched (fix the programming language error) they will enter the new code in quality assurance. This step is necessary to make sure that the patch didn’t introduce new bugs or vulnerabilities. </p>
                      <p>Once this step is complete, the vendor documents what the flaw is and what it is capable or doing.  For example, does it allow the attacker to gain remote admin access or does it require the attacker be physically on the computer.  The vendor then issues a patch and notifies their customers to update. This patch cycle process typically takes about 100 days, although 30 day patch cycles are becoming more common with larger vendors.</p>
                    </Panel>
                    <Panel header="What does this tell you about security products in general?" key="2">
                      <p>Security products can be a security threat as any other software because certain programs like anti-virus have higher privileges than the user. </p>
                    </Panel>
                  </Collapse>
                </div>
              </Carousel>
              </span>

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
          </div>
          <div className="module-content" id="page6">
            <h3>3.6 Learning Lab</h3>
            <div className="ease-intro">

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

              <span className="pageel">
            <p>One-Time Pad programs generate a pseudo random number generator (PRNG) character sequence of pads to use to encrypt communication. The numbers are pseudo random because they are not truly random, as a computer is not capable of truly producing anything random.</p>
            </span>

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

              <span className="pageel">
            <div className="ease-activity">
              <div className="fa-icon-activity"><FontAwesomeIcon icon="cloud" /></div> 
              <div className="ease-activity-info">
                <span>10 pts</span>
              </div>
              <h4>Explore: Creating a One Time Pad</h4>
              <p>In this lab, you will explore generating a OTP sequence of random values and see what happens when a random number generator is not random at all. </p>
              <p>The lab environment will open in a modal window. Click OK [in the dialogue box] and follow the prompts to complete each task.</p>
              <button  onClick={this.showModal3}>Open</button>
            </div>
            </span>

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
          </div>

          <div className="module-content" id="page7">
            <h3>3.7 Learning Lab</h3>
            <div className="ease-intro">

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

              <span className="pageel">
              <div className="ease-activity">
                <div className="fa-icon-activity"><FontAwesomeIcon icon="play-circle" /></div> 
                <div className="ease-activity-info">
                  <span>5 pts</span>
                </div>
                <h4>Practice: RSA Key Generation with GPG</h4>
                <p>Let’s explore public and private key encryption and decryption in a practical example. This lab will explore how private and public keys are generated as key pairs and used to secretly exchange private information.</p>
                <p>The lab environment will open in a new tab. Click OK [in the dialogue box] and follow the prompts to complete each task.</p>
            <button onClick={this.showActivity}>Open</button>
              </div>
              </span>

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

          <div className={this.state.activity} >
            <Media />
            <FontAwesomeIcon icon="times" className="activity-close" onClick={this.hideActivity} />
          </div>

            </div>          
          </div>

          <div className="module-content" id="page8">
            <h3>3.8 Knowledge Check</h3>
            <div className="ease-intro">

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

              <span className="pageel">
              <div className="ease-activity">
                <div className="fa-icon-activity"><FontAwesomeIcon icon="pencil-ruler" /></div> 
                <div className="ease-activity-info">
                  <span>10 pts</span>
                  <span>5 questions</span>
                  <span>Umlimited attempts</span>
                  <span>0 attempts taken</span>
                  <span>High Score Method</span>
                </div>
                <h4>Talke the Quiz</h4>
                <p>In this knowledge check, you will review assymmetrical encryption, and consider how secret messages are sent using RSA.</p>
                <button>Start</button>
              </div>
              </span>

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
          </div>
 
        </div>

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
<Reorder reorderId="my-list2" component="ul" lock="horizontal">
                <li onClick={() => this.nextPage(1)}>3.1 Topic Overview <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li onClick={() => this.nextPage(2)}>3.2 Introduction to Asymmetric Encryption <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li onClick={() => this.nextPage(3)}>3.3 The Asymmetric Solution <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li onClick={() => this.nextPage(4)}>3.4 The Diffie-Hellman Key Exchange Algorithm <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li onClick={() => this.nextPage(5)}>3.5 Vulnerabilites <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li onClick={() => this.nextPage(6)}>3.6 Learning Lab <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li onClick={() => this.nextPage(7)}>3.7 Learning Lab <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li onClick={() => this.nextPage(8)}>3.8 Knowledge Check <span className="edit-icon hidden"><FontAwesomeIcon icon="trash-alt" /></span></li>
                <li><FontAwesomeIcon icon="plus" /> Add Page</li>
</Reorder>
            </Drawer>


          <Modal
            title="Learning Lab"
            mask={false}
            footer={null}
            visible={this.state.modal3visible}
            className="ease-module-modal2"
            okText="Add"
            onCancel={this.handleCancel3}
          >
            <LTI />
          </Modal>


          <Modal
            title="Edit Image"
            mask={true}
            visible={this.state.modal4visible}
            className="ease-styles"
            okText="Add"
            onCancel={this.handleCancel4}
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
            <Form.Item label="Image Alt Text" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
            <Form.Item label="Image Caption" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
            <Form.Item label="Alignment" colon={false}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Left</Radio>
                <Radio value={2}>Right</Radio>
                <Radio value={3}>Center</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Float" colon={false}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>None</Radio>
                <Radio value={2}>Left</Radio>
                <Radio value={3}>Right</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Shapes" colon={false}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>None</Radio>
                <Radio value={2}>Circle</Radio>
                <Radio value={3}>Rounded Corners</Radio>
                <Radio value={3}>Thumbnail Border</Radio>
              </Radio.Group>
            </Form.Item>
          </Modal>


          <Modal
            title="Add Video"
            mask={true}
            visible={this.state.modal5visible}
            className="ease-styles"
            okText="Add"
            onCancel={this.handleCancel5}
          >
            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                You may provide a .mov file to upload.
              </p>
            </Dragger>
            <Form.Item label="Video Caption" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
          </Modal>

          <Modal
            title="Add Audio"
            mask={true}
            visible={this.state.modal6visible}
            className="ease-styles"
            okText="Add"
            onCancel={this.handleCancel6}
          >
            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                You may provide a .wav, .mp3 audio file to upload.
              </p>
            </Dragger>
            <Form.Item label="Audio Caption" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
          </Modal>

          <Modal
            title="Add Assessment"
            mask={true}
            visible={this.state.modal7visible}
            className="ease-styles"
            onCancel={this.handleCancel7}
          >

            <p>When inserting an activity an embed token will be created. This is done so that activities can be used in multiple locations yet still have their attempts segregated by embed token.</p>

          </Modal>

          <Modal
            title="Add Layout"
            mask={true}
            visible={this.state.modal8visible}
            className="ease-styles"
            okText="Add"
            onCancel={this.handleCancel8}
          >
            <Form.Item label="Layout Type" colon={false}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Accordion</Radio>
                <Radio value={2}>Carousel</Radio>
                <Radio value={3}>Tabs</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Slide 1 Title" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
            <Form.Item label="Slide 2 Title" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
            <Button>Add Slide</Button>


          </Modal>

          <Modal
            title="Add Image"
            mask={true}
            visible={this.state.modal9visible}
            className="ease-styles"
            okText="Add"
            onCancel={this.handleCancel9}
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
            <Form.Item label="Image Alt Text" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
            <Form.Item label="Image Caption" colon={false}>
              <Input  size="small" defaultValue="" />
            </Form.Item>
            <Form.Item label="Alignment" colon={false}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Left</Radio>
                <Radio value={2}>Right</Radio>
                <Radio value={3}>Center</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Float" colon={false}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>None</Radio>
                <Radio value={2}>Left</Radio>
                <Radio value={3}>Right</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Shapes" colon={false}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>None</Radio>
                <Radio value={2}>Circle</Radio>
                <Radio value={3}>Rounded Corners</Radio>
                <Radio value={3}>Thumbnail Border</Radio>
              </Radio.Group>
            </Form.Item>
          </Modal>
      </div>
    )
  }
}

export default Module; // Don’t forget to use export default!

