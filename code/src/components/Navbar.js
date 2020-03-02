import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../pics/logo.svg';
import LanguageIcon from '@material-ui/icons/Language';
import Link from '@material-ui/core/Link';

export default function NavBar() {

    return (
        <Navbar>
            <Nav.Link href="#AboutUs">
            <img src={logo} style={{width: 140, height: 90}}/>
            </Nav.Link>
        <Link href="#language" color="inherit" style={{marginLeft: 'auto'}}>
            <LanguageIcon/>
            <span style={{color: "#2F2E40", marginLeft: "5px"}}>English (US)</span>
        </Link>
        </Navbar>

    )
}