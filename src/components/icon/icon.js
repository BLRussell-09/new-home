import React from 'react';

class Icon extends React.Component {
  render() {
    return (
      <img src={this.props.src} class="img-fluid material-icons" alt=""/>
    )
  }
}

export default Icon