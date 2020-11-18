import React from 'react'
import { Button, Form, Grid, Header, Image, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class ParentSignupForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const newUser = this.state;
    this.props.onSignup(newUser)
  }

  render(){
    return (
      <Grid centered verticalAlign='middle'>
        <Grid.Column width={10}>
          <Message>
            Meant to sign up as a Caregiver?
            <Link to="/para-signup"> Click Here</Link>
          </Message>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' />
            Sign up as Parent
          </Header>
          <Form onSubmit={this.onSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='First Name'
                name='firstName'
                placeholder='First Name'
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                label='Password'
                name='password'
                placeholder='Password'
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Email'
                name='email'
                placeholder='Email Address'
                onChange={this.onChange}
                // error={{
                //   content: 'Please enter a valid email address',
                //   pointing: 'above',
                // }}
               />
              <Form.Input
                fluid
                label='Primary Phone'
                placeholder='Phone Number'
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Input
              fluid
              label='Street Address'
              placeholder='Street Address'
              onChange={this.onChange}
            />
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='City'
                placeholder='City'
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                label='State'
                placeholder='State'
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                label='Zip Code'
                placeholder='Zip Code'
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.TextArea
              label='About'
              placeholder='Tell us more about your child...'
              onChange={this.onChange}
            />
            <Form.Checkbox
              label='I agree to the Terms and Conditions' />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ParentSignupForm;
