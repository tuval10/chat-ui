
//Your app starts here, you may change anything
import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;      
      }
      
`;


class App extends React.PureComponent {
  render() {
    return <Container className={'spotim-header'}>
      <div className={'spotim-title'}>
        Welcome to the Spot.IM Chat app
      </div>
      <div>
        <Logo>
          <Image size={'tiny'} src={logo}/>
        </Logo>

      </div>
    </Container>
  }
}

export default App;