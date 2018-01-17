import React, { Component } from 'react';

import Headroom from 'react-headroom';

import logo from './logo.png';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/App.css';


import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headroom>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">
                  <img src={logo} className="App-logo" alt="Jackpot Coupons Manager" />&nbsp;Coupons Manager
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <NavItem eventKey={1} href="#">
                Users
              </NavItem>
              <NavItem eventKey={2} href="#">
                Commercial Entities
              </NavItem>
              <NavItem eventKey={3} href="#">
                Coupons
              </NavItem>
            </Navbar.Collapse>
          </Navbar>
        </Headroom>
        <Grid className="App-body">
          <Row>
            <Col xs={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
