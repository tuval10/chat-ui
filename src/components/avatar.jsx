import React from "react";
import PropTypes from "prop-types";
import { SERVER_ADDRESS } from "../constants";

const Avatar = ({ avatar }) => (
  <div className="avatar-container">
    <img
      className="avatar-icon"
      src={`${SERVER_ADDRESS}/avatars/${avatar}`}
      alt="user-logo"
    />
  </div>
);

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Avatar;
