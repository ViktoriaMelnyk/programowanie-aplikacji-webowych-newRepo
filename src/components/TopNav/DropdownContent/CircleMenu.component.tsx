import React, {FC} from 'react';
import styled from 'styled-components';

import { CircleUl,CircleLi, Filter, Wrapper, Title, ScrollWrapper, LogOut, SeeProfile, UserBox, UserName, UserInfo, UserImage } from './CircleMenu.styles';

import Icons from '../../common/Icons'


export const CircleMenu: FC = () =>{

    return(
        <Wrapper>
            <Filter type="text" placeholder = "filter..."></Filter>
            <ScrollWrapper>
           <Title>Platform</Title>
           <CircleUl>
                    <CircleLi beforeImgUrl ={Icons.blackHouseIcon}  padding = '0px' ><a href="#">Home</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.yourPublicationsIcon} padding = '0px'><a href="#">Publications</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.peopleIcon} padding = '0px'><a href="#">People</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.entities2Icon} padding = '0px'><a href="#">Entities</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.adminIcon} padding = '0px'><a href="#">Administration</a></CircleLi>
            </CircleUl>
            <Title>Workspaces</Title>
             <CircleUl>
                    <CircleLi beforeImgUrl={Icons.contractIcon}  padding = '0px' ><a href="#">Client contract</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><a href="#">Supplier contract</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.entitiesIcon} padding = '0px'><a href="#">Corporate</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.bookIcon} padding = '0px'><a href="#">Group Norms</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><a href="#">Real estate contracts</a></CircleLi>
            </CircleUl>
            <Title>Workspaces</Title>
             <CircleUl>
                    <CircleLi beforeImgUrl={Icons.contractIcon}  padding = '0px' ><a href="#">Client contract</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><a href="#">Supplier contract</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.entitiesIcon} padding = '0px'><a href="#">Corporate</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.bookIcon} padding = '0px'><a href="#">Group Norms</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><a href="#">Real estate contracts</a></CircleLi>
            </CircleUl>
            </ScrollWrapper>
            <Title>Account</Title>
             <CircleUl>
                    <UserBox>
                        <UserImage imgUrl = {Icons.userIcon}></UserImage>
                        <UserInfo>
                            <UserName>Jeanne-Marie de la cli..</UserName>
                            <SeeProfile>See profile</SeeProfile>
                        </UserInfo>
                    </UserBox>
                    <CircleLi beforeImgUrl ={Icons.privacyIcon}  padding = '0px' ><a href="#">Privacy</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.settingsIcon} padding = '0px'><a href="#">Settings</a></CircleLi>
            </CircleUl>
            <LogOut>Logout</LogOut>
        </Wrapper>
       
    );

};