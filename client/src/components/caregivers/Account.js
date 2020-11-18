import React, { useState } from 'react';
import { Grid, Image, Menu, Message, Form, Button, Header, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import clientAuth from './clientAuth';


const Account = () => {
  const [activeItem, setActiveItem] = useState("bookings")

  return (
    <>
      <Header as='h1'>Welcome User</Header>
      <Divider />
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image size="small" src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91535220_524230301609184_1187736540987802958_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=IJpVoOUz1m8AX8vjht1&oh=0b5cd471895b61b862e9cbe703504c67&oe=5EB4B761"/>
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
                />
                <Form.Input
                  fluid
                  label='Last Name'
                  placeholder='Last Name'
                  type='text'
                />
              </Form.Group>
              <Form.Input label='Email Address' placeholder='Email Address' type='email' />
              <Button>Change Password</Button>
              <Form.Input label='New Password' placeholder='Password' type='password' />
              <Form.Input label='Confirm Password' placeholder='Password' type='password' />
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
    </>
  )
}

export default Account;
