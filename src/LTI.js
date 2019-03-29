import React, { Component } from 'react';
import './LTI.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight)


class LTI extends Component {
  render() {
    return(
      <iframe src="https://labondemand.com/VirtualizationClient/622bb2c5-21e7-4332-a578-68c09e591995?rc=10"></iframe>
    )
  }
}

export default LTI; // Don’t forget to use export default!

