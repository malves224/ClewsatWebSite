import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Evidence extends PureComponent {
  render() {
    const { deposition: { namePeople, comment } } = this.props;
    return (
      <div className="card-evidence">
        <div className="circle">
          <p>&quot;</p>
        </div>
        <div className="comment">
          <p>{comment}</p>
        </div>
        <div className="name-people">
          <p>{namePeople}</p>
        </div>
      </div>
    );
  }
}

Evidence.propTypes = {
  deposition: PropTypes.shape({
    namePeople: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};
