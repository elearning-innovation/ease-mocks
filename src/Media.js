import React, { Component } from 'react';
import './Media.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight)


class Media extends Component {
  render() {
    return(
<iframe src="https://s3.amazonaws.com/n-virginia-ease-staging/assessment/560/media/story_html5.html"></iframe>
    	)
  }
}

export default Media; // Don’t forget to use export default!

