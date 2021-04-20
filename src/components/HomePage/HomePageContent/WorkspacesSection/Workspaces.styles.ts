import styled from 'styled-components';
import {Icons} from '../../../common/Icons'

export const WorkspacesTitle = styled.div`
    padding: 25px 0px 15px 40px;
    font-weight: 700;
    font-size: 22px;
    color: #4b5268;
`;

export const WorkspacesWrapper = styled.div`
    
`;
export const WorkspaceItemWrapper = styled.div`
  width:280px;
  height: 205px;
  margin-right:10px;
  background-color: #fff;
  box-shadow: 0 8px 6px -6px #cdd0d7;
  
`;
export const SliderWrapper = styled.div`
    
   display: flex;
   height: 309px;
   padding: 5px 0;
   overflow-x: hidden;
   
`;
export const BgIcon = styled.div`
  height: 90px;
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Content = styled.div`
   position: relative;
   color: #192136;
   padding: 10px;
   padding-right: 3px;
`;
export const SmallIcon = styled.div`
    width: 80px;
    height: 80px;
    align-items: center;
    text-align: center;
    background-color: #fff;
    position:absolute;
    top: -50px;
    box-shadow: 0 8px 6px -6px #cdd0d7;
    img{
        display: inline-block;
        width:50px;
        height: 50px;
        margin-top: 16px;
    }

`;
export const Text = styled.div`
    padding: 0px 0px 20px 85px;
    font-weight: 500;
`;
export const SmallContentInner = styled.div`
    display: flex;
    font-size: 14px;
    margin-bottom:5px;
`;
export const MiniIcon = styled.div`
    width: 22px;
    height: 22px;
    background-position:center;
    background-repeat: no-repeat;
    margin-right: 5px;
`;
export const SmallText = styled.div`
    margin-right: 15px;
    position: relative;
    &::after{
        content: " - ";
        position: absolute;
        font-size: 12px;
        font-weight: 500;
        right: -8px;
    }
`;
export const Users = styled.div`
    position: relative;
    padding-left: 30px;
    &::before{
        content: url('${Icons.peopleIcon}');
        position: absolute;
        left: 0;
        bottom: 0;
        width: 22px;
        height: 22px;
    }
`;
export const Update = styled.div`
    font-size: 12px;
    padding: 2px 50px 0px 0px;
`;

