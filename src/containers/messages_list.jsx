import { connect } from "react-redux";
import MessagesList from "../components/messages_list";

const mapStateToProps = ({ messages, user: myUser }) => ({messages, myUser});

export default connect(
  mapStateToProps,
  {} //actions
)(MessagesList);

