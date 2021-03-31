import styled from 'styled-components';
import peopleIcon from '../../icons/people.svg';

export const AsideWrapper = styled.aside`
  margin-right: 30px;
`;
export const AsideItem = styled.div`
   width: 230px;
   height: 245px;
   background-color: #fff;
   margin: 0px 22px;
   padding: 10px 15px 7px;
   box-shadow: 0 8px 6px -6px #cdd0d7;
`;
export const User = styled.div`
    align-items: center;
    text-align: center;
    
`;
export const UserImg =styled.a`
 width: 70px;
 height: 70px;
 align-items: center;
 margin-right: 15px;
 background-color: #546e7a;
 border-radius: 50%;
 img{
   display:block;
   border-radius: 50%;
   width: 70px;
   height: 70px;
 }
`;
export const UserName = styled.div`
 padding: 2px;
 margin: 5px;
 text-align: center;
 color:#2a3f9d;
 font-size: 20px;
 font-weight: 500;
`;
export const UserJobTitle = styled.div`
 padding: 2px;
 margin: 5px;
 text-align: center; 
 color: #b4b7ba;
`;
export const UserBookmarks = styled.ul`
   border-top: #e0e3e7 1px solid;
    li{
        padding: 5px 0px;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 20px;
        &::before {
            content: url(${peopleIcon});
            position: absolute;
            left: -20px;
            width: 15px;
            height: 15px;
            margin: 0px 10px;
        }
        &::after{
            content: url(${peopleIcon});
            position: absolute;
            right: 0px;
            width: 15px;
            height: 15px;
            margin: 0px 10px;
        }
        
        a{
            color: #192136;
            font-size: 18px;
            font-weight: 500;
            outline: none;
        }
        
    }
`;


export const Bookmarks = styled.ul`
    width: 230px;
    height: 130px
    padding-top: 10px;
    margin: 0 22px;
    
    li{
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 20px;
        
        a{
            color: #192136;
            font-size: 20px;
            font-weight: 500;
            outline: none;
        }
        
    }
`;
