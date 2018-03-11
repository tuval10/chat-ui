import React from 'react'
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import Avatar from "./avatar";

const MessageItem = ({time, avatar, username, text, myUser: {userId: myUserId}, userId}) =>
  <div
    className={"message-item" + ((userId === myUserId) ? " mine" : "")}>
    <div className="message-details">
      <Avatar avatar={avatar}/>
      <div className="username">{username}</div>
      <div className="posted-at">{time.format("HH:mm")}</div>
    </div>
    <div className="message-text">{text}</div>
  </div>
;

MessageItem.propTypes = {
  userId: PropTypes.string.isRequired,
  time: momentPropTypes.momentObj.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  myUser: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
};


export default MessageItem