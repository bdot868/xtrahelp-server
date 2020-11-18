import React from 'react';
import { Tab, Button, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const panes = [
  {
    menuItem: 'Upcoming',
    render: () => <Tab.Pane attached={false}>
        <Header as='h3'>No Bookings yet</Header>
        <p>You haven’t requested an interview or a booking with a sitter.</p>
        <Button><Link to="/find-caregiver">New Request</Link></Button>
        <Button><Link to="/browse-caregivers">Browse Caregivers</Link></Button>
      </Tab.Pane>,
  },
  {
    menuItem: 'Past',
    render: () => <Tab.Pane attached={false}>
      <Header as='h3'>No Bookings yet</Header>
      <p>You haven’t completed an interview or a booking with a Caregiver.</p>
      <Button><Link to="/find-caregiver">New Request</Link></Button>
      <Button><Link to="/browse-caregivers">Browse Caregivers</Link></Button>
    </Tab.Pane>,
  },
  // {
  //   menuItem: 'Tab 3',
  //   render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  // },
]

const Bookings = () => {
  return (
    <Container>
      <h1>Bookings</h1>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
    </Container>
  )
}

export default Bookings;
