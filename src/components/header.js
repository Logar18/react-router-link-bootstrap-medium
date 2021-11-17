import React, { useState } from 'react';
import Cookies from "universal-cookie";
import {Navbar, Nav, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import ElectionSelector from './electionSelector';
const cookies = new Cookies();

const Header = () => {
    const[isLogged, setLogged] = useState(cookies.get("userToken") !== undefined);
    const [radioValue, setRadioValue] = useState('1');

    const handleLogout = () => {
      cookies.set("userToken", undefined);
      setLogged(false)
    }
    return (
    <Navbar bg="primary" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>VoteSafe</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <LinkContainer disabled={!isLogged} to="/vote">
              <Nav.Link>Vote</Nav.Link>
            </LinkContainer>
            <LinkContainer disabled={!isLogged} to="/analysis">
              <Nav.Link>Election Analysis</Nav.Link>
            </LinkContainer>
            <ElectionSelector disabled={!isLogged}/>
        </Nav>

        {
          //SOON TO BE ADMIN TOGGLE
        }
        {/* <Nav>
          <LinkContainer disabled={!isLogged} to="/service">
          <ToggleButtonGroup
            type='radio'
            name='genre'
            defaultValue={['jazz']}
          >
            <ToggleButton value={'hip_hop'}>Hip Hop</ToggleButton>
            <ToggleButton value={'jazz'}>Jazz</ToggleButton>
            <ToggleButton value={'country'}>Country</ToggleButton>
          </ToggleButtonGroup>
          </LinkContainer>
        </Nav> */}
        <Nav>
						{!isLogged ? (
							<LinkContainer to="/login">
								<Button variant="outline-info">Login</Button>
							</LinkContainer>
						) : (
							<LinkContainer onClick={handleLogout} to="/">
								<Button variant="outline-info">Logout</Button>
							</LinkContainer>
						)}
					</Nav>
      </Navbar.Collapse>
  </Navbar>
    )
}

export default Header
