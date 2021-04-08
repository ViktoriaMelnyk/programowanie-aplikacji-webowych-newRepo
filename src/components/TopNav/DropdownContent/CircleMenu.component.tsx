import React, {FC} from 'react';
import styled from 'styled-components';
import userPlusIcon from '../../../icons/user-plus.svg';
import networkIcon from '../../../icons/people.svg';
import yourPublicationsIcon from '../../../icons/publications.svg';
import plusIcon from '../../../icons/plus.svg';
import { CircleUl,CircleLi, Filter, Wrapper, Title } from './CircleMenu.styles';

export const CircleMenu: FC = () =>{

    return(
        <Wrapper>
            <Filter type="text" placeholder = "filter..."></Filter>
           <Title>Platform</Title>
           <CircleUl>
                    <CircleLi beforeImgUrl ={networkIcon}  padding = '0px' ><a href="#">Your Network</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
            </CircleUl>
            <Title>Workspaces</Title>
             <CircleUl>
                    <CircleLi beforeImgUrl ={networkIcon}  padding = '0px' ><a href="#">Your Network</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
            </CircleUl>
            <Title>Account</Title>
             <CircleUl>
                    <CircleLi beforeImgUrl ={networkIcon}  padding = '0px' ><a href="#">Your Network</a></CircleLi>
                    <CircleLi beforeImgUrl ={yourPublicationsIcon} padding = '0px'><a href="#">Your Publications</a></CircleLi>
            </CircleUl>
            <div>Logout</div>
        </Wrapper>
       
    );

};