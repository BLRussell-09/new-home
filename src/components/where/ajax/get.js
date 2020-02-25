import axios from 'axios';
import constants from '../../../firebase/constants';

var styles = {
  contentBack: '',
  contentColor: '',
  contentBackImg: '',
  iconBackground: '',
  iconColor: '',
}

var timelineElement = {
  date: '',
  icon: '',
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
  return list;
}

const createTimelineElement = (timelineElement) => {
  var skills = createSkillsList(timelineElement.skills);
  var styles = timelineElement.styles;
  var element = `
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: ${styles.contentBack}, color: ${styles.contentColor}, backgroundImage: url(require('../../icons/${styles.contentBackImg}')) }}
    date = {{ ${timelineElement.date} }
    iconStyle = {{ background: ${styles.iconBackground}, color: ${styles.iconColor} }}
    icon={ <img className="img-fluid" src={require("../../icons/${timelineElement.icon}")} /> }
    id="dd-timeline-element"
  >
    <h3 className="vertical-timeline-element-title">${timelineElement.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">${timelineElement.subtitle}</h4>
    <ul className="skill-list">${skills}</ul>
  <VerticalTimelineElement/>`
  return element;
}

const getTimeData = () => {
  axios.get(`${constants.databaseURL}/timelineElements/`)
    .then((res) => {
      return console.log(res);
    })
    .catch()
}

// const getStyleData = () => {

// }

export default { getTimeData };