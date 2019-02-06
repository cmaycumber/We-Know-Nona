import React, { useEffect, useState } from 'react'
import { Link, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Button } from 'grommet';
import { HamburgerSlider } from 'react-animated-burgers';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import Img from 'gatsby-image';

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
  align-items: center;
  padding: 0em 2em 0em 2em;
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
    .gatsby-image-wrapper {
      width: 15vw;
      z-index: 1001;
      @media screen and (max-width: ${props => props.theme.responsive.small}) {
        width: 30vw;
      }
    }
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

const MobileList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw + 17px);
  background: white;
  padding: ${props => props.open ? '4em' : '0em'};
  height: ${props => props.open ? '100vh' : '0vh'};
  transition: height .3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: ${props => props.open ? 'scroll' : 'hidden'};
  li {
    opacity: ${props => props.open ? '1' : '0'};
    border: none;
    transition: all .2s ease-out;
    :hover {
      border: none;
    }
  }
  a {
    color: ${props => props.theme.colors.brand};
    font-size: 1.5rem;
  }
  button {
    padding: 1em 2em;
  }

`

const HamburgerButton = styled(HamburgerSlider)`
  z-index: 1001;
  padding: 1.2em;
  margin-top: .2em;
  padding-top: 1.3em;
  span {
    background-color: ${props => props.colored ? props.theme.colors.brand : 'white'};
    ::before {
      background-color: ${props => props.colored ? props.theme.colors.brand : 'white'};
    }
    ::after {
      background-color: ${props => props.colored ? props.theme.colors.brand : 'white'};
    }
  }
`

const activeLinkStyle = {}

const Menu = ({ data }) => {
  const [coloredMenu, setColoredMenu] = useState(false);
  const [home, setHome] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setHome(true);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
  }, [coloredMenu, isMobile]);

  const handleResize = () => {
    if(menuOpen) {
      setMenuOpen(false);
    }
    if (window.innerWidth < 1024) {

      setIsMobile(true);

    } else {
      setIsMobile(false);
    }
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setColoredMenu(true);
    } else {
      setColoredMenu(false);
    }
  }

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Header home={home} colored={coloredMenu}>
      <Nav>
        <Link to='/'>
          <Img fluid={data.Logo.childImageSharp.fluid} alt="We Know Nona Logo"/>
        </Link>
        {isMobile && <ScrollLock isActive={menuOpen}/> }
        { isMobile && <HamburgerButton isActive={menuOpen} toggleButton={toggleMenuOpen} colored={coloredMenu || menuOpen || !home} onClick={toggleMenuOpen}/>}
        { isMobile && 
        <TouchScrollable isActive={menuOpen}>
        <MobileList open={menuOpen}>
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
            <ListButton home={home} colored={coloredMenu}>
              <Link to={'/contact'}>
                <ContactButton path={'/contact/'} primary label={'Get In Touch'}/>
              </Link>
            </ListButton>
        </MobileList>
        </TouchScrollable>
        }
        {!isMobile && <ul>
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
            <Link to={'/contact'}>
              <ContactButton home={home} path={'/contact/'} primary color={coloredMenu || !home ? 'brand' : 'white'} buttonColor={coloredMenu} label={'Get In Touch'}/>
            </Link>
          </ListButton>
        </ul> }
      </Nav>
    </Header>
  )
}

const query = () => (
  <StaticQuery
        query={graphql`
          query {
            Logo: file(relativePath: { eq: "WeKnowNonaLogo.png" }) {
              ...fluidImage
            }
          }
        `}
        render={data => (
          <Menu data={data}/>
        )}  
      />
)

export default query;
