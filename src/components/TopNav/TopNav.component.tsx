import React, {FC} from 'react';
import styled from 'styled-components';
import homeIcon from '../../icons/house.svg'
import messagesIcon from '../../icons/comments.svg'
import bellIcon from '../../icons/bell.svg'
import search from '../../icons/search.svg'
import logo from '../../icons/logo.png';
import { Wrapper, Home, RightIcons, Logo, Icon, IconNoBg, Form, Button, Input} from './styles';





export const TopNav: FC = () =>{
  return(
    <Wrapper >
      <IconNoBg><img src={logo} /></IconNoBg>
      <Home><IconNoBg><img src={homeIcon} /></IconNoBg></Home>
      <Form>
        <Input type="text" placeholder = "Search Legalcluster"></Input>
        <Button type="submit"><img src={search} /></Button>
      </Form>
      <RightIcons>
        <IconNoBg><img src={homeIcon} /></IconNoBg>
        <Icon><span>7</span></Icon>
        <Icon><span>7</span></Icon>
      </RightIcons>
    </Wrapper>
   

  );
};