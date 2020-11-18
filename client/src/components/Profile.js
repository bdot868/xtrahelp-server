import React, { useState, useEffect, createRef } from 'react'
import caregiverAuth from './caregivers/clientAuth'
import {
  Container,
  Rating,
  Grid,
  Sticky,
  Rail,
  Image,
  Message,
  Header,
  Divider,
  Icon,
  Button,
  Ref
} from 'semantic-ui-react'

const userRating = () => <Rating maxRating={5} clearable size='massive'/>
const placeholderImage = <Image size="medium" src='https://react.semantic-ui.com/images/wireframe/image.png' />
const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

function Profile(match) {
  const [state, setState] = useState({
    userId: match.match.params.userId,
    caregivers: []
  })

  useEffect(() => {
    //retrieve list of caregivers and assign it to local state
    caregiverAuth.getCaregivers().then(res => {
      console.log(res.data);
      setState({
        ...state,
        caregivers: res.data
      })
    })
  },[])

  const contextRef = createRef()
  console.log(state);

  const sidebar = state.caregivers.map((caregiver, i) => {
    if(caregiver._id === state.userId) {
      return (
        <Grid.Column width={4} className="right-sidebar">
          <div>
            <Icon name="share" size="large" />
            Share Profile
          </div>
          <Button>
            Message {caregiver.name}
          </Button>
            SIDEBAR
        </Grid.Column>
      )
    }
  })


  const user = state.caregivers.map((caregiver) =>{
    if(caregiver._id === state.userId) {
      return (
        <Container>
          <Header as="h1">{caregiver.name}</Header>
          <div>
            $25/hr
          </div>
          <div>
            <Rating maxRating={5} clearable size='massive'/>
          </div>
          <Divider />
          <Header as='h2' color='teal' textAlign='center'>
            Meet {caregiver.name}
          </Header>
          <p>
            {paragraph}
          </p>
          <Divider />
          <Header as='h3' color='teal' textAlign='center'>
            Availability
          </Header>
          <p>
            {paragraph}
          </p>
          <Divider />
          <Header as='h3' color='teal' textAlign='center'>
            Work History & History
          </Header>
          <p>
            {paragraph}
          </p>
          <Divider />
          <Header as='h3' color='teal' textAlign='center'>
            References
          </Header>
          <Button>
            Upgrade
          </Button>
          <Divider />
          <Header as='h3' color='teal' textAlign='center'>
            Ratings & Reviews
          </Header>
          <p>
            {paragraph}
          </p>
        </Container>
      )
    }
  })

  return (
    <Container>
      <Grid centered verticalAlign='middle'>
          <Message
            icon='inbox'
            header='Have you heard about our mailing list?'
            content='Get the best news in your e-mail every day.'
          />
            <Grid.Column width={4}>
              <div className="left-sidebar">
                {placeholderImage}
              </div>
              Active 1 day ago
            </Grid.Column>
            <Grid.Column width={8}>
              {user}
            </Grid.Column>
            {sidebar}
      </Grid>
    </Container>
   )
}

export default Profile;
