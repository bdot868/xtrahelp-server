import React from 'react'
import {
  Button,
  Form,
  Divider,
  Grid,
  Header,
  Image,
  Icon,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({input, label, type, meta: { touched, error, warning }}) => (
  <div>
    <input {...input} type={type} placeholder={label} />
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined


const required = val => {
  if(!val || val === ''){
    return 'This field is required';
  }
  return undefined;
}

function LoginForm(props) {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const credentials = state;
    props.onLogIn(credentials);
  }

  return (
    <Grid centered verticalAlign='middle'>
      <Grid.Column width={10}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Form.Input
            fluid
            label='Email'
            name='email'
            placeholder='Email Address'
            value={state.email}
            onChange={handleChange}
            // error={{
            //   content: 'Please enter a valid email address',
            //   pointing: 'above',
            // }}
           />
           <Form.Input
             fluid
             label='Password'
             placeholder='Password'
             name='password'
             value={state.password}
             onChange={handleChange}
           />

            <Button color='teal' size='large' disabled={false}>
              Login
            </Button>
            <Link to='/account'>Account</Link>

        </Form>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Caregiver Signup
                </Header>
                <Button color='teal'>Create</Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='world' />
                  Parent Signup
                </Header>
                <Button color='teal'>Create</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}


export default LoginForm;
