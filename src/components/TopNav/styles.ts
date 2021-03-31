import styled from 'styled-components';
import homeIcon from '../../icons/house.svg'
import search from '../../icons/search.svg'
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding:5px 10px;
  box-shadow: 0 4px 2px -2px #ebedf0;

`;
export const Logo = styled.div`
 margin-right: 15px;
 width: 40px;
 height: 40px;
  img{
   display:block;
   width: 35px;
   height: 35px;
  }
`;

export const Home = styled.div`
  width: 250px;
  height: 40px;
  font-size: 20px;
  font-weight: 400;
  padding:5px;
  
`;

export const RightIcons = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`;


export const IconNoBg =styled.a`
 width: 40px;
 height: 40px;
 align-items: center;
 margin-right: 15px;
 img{
   display:block;
   width: 35px;
   height: 35px
 }
`;
export const Icon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e8e8e8;
  margin-right: 15px;
  position: relative;
  &::before {
    content:'';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #a0a0a0;
    font-size: 14px;
  }
  span {
    background-color: #0381be;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
    right: -7px;
    top: -7px;
    color: #fff;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 535px;
  position: relative;
`;

export const Input = styled.input`
  text-align: center;
  height: 40px;
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e0e3e7;
  font-size: 20px;
  font-weight: 100;
  &::placeholder {
        color: #c3c5c8;
    }
`;
export const Button = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: 0px;
  top: 5px;
  img{
    width: 32px;
    height: 32px;
  }

`;
