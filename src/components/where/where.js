import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import ReactImage from '../../icons/react.png';
import LabelImage from '../../icons/Untitled.png'
import 'react-vertical-timeline-component/style.min.css';
import './where.css';

class Where extends React.Component
{
  render()
  {
    return (
      <div className="where-page">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="title">Where I've Been</h3>
          </div>
        </div>
        <div className="row">
          <div className="skills col-sm-12 col-md-12 col-lg-12">
            <VerticalTimeline>
              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="April 2019 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={ReactImage} alt="react" />}
              >
              <h3 className="vertical-timeline-element-title">Systems Analyst</h3>
              <h4 className="vertical-timeline-element-subtitle">Fortera Credit Union</h4>
              <p>PowerOn, Sql, Symitar-Credit Union Software, Opcon Automation</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={LabelImage} alt='Resource Label Group' className="label-icon"/>}
              >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    )
  }
}

export default Where;