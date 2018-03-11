import React from 'react'
import PropTypes from "prop-types";
import fetchAvatar from "../services/fetch_avatar"


const Avatar = ({avatar}) =>
  <div className="avatar-container">
    <img className="avatar-icon" src={fetchAvatar(avatar)} alt="user-logo"/>
  </div>;

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};


export default Avatar