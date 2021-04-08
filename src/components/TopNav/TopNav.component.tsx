import React, {FC} from 'react';
import styled from 'styled-components';
import darkHouseIcon from '../../icons/house2.svg';
import searchIcon from '../../icons/search.svg';
import homeIcon from '../../icons/house.svg';
import commentsIcon from '../../icons/comments.svg';
import bellIcon from '../../icons/bell.svg';
import dropdownIcon from '../../icons/arrow-down.svg';
import { Wrapper, RightIcons, Logo, Form, Button, Input, DropdownComp, DropdownWrapper, A, DropdownA} from './styles';
import useDropdown from 'react-dropdown-hook';
import { CircleMenu} from './DropdownContent/CircleMenu.component';
import { Link } from 'react-router-dom';






export const TopNav: FC = () =>{
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
  return(
    <Wrapper >
      <Logo></Logo>
      <DropdownComp>
        <DropdownWrapper ref={wrapperRef}>
          
        <DropdownA beforeImg = {darkHouseIcon} afterImg = {dropdownIcon} onClick={toggleDropdown}>
          Home
        </DropdownA>
        
           {dropdownOpen && <CircleMenu />}
        </DropdownWrapper>
      </DropdownComp>
      <Form>
        <Input type="text" placeholder = "Search Legalcluster"></Input>
        <Button type="submit"><img alt ="" src={searchIcon} /></Button>
      </Form>
      <RightIcons>
        <A imgUrl = {homeIcon}></A>
        <A imgUrl = {commentsIcon} bgColor = '#e8e8e8'><span>7</span></A>
        <A imgUrl = {bellIcon} bgColor = '#e8e8e8'><span>13</span></A>
      </RightIcons>
    </Wrapper>
   

  );
};