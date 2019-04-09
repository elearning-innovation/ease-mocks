import React, { Component } from 'react';
import './Module.scss';
import Media from './Media';
import LTI from './LTI';
import { Tabs, Carousel, Collapse, Modal, Button, Drawer } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import img1 from './img/GettyImages-857874124.jpg';


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
      <div className={this.state.module} id="module5">
        <div className="nav-arrows">
          <div className="fa-icon nav nav-right" onClick={this.nextPage}><FontAwesomeIcon icon="angle-right"  /></div>
          <div className="fa-icon nav nav-left" id="nav-left" onClick={this.prevPage}><FontAwesomeIcon icon="angle-left" /></div>
        </div>
    	  
        <div className="module-content" id="reading">
    		  <h3>3.5 Vulnerabilites</h3>
          <div className="ease-intro">
          <p>The purpose of public keys is to give access to other people to send you encrypted messages. The private key must be kept safe. If it is exposed, any encrypted message sent to you using your public key becomes vulnerable.</p>
          <Carousel afterChange={onChange}>
            <div>
              <div>
              <h3>Cryptography In the News</h3>
              <p>The purpose of public keys is to give access to other people to send you encrypted messages. The private key must be kept safe. If it is exposed, any encrypted message sent to you using your public key becomes vulnerable.</p>
              <p>Take a moment to read the article Serious Crypto-Flaw Lets Hackers Recover Private RSA Keys Used in Billions of Devices that outlines a flaw that opened a huge door to hackers. </p>
              <img src={img1} />
              </div>

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

          </div>          
        </div>
      </div>
    )
  }
}

export default Module; // Don’t forget to use export default!

