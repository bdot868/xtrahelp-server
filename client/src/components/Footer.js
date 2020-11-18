import React from 'react';
import { List, Image, Divider, Container } from 'semantic-ui-react';
// import './style.css';

export default class Footer extends React.Component {

  render(){
    return (
      <div className="footer">
        <Divider />
        <Container textAlign='center'>
          <List horizontal>
            <List.Item>About</List.Item>
            <List.Item>Help</List.Item>
            <List.Item>Login</List.Item>
            <List.Item>Signup</List.Item>
          </List>
          <Image centered size="small" src="https://miro.medium.com/max/1000/1*4KmICDOXxBUJKKVaEGkt-A.jpeg"></Image>
        </Container>
      </div>
    )
  }
}
