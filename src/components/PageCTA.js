import React from 'react';
import { Button, Text } from 'grommet';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4em 2em 4em 2em;
`

const ContactButton = styled(Button)`
  padding: 1em 4em;
  font-size: 1em;
`

const PhoneNumber = styled.a`
  font-size: 2em;
  text-decoration: none;
  font-style: bold;
  font-weight: 600;
  color: ${props => props.theme.colors.brand};
`

const PageCTA = () => {
  return (
    <Wrapper>
      <Link to='/contact/'>
        <ContactButton primary label={'Contact Us Now'}/>
      </Link>
      <Text size={'large'} margin={'medium'}>or give us a call at</Text>
      <PhoneNumber href='tel:407-251-1314'>(407)-251-1314</PhoneNumber>
    </Wrapper>
  );
}

export default PageCTA;