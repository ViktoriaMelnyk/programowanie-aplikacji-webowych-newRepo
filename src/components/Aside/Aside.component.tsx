import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IState} from '../reducers';
import {IUsersReducer} from '../reducers/usersReducers';
import Icons from '../common/Icons';



import { AsideItem, AsideItemB,AsideWrapper, Bookmarks, User, UserBookmarks,Li, UserImg, UserJobTitle, UserName} from './aside.style';


export const Aside: FC = () =>{
    const{ usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));


    return(
        <AsideWrapper>
            {console.log({usersList})}

            <AsideItem bgColor = "white">
                <User>
                    <UserImg imgUrl = {Icons.userIcon}></UserImg>
                    <UserName>{usersList[Math.floor(Math.random() * 10)]?.name}</UserName>
                    <UserJobTitle>{usersList[Math.floor(Math.random() * 10)]?.company.catchPhrase} - {usersList[Math.floor(Math.random() * 10)]?.company.name}</UserJobTitle>
                </User>
                <UserBookmarks>
                    <Li beforeImgUrl ={Icons.userPlusIcon} afterImgUrl = {Icons.userPlusIcon} padding = '10px' border><Link to="/EntitiesPage">Your Network</Link></Li>
                    <Li beforeImgUrl ={Icons.yourPublicationsIcon} afterImgUrl = {Icons.plusIcon} padding = '10px' border><Link to="/PublicationsPage">Your Publications</Link></Li>
                </UserBookmarks>
            </AsideItem>
            <AsideItemB>
                <Bookmarks>
                    <Li beforeImgUrl ={Icons.yourPublicationsIcon} padding = '10px 0px'><Link to="/PublicationsPage">Publications</Link></Li>
                    <Li beforeImgUrl ={Icons.ecosystemIcon} padding = '10px 0px'><Link to="/EcosystemPage">Ecosystem</Link></Li>
                    <Li beforeImgUrl ={Icons.entitiesIcon} padding = '10px 0px'><Link to="/EntitiesPage">Entities</Link></Li>
                </Bookmarks>
            </AsideItemB>
            
          
        </AsideWrapper>
    );
};