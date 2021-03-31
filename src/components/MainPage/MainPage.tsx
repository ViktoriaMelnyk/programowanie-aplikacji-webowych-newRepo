import React, {FC} from 'react';
import styled from 'styled-components';
import { TopNav } from '../TopNav/TopNav.component';
const Wrapper = styled.div`


`
const Content = styled.div`
 background-color: #f5f7f9;
`
const MainPage: FC = () =>{
  return(
    <Wrapper>
      <TopNav>

      </TopNav>
      <Content>
        <div></div>
      </Content>
    </Wrapper>
  );
};
export default MainPage;
