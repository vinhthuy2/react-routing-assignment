import React, { Component } from 'react';

class Course extends Component {
  render() {
    console.log(this.props);

    let title = new URLSearchParams(this.props.location.search);

    console.log(title.entries());
    for (const item of title.entries()) {
      title = item[1];
      console.log(item);
    }

    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
