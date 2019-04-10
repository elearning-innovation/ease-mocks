import React, { Component } from 'react';
import './LTI.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import img1 from './img/lti.png';

library.add(faAngleLeft, faAngleRight)


class LTI extends Component {
  render() {
    return(
      <img src={img1} className="modalimg" />
    )
  }
}

export default LTI; // Don’t forget to use export default!

