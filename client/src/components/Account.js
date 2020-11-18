import React, { useState } from 'react';
import { Grid, Image, Menu, Message, Form, Button, Header, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const placeholderImage = <Image size="small" src='https://react.semantic-ui.com/images/wireframe/image.png' />

const Account = (props) => {
  const [activeItem, setActiveItem] = useState("bookings")
  const [state, setState] = useState({
    currentUser: props.user,
    passwordChange: false
  })
  console.log(props);

  const updatePassword = () => {
    setState({
      ...state,
      passwordChange: !state.passwordChange
    })
  }

  return (
    <Container>
      <Header as='h1'>Welcome User</Header>
      <Divider />
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            {placeholderImage}
            <Link to="/add-photo">Add/Change Image</Link>
            <Menu secondary vertical>
              <Menu.Item
                name="bookings"
                active={activeItem === "bookings"}
                onClick={() => setActiveItem("bookings")}
              />
              <Menu.Item
                name="messages"
                active={activeItem === "messages"}
                onClick={() => setActiveItem("messages")}
              />
              <Menu.Item
                name="Account settings"
                active={activeItem === "Account settings"}
                onClick={() => setActiveItem("Account settings")}
              />
              <Menu.Item
                name="billing"
                active={activeItem === "billing"}
                onClick={() => setActiveItem("billing")}
              />
            <Menu.Item
              name="delete account"
              active={activeItem === "delete account"}
              onClick={() => setActiveItem("delete account")}
            />
          </Menu>
          </Grid.Column>

          <Grid.Column width={12}>
            <Message
              attached
              header='Basic Information'
            />
            <Form className='attached fluid segment'>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='First Name'
                  placeholder='First Name'
                  type='text'
                  value={state.currentUser.firstName}
                />
                <Form.Input
                  fluid
                  label='Last Name'
                  placeholder='Last Name'
                  type='text'
                />
              </Form.Group>
              <Form.Input
                label='Email Address'
                placeholder='Email Address'
                type='email'
                value={state.currentUser.email}
              />
              <Button onClick={updatePassword}>Change Password</Button>
              {state.passwordChange &&
                <div>
                  <Form.Input label='New Password' placeholder='Password' type='password' />
                  <Form.Input label='Confirm Password' placeholder='Password' type='password' />
                </div>
              }
            </Form>
            <div>
              <Message
                attached
                header='Credit Card Information'
                content='VISA, MasterCard, Discover, and American Express'
              />
              <Form className='attached fluid segment'>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    label='First Name'
                    placeholder='First Name'
                    type='text'
                  />
                  <Form.Input
                    fluid
                    label='Last Name'
                    placeholder='Last Name'
                    type='text'
                  />
                </Form.Group>
                <Form.Input label='Credit Card Number' placeholder='Card Number' type='text' />
                <Form.Group widths='equal'>
                  <Form.Input label='Expiration' type='text' placeholder='01/21'/>
                  <Form.Input label='3-digit security code' type='text' placeholder='XXX'/>
                  <Form.Input label='Zip Code' type='text' placeholder='90210' />
                </Form.Group>
                <Button color='blue'>Submit</Button>
              </Form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Account;
