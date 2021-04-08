import styled from 'styled-components';
import { Li, UserBookmarks } from '../../Aside/aside.style';
import { Input } from '../styles';

export const Wrapper = styled.div`
    width: 260px;
    position: absolute;
    top: auto;
    left: 0px;
    overflow: hidden;
    border-top: 1px solid #e0e0e0;
    transition: all 0.3s;
    z-index: 1;
    background-color: #e8e8e8;
    align-items: center;

`;

export const CircleItem = styled.div`
  background-color: #fff;
  transition: all 0.3s;
  border: 0px solid #e0e0e0;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 0px 23px;
  display: flex;
  align-items: center;
`;

export const CircleUl = styled(UserBookmarks)`
  padding: 5px 20px;
  overflow: hidden;
`;

export const Filter = styled(Input)`
    height: 25px;
    width: 240px;
    margin: 0 auto;
    font-size: 14px;

`;

export const Title = styled.p`
    display: block;
    padding: 10px;
    margin: 0px;
`;
export const CircleLi = styled(Li)`
   height: 25px;
   padding-left: 40px;
   a{
        font-size: 16px;
    }
`;

