import React from 'react';
import whitelogo from "../../assets/whitelogo.png";
import { Link } from "react-router-dom";
import LoginButton from '../auth/login';
import LogoutButton from '../auth/logout';
import Profile from '../auth/profile';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    //MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  } from 'mdb-react-ui-kit';

const Nav=()=>{
    return (
        <MDBNavbar expand='lg' className='navbar2'>
          <MDBContainer fluid>
            <MDBNavbarBrand > 
              <Link to="/">
                <img className="logo-1" src={whitelogo}  alt="logo"/>
              </Link>
</MDBNavbarBrand>
            
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  ADMIN
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link><Link to={`/admin`}>ADMIN</Link></MDBDropdownItem>
                  <MDBDropdownItem link><Link to={`/`}>USER</Link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
                  <Profile/>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <LoginButton/>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <LogoutButton/>
                </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      );
      
    }
export default Nav;