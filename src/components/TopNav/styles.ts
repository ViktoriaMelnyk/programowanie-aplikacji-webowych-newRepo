import styled from 'styled-components';



export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  padding:5px 10px;
  box-shadow: 0 8px 6px -6px #cdd0d7;
  background-color: #fff;

`;
export const Logo = styled('div') <{imgUrl?:string}>`
 margin-right: 15px;
 width: 35px;
 height: 35px;
 background-image:  ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
`;

export const Home = styled.div`
  width: 250px;
  height: 40px;
  font-size: 20px;
  padding:5px;
  
`;

export const RightIcons = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`;



export const A = styled('a') <{imgUrl: string, bgColor?:string}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => `${props.bgColor}`};
  margin-right: 15px;
  position: relative;
  
  &::before {
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor:pointer;
  }
  span {
    background-color:  #0381be;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
    right: -7px;
    top: -7px;
    color: #fff;
    cursor:pointer;
  }
`;

export const DropdownA = styled('a') <{beforeImg: string, afterImg?:string}>`
  width: 260px;
  height: 40px;
  position:relative;
  display: flex;
  align-items: flex-start;
  padding: 8px;
  padding-left: 50px;
  cursor: pointer;
  &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 10px;
  }

  &::after{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.afterImg}')`};
    position: absolute;
    top:5px;
    right: 10px;
    margin: 0px 5px;
    cursor:pointer;

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
  outline: none;
  cursor:pointer;
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
  cursor:pointer;
  img{
    width: 32px;
    height: 32px;
  }

`;
export const DropdownComp = styled.div`
  margin-left:50px;
  width: 260px;
  height: 40px;
  background-color: #f5f7f9;
  position: relative;
`;
export const DropdownWrapper = styled.div`

`;
