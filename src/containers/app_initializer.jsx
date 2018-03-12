import { connect } from "react-redux";
import AppInitializer from "../components/app_initializer";
import { initialize as _initialize} from '../actions/initialize_app';
import {v1 as generateUniqueId} from 'uuid';
import {AVATAR_IMAGES} from "../constants"

const generateRandomImageIndex = () => (Math.floor(Math.random() * AVATAR_IMAGES.length));

const initialize = () => {
  let avatarIndex = generateRandomImageIndex();
  let userId = generateUniqueId();
  return _initialize(userId, avatarIndex);
};

const mapStateToProps = ({ user, serverConnection }) => ({user, serverConnection});

export default connect(
  mapStateToProps,
  {initialize } //actions
)(AppInitializer);

