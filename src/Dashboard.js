import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faAngleRight, faCheckSquare, faFileUpload, faPlayCircle, faCloud, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.scss';

library.add(faTachometerAlt, faAngleRight, faCheckSquare, faFileUpload, faPlayCircle, faCloud, faPencilRuler)


class Dashboard extends Component {
  render() {
    return (
     <div class="drawer-content">
     	<h3>Course 1</h3>
     	<div className="course-activities">
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="pencil-ruler" /></div> 
            <h4>The First Quiz</h4>
            <button>Review</button>
            <div className="ease-activity-info">
              <span>5/10 pts</span>
              <span>2 attempts</span>
            </div>
          </div>
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="pencil-ruler" /></div> 
            <h4>The Second Quiz</h4>
            <div className="ease-activity-info">
              <span>0 pts</span>
              <span>No attempts</span>
            </div>
          </div>
         </div>

     	<h3>Course 2</h3>
     	<div className="course-activities">

          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="pencil-ruler" /></div> 
            <h4>Another One</h4>
            <div className="ease-activity-info">
              <span>0 pts</span>
              <span>No attempts</span>
            </div>
          </div>
         </div>

     	<h3>Course 3</h3>

     	<div className="course-activities">
          <div className="ease-activity">
            <div className="fa-icon-activity"><FontAwesomeIcon icon="pencil-ruler" /></div> 
            <h4>Even Anotbher One</h4>
            <div className="ease-activity-info">
              <span>0 pts</span>
              <span>No attempts</span>
            </div>
          </div>
       </div>
     </div>
     )
  }
}

export default Dashboard; // Don’t forget to use export default!

