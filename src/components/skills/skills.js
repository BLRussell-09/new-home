import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import ReactImage from '../../icons/react.png';
import 'react-vertical-timeline-component/style.min.css';
import './skills.css';

class Skills extends React.Component
{
  render()
  {
    return(
      <div>
        <h3 className="title">Here's what I know</h3>
        <div className="skills-spa row">
        </div>
      </div>
    )
  }
}

export default Skills;