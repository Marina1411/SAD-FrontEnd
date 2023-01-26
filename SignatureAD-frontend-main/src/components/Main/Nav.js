import React from 'react';
//import {Link} from 'react-router-dom'
import logo from "../../assets/whitelogo.png";
import { Link } from "react-router-dom";

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
//    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
 //   MDBCollapse,
  } from 'mdb-react-ui-kit';
import LoginButton from '../auth/login';
import LogoutButton from '../auth/logout';
import Profile from '../auth/profile';
  
import { FaShoppingCart, FaUserAlt} from "react-icons/fa";

const Nav=()=>{
    return (
        <MDBNavbar expand='lg' className='navbar'>
          <MDBContainer fluid>
            <MDBNavbarBrand > 
              <Link to="/">
                <img className="logo-1" src={logo}  alt="logo"/>
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
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  USER
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link><Link to={`/admin`}>ADMIN</Link></MDBDropdownItem>
                  <MDBDropdownItem link><Link to={`/`}>USER</Link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/services'>Services</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/gallery'>Gallery</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/about'>About</MDBNavbarLink>
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
                <MDBNavbarItem>
                    <MDBNavbarLink href='/cart'> <FaShoppingCart/> </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink href='/profile'> <FaUserAlt/> </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  EN
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>FR</MDBDropdownItem>
                  <MDBDropdownItem link>EN</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      );
      
    }
export default Nav;
