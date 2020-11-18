import React, { Component } from 'react';
import { Button, Menu, Container, Sticky } from 'semantic-ui-react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CaregiverSignUp from './caregivers/CaregiverSignUp';
import ParentSignUp from './parents/ParentSignUp';
import LogIn from './LoginPage';
import Home from './Home';
import Help from './Help';
import Logout from './Logout';
import NewRequest from './caregivers/NewRequest';
import Account from './Account';
import AddPhoto from './AddPhoto';
import Bookings from './Bookings';
import BrowseCaregivers from './caregivers/BrowseCaregivers';
import Footer from './Footer';
import Profile from './Profile';
import caregiverAuth from './caregivers/clientAuth'
import userAuth from './parents/clientAuth'
import './style.css'



export default class Navbar extends Component {
  state = {
    activeItem: 'home',
    currentUser: null,
    loggedIn: false
  }

  componentDidMount = () => {
    const currentUser = caregiverAuth.getCurrentUser()
    this.setState({
      currentUser: currentUser,
      loggedIn: !!currentUser
    })
  }

  signUp = (newUser) => {
    caregiverAuth.signUp(newUser).then((data) => {
      console.log(data);
    })
  }
  login = (credentials) => {
    caregiverAuth.logIn(credentials).then(user => {
      this.setState({
        currentUser: user,
        loggedIn: true
      })
    })
  }
  logOut = () =>{
    caregiverAuth.logOut().then(message => {
      this.setState({
        currentUser: null,
        loggedIn: false
      })
    })
  }

  userSignUp = (newUser) => {
    userAuth.signUp(newUser).then((data) => {
      console.log(data);
    })
  }
  userLogin = (credentials) => {
    userAuth.logIn(credentials).then(user => {
      this.setState({
        currentUser: user,
        loggedIn: true
      })
    })
  }
  userLogOut = () =>{
    userAuth.logOut().then(message => {
      this.setState({
        currentUser: null,
        loggedIn: false
      })
    })
  }

  // handleItemClick = (e, { name }) => {
  //   this.setState({
  //     activeItem: name
  //   })
  // }
  //
  //
  // contextRef = createRef()

  render() {
    // const { activeItem } = this.state;
    console.log(this.state);
    return (
      <>
        <Router>
            <Sticky active>
              <Menu stackable secondary className="nav-bar">
                <Container>
                  <Menu.Item header>
                    <Link
                      name="home"
                      // active={activeItem === 'home'}
                      to="/">XtraHelp
                    </Link>
                  </Menu.Item>

                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Link
                        // active={activeItem === 'Browse'}
                        name="browse"
                        to="/browse-caregivers">Browse Caregivers
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        // active={activeItem === 'Caregiver'}
                        name="caregiver"
                        to="/caregiver-signup">Become a Caregiver
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        name="help"
                        // active={activeItem === 'help'}
                        to="/help">Help
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        name="profile"
                        // active={activeItem === 'help'}
                        to="/profile">Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        name="account"
                        // active={activeItem === 'help'}
                        to="/account">Account
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        name="bookings"
                        // active={activeItem === 'bookings'}
                        to="/bookings">Bookings
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        name="login"
                        // active={activeItem === 'login'}
                        to="/login">Login
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        name="logout"
                        // active={activeItem === 'logout'}
                        to="/logout">Logout
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Button>
                        <Link
                          name="signup"
                          // active={activeItem === 'signup'}
                          to="/parent-signup">Signup
                        </Link>
                      </Button>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
            </Sticky>


              <Switch>
                <Route path="/logout">
                  <Logout />
                </Route>
                <Route path="/help">
                  <Help />
                </Route>
                <Route path="/login">
                  <LogIn onLogIn={this.login}/>
                </Route>
                <Route path="/caregiver-signup">
                  <CaregiverSignUp onSignup={this.signUp}/>
                </Route>
                <Route path="/parent-signup">
                  <ParentSignUp onSignup={this.userSignUp}/>
                </Route>
                {/*<Route path="/profile" component={Profile}>
                  <Profile user={this.state.currentUser}/>
                </Route>*/}
                <Route path="/profile/:userId" component={Profile} />
                <Route path="/account">
                  <Account user={this.state.currentUser}/>
                </Route>
                <Route path="/find-caregiver">
                  <NewRequest />
                </Route>
                <Route path="/add-photo">
                  <AddPhoto />
                </Route>
                <Route path="/bookings">
                  <Bookings />
                </Route>
                <Route path="/browse-caregivers">
                  <BrowseCaregivers />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
        </Router>
      <Footer />
    </>
    )
  }
}
