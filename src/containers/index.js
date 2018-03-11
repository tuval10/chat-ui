import React from 'react';
import logo from '../assets/spotim-logo.jpg';
import {Image} from 'semantic-ui-react';
import MessageCreationForm from "./message_creation_form";
import UserAvatar from "./user_avatar";
import MessagesList from "./messages_list";
import AppInitializer from "./app_initializer"

const App = () =>
  <AppInitializer>
    <div className={'header'}>
      <div className={'header-text'}>
        Welcome to the Spot.IM Chat app
      </div>
      <Image size={'tiny'} src={logo}/>
    </div>
    <MessagesList/>
    <div className="fixed-bottom-container">
      <UserAvatar/>
      <MessageCreationForm/>
    </div>
  </AppInitializer>;

export default App;