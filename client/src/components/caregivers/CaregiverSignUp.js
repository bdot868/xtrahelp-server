import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

const months = [
  { key: 'jan', text: 'January', value: 'january'},
  { key: 'feb', text: 'February', value: 'february'},
  { key: 'mar', text: 'March', value: 'march'},
  { key: 'apr', text: 'April', value: 'april'},
  { key: 'may', text: 'May', value: 'may'},
  { key: 'jun', text: 'June', value: 'june'},
  { key: 'jul', text: 'July', value: 'july'},
  { key: 'aug', text: 'August', value: 'august'},
  { key: 'sep', text: 'September', value: 'september'},
  { key: 'oct', text: 'October', value: 'october'},
  { key: 'nov', text: 'November', value: 'november'},
  { key: 'dec', text: 'December', value: 'december'},
]

const daysInMonth = [
  { text: 1, value: 1},
  { text: 2, value: 2},
  { text: 3, value: 3},
  { text: 4, value: 4},
  { text: 5, value: 5},
  { text: 6, value: 6},
  { text: 7, value: 7},
  { text: 8, value: 8},
  { text: 9, value: 9},
  { text: 10, value: 10},
  { text: 11, value: 11},
  { text: 12, value: 12},
  { text: 13, value: 13},
  { text: 14, value: 14},
  { text: 15, value: 15},
  { text: 16, value: 16},
  { text: 17, value: 17},
  { text: 18, value: 18},
  { text: 19, value: 19},
  { text: 20, value: 20},
  { text: 21, value: 21},
  { text: 22, value: 22},
  { text: 23, value: 23},
  { text: 24, value: 24},
  { text: 25, value: 25},
  { text: 26, value: 26},
  { text: 27, value: 27},
  { text: 28, value: 28},
  { text: 29, value: 29},
  { text: 30, value: 30},
  { text: 31, value: 31}
]





function ParaSignupForm(props){
  const [state, setState] = React.useState({
    firstName: "",
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

  const handleSignup = (event) => {
    event.preventDefault()
    const newUser = state;
    props.onSignup(newUser);
  }

  console.log(state);
  return (
    <Grid centered verticalAlign='middle'>
      <Grid.Column width={10}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='' />
          Sign up as a Caregiver
        </Header>
        <Message>
          Meant to sign up as a Parent?
          <Link to="/parent-signup"> Click Here</Link>
        </Message>
        <Form onSubmit={handleSignup}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='First name'
              name='firstName'
              placeholder='First name'
              value={state.firstName}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label='Last name'
              placeholder='Last name'
            />
            <Form.Select
              width={5}
              label='Gender'
              options={options}
              placeholder='Gender'
            />
          </Form.Group>
          <Form.Group widths='equal'>
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
            <Form.Input fluid label='Primary Phone' placeholder='Phone Number' />
          </Form.Group>
          <Header size="small">
            Enter your Date of Birth
          </Header>
          <Form.Group widths='equal'>
            <Form.Select
              fluid
              // label='Month'
              options={months}
              placeholder='Birth Month'
            />
            <Form.Select
              width={4}
              // label='Day'
              options={daysInMonth}
              placeholder='Birth Day'
            />
            <Form.Input
              fluid
              // label='Year'
              placeholder='Birth Year'
            />
          </Form.Group>
          <Form.Input fluid label='Street Address' placeholder='Street Address' />
          <Form.Group widths='equal'>
            <Form.Input fluid label='City' placeholder='City' />
            <Form.Input fluid label='State' placeholder='State' />
            <Form.Input
              fluid
              label='Zip Code'
              placeholder='Zip Code'
            />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}


export default ParaSignupForm;
