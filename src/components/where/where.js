import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import Dudes from '../../icons/dd.svg';
import Dollar from '../../icons/dollar.svg'
import Print from '../../icons/resource.svg';
import Code from '../../icons/code.svg';
import Food from '../../icons/food.svg';
import RLG from '../../icons/rlg.svg';
import NSS from '../../icons/nss.png';
import Child from '../../icons/child.svg';
import OC from '../../icons/oc.png';
import Icon from '../icon/icon';
import 'react-vertical-timeline-component/style.min.css';
import './where.css';

class Where extends React.Component
{
  render()
  {
    return (
      <div className="where-page">
        <div className="row">
          <div className="col-sm-4 col-lg-12">
            <h3 className="title">Where I've Been</h3>
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <div className="skills col-sm-12 col-md-12 col-lg-12">
            <VerticalTimeline>

              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(0,136,169,1)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="April 2019 - present"
              iconStyle={{ background: '#6fc7ae', color: '#fff' }}
              icon={<Icon src={Dollar}/>}
              >
              <h3 className="vertical-timeline-element-title">Systems Analyst</h3>
              <h4 className="vertical-timeline-element-subtitle">Fortera Credit Union</h4>
              <ul className="skill-list">
                <li>PowerOn</li>
                <li>SQL</li>
                <li>Symitar</li>
                <li>Opcon Automation</li>
              </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 255, 255)', color: '#8a8b8f' }}
              date="February 2018 - February 2019"
              iconStyle={{ background: '#f15721', color: 'rgba(0,136,169,1)' }}
              icon={<Icon src={Code}/>}
              >
              <Icon src={NSS}/>
              <h3 className="vertical-timeline-element-title">Software Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Nashville Software School</h4>
              <ul>
                <li>SPA</li>
                <li>C#</li>
                <li>.Net</li>
                <li>React</li>
              </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(0,136,169,1)', color: '#fff' }}
              date="May 2016 - April 2019"
              iconStyle={{ background: 'rgba(0,136,169,1)', color: '#fff' }}
              icon={<Icon src={Print}/>}
              >
                <Icon src={RLG}/>
              <h3 className="vertical-timeline-element-title">Press Finisher</h3>
              <h4 className="vertical-timeline-element-subtitle">Resource Label Group LLC</h4>
              <p> RFID Antenna Inspection, RFID Antenna Replacement, Press-Roll Inspection, Medine Label </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#ff2c42', color: '#fff' }}
              date="February 2018 - February 2019"
              iconStyle={{ background: '#ff2c42', color: 'rgba(0,136,169,1)' }}
              icon={<Icon src={Food}/>}
              >
              <Icon src={Dudes}/>
              <h3 className="vertical-timeline-element-title">Dispatcher</h3>
              <h4 className="vertical-timeline-element-subtitle">Delivery Dudes</h4>
              <ul>
                <li>Coordinated Deliveries</li>
                <li>Manage Drivers</li>
                <li>Establish Relationships with Venders</li>
                <li>Alcohol Delivery</li>
              </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 255, 255)', color: '#8a8b8f' }}
              date="May 2016 - April 2019"
              iconStyle={{ background: '#8a8b8f', color: '#fff' }}
              icon={<Icon src={Child}/>}
              >
                <Icon src={OC}/>
              <h3 className="vertical-timeline-element-title">Children's Minister Apprentice</h3>
              <h4 className="vertical-timeline-element-subtitle">Resource Label Group LLC</h4>
              <p> RFID Antenna Inspection, RFID Antenna Replacement, Press-Roll Inspection, Medine Label </p>
              </VerticalTimelineElement>

            </VerticalTimeline>
          </div>
        </div>
      </div>
    )
  }
}

export default Where;