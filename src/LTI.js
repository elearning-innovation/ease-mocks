import React, { Component } from 'react';
import './LTI.scss';
import { Tooltip } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import img1 from './img/lti.png';

library.add(faAngleLeft, faAngleRight, faWindowMinimize, faWindowMaximize)


class LTI extends Component {

  shrinkModule = () => {
    var element1=document.getElementsByClassName("ant-modal");
    var growicon=document.getElementsByClassName("max-icon1");
    var shrinkicon=document.getElementsByClassName("min-icon1");
    element1[0].classList.add("shrink");
    shrinkicon[0].classList.add("hideme");
    growicon[0].classList.add("showme");
  }
  growModule = () => {
    var element1=document.getElementsByClassName("ant-modal");
    var shrinkicon=document.getElementsByClassName("min-icon1");
    var growicon=document.getElementsByClassName("max-icon1");
    element1[0].classList.remove("shrink");
    shrinkicon[0].classList.remove("hideme");
    growicon[0].classList.remove("showme");
  }

  render() {
    return(
		<div>
           <FontAwesomeIcon icon="window-minimize"  className="min-icon1" onClick={this.shrinkModule} />
           <FontAwesomeIcon icon="window-maximize"  className="max-icon1" onClick={this.growModule} />
			<img src={img1} className="modalimg" />
		</div>
    )
  }
}

export default LTI; // Don’t forget to use export default!

