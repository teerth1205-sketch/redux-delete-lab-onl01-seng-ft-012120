import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
       <div>
        <li>
          {this.props.band.name}
          <button id={this.props.band.id} onClick={event => this.props.deleteBand(event.target.id)}>Remove</button>
        </li>
      </div>
    );
  }
};

export default Band;
