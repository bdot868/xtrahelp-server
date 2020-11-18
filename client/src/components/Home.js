import React from 'react';
import PropTypes from 'prop-types';
import { Image, Grid, Container, Header, Button, Icon, Segment, Reveal } from 'semantic-ui-react';
import caregiverImg from './caregiver.jpg';
import './style.css'

const Home = ({ mobile }) => {

    return (
      <div>
        <Container>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 400, padding: '1em 0em'}}
          >
            <Container text>
              <Header
                as='h1'
                content='XtraHelp'
                inverted
                style={{
                  fontSize: mobile ? '2em' : '4em',
                  fontWeight: 'normal',
                  marginBottom: '0',
                  marginTop: mobile ? '.75em' : '1.5em'
                }}
              />
              <Header
                as='h2'
                content='Every now and then we all need a little XtraHelp'
                inverted
                style={{
                  fontSize: mobile ? '1em' : '1.5em',
                  fontWeight: 'normal',
                  marginTop: mobile ? '.25em' : '.75em'
                }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Reveal animated='small fade'>
                  <Reveal.Content visible>
                    <Image className="hmpage-flip-img" fluid src="https://www.workflexibility.org/wp-content/uploads/How-Work-Flexibility-for-Parents-Can-Be-Life-Changing-.jpg" />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Segment
                      inverted
                      textAlign='center'
                      className="hmpage-flip-img"
                    >
                      <Header
                        as='h3'
                        content='Become a Caregiver'
                        inverted
                        style={{
                          fontSize: mobile ? '1.5em' : '2.5em',
                          fontWeight: 'normal',
                          marginTop: mobile ? '.25em' : '.75em'
                        }}
                      />
                    </Segment>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
              <Grid.Column>
                <Reveal animated='small fade'>
                  <Reveal.Content visible>
                    <Image className="hmpage-flip-img" fluid src="https://www.courant.com/resizer/o2VPBBzy3GkJ8R4lV8Be1-eSgLE=/415x311/top/www.trbimg.com/img-5b4ccea1/turbine/hc-cc-hc-milan-autism-20180716" />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Segment
                      inverted
                      textAlign='center'
                      className="hmpage-flip-img"
                    >
                      <Header
                        as='h3'
                        content='Family Signup'
                        inverted
                        style={{
                          fontSize: mobile ? '1.5em' : '2.5em',
                          fontWeight: 'normal',
                          marginTop: mobile ? '.25em' : '.75em'
                        }}
                      />
                    </Segment>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid columns={2} className="dedicated-caregiver">
            <Grid.Row>
              <Grid.Column>
                <h2>Are You a dedicated Caregiver?</h2>
                <p>
                  We are always looking for dedicated Caregivers who are experts in their trade and provide great service to their customers. The best Caregivers use us to do more of what they love to do while receiving great pay and flexible scheduling.
                </p>
                <Button>Become A Caregiver</Button>
              </Grid.Column>
              <Grid.Column>
                <Image src="" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <div className="vetted">
          <Container text textAlign='center'>
            <Header as='h2'><Icon name='unlock' />Vetted, Background-Checked Professionals</Header>
            <p>
              All Caregivers are booked and paid directly through the xtrahelp platform.  We provide
              verified background checks for experienced professionals that come highly rated by customers like you. Learn more.
            </p>
          </Container>
        </div>
      </div>
    )
}

Home.propTypes = {
  mobile: PropTypes.bool,
}

export default Home;
