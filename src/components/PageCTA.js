import React from 'react';
import { Button, Text } from 'grommet';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PhoneNumber from '../components/PhoneNumber';

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

const PageCTA = () => {
  return (
    <Wrapper>
      <Link to='/contact/'>
        <ContactButton primary label={'Contact Us Now'}/>
      </Link>
      <Text size={'large'} margin={'medium'}>or give us a call at</Text>
      <PhoneNumber/>
    </Wrapper>
  );
}

export default PageCTA;