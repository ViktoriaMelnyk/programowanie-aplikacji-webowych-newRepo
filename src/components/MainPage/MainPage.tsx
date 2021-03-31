import React, {FC} from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Aside } from '../Aside/Aside.component';
import { TopNav } from '../TopNav/TopNav.component';
import { PublicationsPage} from '../PublicationsPage/PublicationsPage.component';
import { EntitiesPage} from '../EntitiesPage/EntitiesPage.component';
import { EcosystemPage} from '../EcosystemPage/EcosystemPage.component';

const Wrapper = styled.div`


`
const Content = styled.div`
 display: flex;
 padding: 18px;
 background-color: #f5f7f9;
 flex-basis: 70%;
 width: 100%;
 height: 100vh;
`;
const MainPage: FC = () =>{
  return(
    <Router>
      <Wrapper>
        <TopNav>

        </TopNav>
       <Content>
           <Aside/>
           <Switch>
              <Route path="/PublicationsPage">
                <PublicationsPage/>
              </Route>
              <Route path="/EntitiesPage">
                <EntitiesPage/>
              </Route>
              <Route path="/EcosystemPage">
                <EcosystemPage/>
              </Route>
             </Switch>          
        </Content>
      </Wrapper>

    </Router>
  );
};
export default MainPage;
