import { connect } from "react-redux";
import Avatar from "../components/avatar";
const mapStateToProps = ({ user: {avatar} }) => ({avatar});

export default connect(
  mapStateToProps,
  {} //actions
)(Avatar);

