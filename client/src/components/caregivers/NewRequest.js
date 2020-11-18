import React, { useState } from 'react';
import {
  Sticky,
  Container,
  Segment,
  Grid,
  Divider,
  Header,
  Button,
  Form,
  Tab
} from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Once',
    render: () => <Tab.Pane attached={false}>
        <div>
          <div className="ui input">
            <input type="text" placeholder="Start Date" />
          </div>
          <div className="ui input">
            <input type="text" placeholder="Start Time" />
          </div>
          <div className="ui input">
            <input type="text" placeholder="Duration" />
          </div>
        </div>
      </Tab.Pane>,
  },
  {
    menuItem: 'Regular Schedule',
    render: () => <Tab.Pane attached={false}>
      <Form>
        <Form.Group inline>
         <label>Desired Days</label>
         <Form.Field
           control='input'
           type='checkbox'
           label='Sun'
           value='1'
           // checked={value === '1'}
           // onChange={this.handleChange}
         />
         <Form.Field
           control='input'
           type='checkbox'
           label='Mon'
           value='2'
           // checked={value === '2'}
           // onChange={this.handleChange}
         />
         <Form.Field
           control='input'
           type='checkbox'
           label='Tue'
           value='3'
           // checked={value === '3'}
           // onChange={this.handleChange}
         />
         <Form.Field
           control='input'
           type='checkbox'
           label='Wed'
           value='1'
           // checked={value === '1'}
           // onChange={this.handleChange}
         />
         <Form.Field
           control='input'
           type='checkbox'
           label='Thu'
           value='2'
           // checked={value === '2'}
           // onChange={this.handleChange}
         />
         <Form.Field
           control='input'
           type='checkbox'
           label='Fri'
           value='3'
           // checked={value === '3'}
           // onChange={this.handleChange}
         />
         <Form.Field
           control='input'
           type='checkbox'
           label='Sat'
           value='3'
           // checked={value === '3'}
           // onChange={this.handleChange}
         />
        </Form.Group>
        <div>
          <div className="ui input">
            <input type="text" placeholder="Start Date" />
          </div>
          <div className="ui input">
            <input type="text" placeholder="Start Time" />
          </div>
          <div className="ui input">
            <input type="text" placeholder="Duration" />
          </div>
        </div>
      </Form>
    </Tab.Pane>,
  },
  {
    menuItem: 'Occassionally',
    render: () => <Tab.Pane attached={false}>
      <Form.Field
        control='input'
        type='checkbox'
        label='I need a caregiver asap'
        value='1'
        // checked={value === '2'}
        // onChange={this.handleChange}
      />
      <Form.Field
        control='input'
        type='checkbox'
        label='Start date is flexible'
        value='2'
        // checked={value === '3'}
        // onChange={this.handleChange}
      />
    </Tab.Pane>,
  },
]


const NewRequest = () => {
  const [state, setState] = useState({
    requestType: '',

  })

  return (
    <Container>
      <Grid divided centered columns={2}>
        <Grid.Column width={10}>
          <Segment>
            Let's Find your Match
            <p>Take a minute to tell us about your needs so we can match you with qualified sitters who meet your family's requirements and availability.</p>
            <Divider />
            <Header as='h2'>What type of assistance are you looking for?</Header>
            <Form.Group inline>
              <Form.Radio
                label='leisure'
                value='leisure'
                name='requestType'
              />
              <Form.Radio
                label='education'
                value='education'
                name='requestType'
              />
              <Form.Radio
                label='life skills'
                value='life'
                name='requestType'
              />
            </Form.Group>
            <Header as='h2'>When do you need help?</Header>
            {/*<div id="context2">
              <div class="ui secondary menu">
                <Button class="item active" data-tab="once">Once</Button>
                <Button class="item" data-tab="regular">Regular Schedule</Button>
                <Button class="item" data-tab="occassionally">Occassionally</Button>
              </div>
              <div class="ui active tab segment" data-tab="once">
                4
              </div>
              <div class="ui tab segment" data-tab="regular">
                5
              </div>
              <div class="ui tab segment" data-tab="occassionally">
                6
              </div>
            </div>*/}
            <Divider hidden />
            <Tab menu={{ pointing: true }} panes={panes} />
            <Header as='h2'>About your child/relative.</Header>

            <Header as='h2'>Location</Header>
            <div className="ui input">
              <input type="text" placeholder="Enter 5 digit zip code" />
            </div>

            <Header as='h2'>Rate</Header>
            <div className="ui input">
              <span>$</span><input type="text" placeholder="ex. 25.00" /><span>/hr</span>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
                <Segment>
                  Questions
                  <Divider />
                </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default NewRequest;
