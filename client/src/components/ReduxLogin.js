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


const onSubmit = values => {
  console.log(values);

}

const required = val => {
  if(!val || val === ''){
    return 'This field is required';
  }
  return undefined;
}

let LoginForm = ({handleSubmit, valid}) => {

  // const handleSubmit = (values) => {
  //   console.log('hey we got: ', values);
  // }

  return (
    <Grid centered verticalAlign='middle'>
      <Grid.Column width={10}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Form.Field>
            <Field name="email" type="email" label="Email Address" component={renderInput} validate={email}/>
          </Form.Field>
          <Form.Field>
            <Field name="password" type="text" label="Password" component={renderInput} validate={required}/>
          </Form.Field>

            <Button color='teal' size='large' disabled={!valid}>
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

LoginForm = reduxForm({
  form: 'login',
  onSubmit
})(LoginForm)

export default LoginForm;
