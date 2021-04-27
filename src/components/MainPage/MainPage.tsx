import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Aside } from '../Aside/Aside.component';
import { TopNav } from '../TopNav/TopNav.component';
import { PublicationsPage} from '../Pages/PublicationsPage.component';
import { EntitiesPage} from '../Pages/EntitiesPage.component';
import { EcosystemPage} from '../Pages/EcosystemPage.component';
import { PeoplePage} from '../Pages/PeoplePage.component';
import { AdminPage} from '../Pages/AdminPage.component';
import { HomePage } from '../HomePage/HomePage.component';
import { ClientContractPage } from '../Pages/ClientContractPage.component';

import {getUsers} from '../../actions/actionsTypes/usersActions';

type GetUsers = ReturnType<typeof getUsers>

const Wrapper = styled.div`


`
const Content = styled.div`
 max-width: 900;
 display: flex;
 padding: 18px;
 background-color: #f5f7f9;
 height: 100vh;
`;

const MainPage: FC = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, []);

  return(
    <Router>
      <Wrapper>
        <TopNav></TopNav>
       <Content>
           <Aside/>
           
           <Switch>
              <Route path="/PublicationsPage">
                <PublicationsPage/>
              </Route>
              <Route path="/AdminPage">
                <AdminPage/>
              </Route>
              <Route path="/PeoplePage">
                <PeoplePage/>
              </Route>
              <Route path="/EntitiesPage">
                <EntitiesPage/>
              </Route>
              <Route path="/EcosystemPage">
                <EcosystemPage/>
              </Route>
              <Route path="/ClientContractPage">
                <ClientContractPage/>
              </Route>
              <Route path="/">
                <HomePage/>
              </Route>
            </Switch>
             
        </Content>
      </Wrapper>

    </Router>
  );
};
export default MainPage;
