// import axios from 'axios';
import VerticalTimelineElement from 'react-vertical-timeline-component';

var styles = {
  contentBack: '',
  contentColor: '',
  contentBackImg: '',
  iconBackground: '',
  iconColor: '',
}

var timelineElement = {
  date: '',
  title: '',
  subtitle: '',
  skills: [],
  styles: styles
}

const createSkillsList = (skillsArray) => {
  var list = '';
  skillsArray.forEach(skill => {
    var listItem = `<li>${skill}</li>`
    list = list.concat(listItem);
  })
  return list
}

const createTimelineElement = (timelineElement) => {
  var skills = createSkillsList(timelineElement.skills);
  var styles = timelineElement.styles;
  var element = `
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: ${styles.contentBack}, color: ${styles.contentColor}, backgroundImage: url(${styles.contentBackImg}) }}
    date = {{ ${timelineElement.date} }
    iconStyle = {{ background: ${styles.iconBackground}, color: ${styles.iconColor} }}
  >
    <h3 className="vertical-timeline-element-title">${timelineElement.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">${timelineElement.subtitle}</h4>
    <ul className="skill-list">${skills}</ul>
  <VerticalTimelineElement/>`
  return element;
}

var testElement = timelineElement
testElement.date = 'April 2019 - present';
testElement.skills = ['PowerOn', 'SQL', 'Symitar'];
testElement.subtitle = 'Fortera Credit Union';
testElement.title = 'Systems Analyst';