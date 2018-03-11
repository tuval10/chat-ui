import React, {Component} from 'react'
import PropTypes from "prop-types";
import MessageItem from "./message_item";
import * as moment from 'moment';

class MessagesList extends Component {
  render() {
    let {messages, myUser} = this.props;
    return <div className="messages-list">
      {
        messages.map(messageProps =>
          <MessageItem
            {...{
              ...messageProps,
              time: moment.isMoment(messageProps.time)
                ? messageProps.time
                : moment.utc(messageProps.time)
            }}
            myUser={myUser}
            key={messageProps.id}
          />)
      }
    </div>;
  }
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  myUser: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
};


export default MessagesList