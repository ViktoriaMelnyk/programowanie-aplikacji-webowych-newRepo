import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import { AsideItem,AsideWrapper, Bookmarks, User, UserBookmarks, UserImg, UserJobTitle, UserName} from './aside.style';

export const Aside: FC = () =>{
    return(
        <AsideWrapper>
            <AsideItem>
                <User>
                    <UserImg><img/></UserImg>
                    <UserName>Humberta Swift</UserName>
                    <UserJobTitle>Job title - Company</UserJobTitle>
                </User>
                <UserBookmarks>
                    <li><a href="#">Your Network</a></li>
                    <li><a href="#">Your Publications</a></li>
                </UserBookmarks>
            </AsideItem>
            
            <Bookmarks>
                <li><Link to="/PublicationsPage">Publications</Link></li>
                <li><Link to="/EcosystemPage">Ecosystem</Link></li>
                <li><Link to="/EntitiesPage">Entities</Link></li>
            </Bookmarks>
          
        </AsideWrapper>
    );
};