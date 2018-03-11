import React, {Component} from 'react'
import PropTypes from "prop-types";

class AppInitializer extends Component {
  constructor(props) {
    super(props);
    let {initialize} = this.props;
    initialize();
  }

  isInitialized(){
    let { user, serverConnection: {initialized, connected} } = this.props;
    return user && initialized && connected;
  }

  render() {
    if(! this.isInitialized())
      return <div className="loading">loading...</div>;
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

AppInitializer.propTypes = {
  initialize: PropTypes.func.isRequired,
  serverConnection: PropTypes.shape({
    initialized: PropTypes.bool.isRequired,
    connected: PropTypes.bool.isRequired
  }).isRequired
};


export default AppInitializer