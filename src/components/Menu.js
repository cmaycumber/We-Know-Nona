import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../../static/logos/Logo2.png';
import { Button } from 'grommet';

const Header = styled.header`
  background: ${props => props.colored || !props.home ? 'white' : 'transparent'};
  width: 100%;
  transition: all .2s ease-out;
  padding: 1em 0;
  position: ${props => !props.home ? 'relative' : 'fixed'};
  top: 0;
  left: 0;
  z-index: 100;
`
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0em 2em 0em 2em;
  img {
    height: 10vh;
    width: auto;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
  }
`

const ListItem = styled.li`
  border-bottom: 1px solid transparent;
  display: inline-block;
  padding: .5em 1em .5em 1em;
  :hover {
    border-bottom: 2px solid ${props => props.colored || !props.home ? props.theme.colors.brand : 'white'};
  }
  a {
    color: ${props => props.colored || !props.home ? props.theme.colors.brand : 'white'};
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease-out;
  }
`

const ListButton = styled.li`
  border-bottom: 1px solid transparent;
  display: inline-block;
  padding: .5em 1em .5em 1em;
  // a {
  //   color: ${props => props.colored || !props.home ? props.theme.colors.brand : 'white'};
  //   text-decoration: none;
  // }
`

const ContactButton = styled(Button)`
  color: ${props => props.buttonColor || !props.home ? 'white' : props.theme.colors.brand};
`

const DropdownListItem = styled.li`
  border-bottom: 1px solid transparent;
  display: inline-block;
  padding: .5em 1em .5em 1em;
  :hover {
    // border-bottom: 2px solid ${props => props.colored || !props.home ? props.theme.colors.brand : 'white'};
    #dropdown {
      height: 30vh;
      margin-top: -.5vh;
      margin-left: -2vw;
      padding: .5em;
      a {
        visibility: visible;
      }
    }
    a {
      visibility: hidden;
    }
  }
  a {
    color: ${props => props.colored || !props.home ? props.theme.colors.brand : 'white'};
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease-out;
  }
`

const Dropdown = styled.div`
  background: white;
  transition: all .2s ease-out;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  flex-direction: column;
  height: 0vh;
  overflow: hidden;
  width: auto;
  position: absolute;
  a {
    transition: none;
    border-bottom: 2px solid transparent;
    :hover {
      border-bottom: 2px solid ${props => props.colored || !props.home ? props.theme.colors.brand : 'white'};
    }
    padding: .3em .6em;
    color: ${props => props.theme.colors.brand};
  }
`

const activeLinkStyle = {}

const Menu = () => {
  const [coloredMenu, setColoredMenu] = useState(false);
  const [home, setHome] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setHome(true);
    }
    window.addEventListener('scroll', handleScroll);
  }, [coloredMenu]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setColoredMenu(true);
    } else {
      setColoredMenu(false);
    }
  }

  return (
    <Header home={home} colored={coloredMenu}>
      <Nav>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
        </Link>
        {/* <ul>
          <li>
            <Link to="/buy/" activeStyle={activeLinkStyle}>
              Buy
            </Link>
          </li>
          <li>
            <Link to="/sell/" activeStyle={activeLinkStyle}>
              Sell
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul> */}
        <ul>
        <ListItem home={home} colored={coloredMenu}>
            <Link to="/buy/" activeStyle={activeLinkStyle}>
              Buy
            </Link>
          </ListItem>
          <ListItem home={home} colored={coloredMenu}>
            <Link to="/sell/" activeStyle={activeLinkStyle}>
              Sell
            </Link>
          </ListItem>
          <ListItem home={home} colored={coloredMenu}>
            <Link to="/listings/" activeStyle={activeLinkStyle}>
              Listings
            </Link>
          </ListItem>
          <ListItem home={home} colored={coloredMenu}>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </ListItem>
          <ListItem home={home} colored={coloredMenu}>
            <Link to="/blog/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </ListItem>
          <DropdownListItem home={home} colored={coloredMenu}>
            <Dropdown id="dropdown">
              <Link to="/communities/" activeStyle={activeLinkStyle}>
                Communities
              </Link>
              <Link to="/communities/northlake-park" activeStyle={activeLinkStyle}>
                Northlake Park
              </Link>
              <Link to="/communities/nona-crest" activeStyle={activeLinkStyle}>
                Nona Crest
              </Link>
              <Link to="/communities/village-walk" activeStyle={activeLinkStyle}>
                Village Walk
              </Link>
              <Link to="/communities/country-club" activeStyle={activeLinkStyle}>
                Country Club
              </Link>
            </Dropdown>
            <Link to="/communities/" activeStyle={activeLinkStyle}>
              Communities
            </Link>
          </DropdownListItem>
          <ListButton home={home} colored={coloredMenu}>
            {/* <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link> */}
            <Link to={'/contact'}>
              <ContactButton home={home} path={'/contact/'} primary color={coloredMenu || !home ? 'brand' : 'white'} buttonColor={coloredMenu} label={'Get In Touch'}/>
            </Link>
          </ListButton>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
