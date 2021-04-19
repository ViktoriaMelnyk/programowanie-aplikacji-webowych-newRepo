import React, {FC} from 'react';
import styled from 'styled-components';
import { LatestPublications } from './HomePageContent/LatestPublicationsSection/LatestPublications.component';


export const HomePage: FC = () =>{
    return(
        <>
            <LatestPublications/>
        </>
    );
};