import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import networkIcon from '../../icons/people.svg';
import userPlusIcon from '../../icons/user-plus.svg';
import yourPublicationsIcon from '../../icons/publications.svg';
import plusIcon from '../../icons/plus.svg';
import ecosystemIcon from '../../icons/ecosystem.svg';
import entitiesIcon from '../../icons/entities2.svg';



import { AsideItem, AsideItemB,AsideWrapper, Bookmarks, User, UserBookmarks,Li, UserImg, UserJobTitle, UserName} from './aside.style';


export const Aside: FC = () =>{
    return(
        <AsideWrapper>
            <AsideItem bgColor = "white">
                <User>
                    <UserImg></UserImg>
                    <UserName>Humberta Swift</UserName>
                    <UserJobTitle>Job title - Company</UserJobTitle>
                </User>
                <UserBookmarks>
                    <Li beforeImgUrl ={networkIcon} afterImgUrl = {userPlusIcon} padding = '10px' border><Link to="/EntitiesPage">Your Network</Link></Li>
                    <Li beforeImgUrl ={yourPublicationsIcon} afterImgUrl = {plusIcon} padding = '10px' border><Link to="/PublicationsPage">Your Publications</Link></Li>
                </UserBookmarks>
            </AsideItem>
            <AsideItemB>
                <Bookmarks>
                    <Li beforeImgUrl ={yourPublicationsIcon} padding = '10px 0px'><Link to="/PublicationsPage">Publications</Link></Li>
                    <Li beforeImgUrl ={ecosystemIcon} padding = '10px 0px'><Link to="/EcosystemPage">Ecosystem</Link></Li>
                    <Li beforeImgUrl ={entitiesIcon} padding = '10px 0px'><Link to="/EntitiesPage">Entities</Link></Li>
                </Bookmarks>
            </AsideItemB>
            
          
        </AsideWrapper>
    );
};