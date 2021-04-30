import React, {FC} from 'react';
import styled from 'styled-components';
import { Comments } from './HomePageContent/CommentsSection/CommentsSection.component';
import { LatestPublications } from './HomePageContent/LatestPublicationsSection/LatestPublications.component';
import { Workspaces } from './HomePageContent/WorkspacesSection/Workspaces.component';
const HomePageWrapper= styled.div`
  max-width: 930px;
  padding: 0px 15px;
  margin: 0 auto;
`;

export const HomePage: FC = () =>{
    return(
        <HomePageWrapper>
            <LatestPublications/>
            <Workspaces/>
            <Comments/>
        </HomePageWrapper>
    );
};