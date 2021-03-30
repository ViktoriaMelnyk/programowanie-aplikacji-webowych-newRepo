import React, {FC} from 'react';
import styled from 'styled-components';
import { DropdownComp } from './Dropdown.component';

const Wrapper = styled.div`

`
const InnerWrapper = styled.div`

`
const Home = styled.div`

`
const Input = styled.input`

`
const RightIcons =styled.input`

`

export const TopNav: FC = () =>{
  return(

    <Wrapper>
        <InnerWrapper>
           <img src="" alt=""/>
           <Home>
                
                <p>Home</p>  
            </Home>
            <DropdownComp/>
            <Input></Input>
            <RightIcons>
                
            </RightIcons>

        </InnerWrapper>
    </Wrapper>

  );
};