import React, {useState, useEffect} from 'react';
import caregiverAuth from './clientAuth'
import { Link } from 'react-router-dom'
import { Container, Pagination, Grid, Rating, Item, Label, Image, Button, Icon, Header, Divider, Form, Input, Select } from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
const placeholderImage = <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
const miles = [
  {text: '1 Mile', value: '1 mile'},
  {text: '5 Miles', value: '5 miles'},
  {text: '10 Miles', value: '10 miles'},
  {text: '15 Miles', value: '15 miles'},
  {text: '20 Miles', value: '20 miles'},
  {text: '25 Miles', value: '25 miles'},
  {text: '50 Miles', value: '50 miles'}
]
const pagination = <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />

function BrowseCaregivers() {
  const [state, setState ] = useState({
    caregivers: []
  })

  useEffect(() => {
    //retrieve list of caregivers and assign it to local state
    caregiverAuth.getCaregivers().then(res => {
      console.log(res.data);
      setState({
        caregivers: res.data
      })
    })
  },[])

  console.log(state.caregivers);
  const caregivers = state.caregivers.map((caregiver, i) =>{
    return (
        <Item key={i}>
          {placeholderImage}

          <Item.Content>
            <Item.Header as='a'>{caregiver.name || caregiver.firstName}</Item.Header>
            <Item.Meta>
              <span className='cinema'>5 miles away - $30/hr - 27 yrs old - 10 yrs exp</span>
            </Item.Meta>
            <Rating maxRating={5} clearable size='massive'/>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                <Link className="white-font" to={`/profile/${caregiver._id}`}>View Profile</Link>
                <Icon name='right chevron' />
              </Button>
              <Label>IMAX</Label>
              <Label icon='globe' content='Additional Languages' />
            </Item.Extra>
          </Item.Content>
        </Item>
    )
  })

  return (
    <Container>
    <Grid divided centered columns={2}>
      <Grid.Column width={4}>
        <Header as="h3">Where</Header>
        <Form>
          <Form.Field
            id='form-input-control-location'
            control={Input}
            icon='search'
            label='Location'
            placeholder='Enter 5 digit Zip code'
          />
          <Form.Field
            control={Select}
            options={miles}
            label={{ children: 'Distance', htmlFor: 'form-select-control-miles' }}
            placeholder='Distance'
            search
            searchInput={{ id: 'form-select-control-miles' }}
          />
          <Divider />

          <Header as="h3">When</Header>
          <Form.Field
            id='form-input-control-location'
            control={Input}
            label='Dates'
            placeholder='Calendar'
          />
          <Form.Field
            control={Select}
            options={miles}
            label={{ children: 'Start Time', htmlFor: 'select-start-time' }}
            placeholder='From'
            search
            searchInput={{ id: 'select-start-time' }}
          />
          <Form.Field
            control={Select}
            options={miles}
            label={{ children: 'End Time', htmlFor: 'select-end-time' }}
            placeholder='To'
            search
            searchInput={{ id: 'select-end-time' }}
          />
          <Divider />

          <Header as="h3">Rate</Header>

          <Divider />

          <Header as="h3">Other Details</Header>

          <Divider />
        </Form>
      </Grid.Column>
      <Grid.Column width={12}>
        <Item.Group divided>
          {caregivers}
        </Item.Group>
      </Grid.Column>
      {pagination}
    </Grid>
    </Container>
  )
}

export default BrowseCaregivers;
