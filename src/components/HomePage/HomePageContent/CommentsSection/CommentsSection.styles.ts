import styled from 'styled-components';
import {Icons} from '../../../common/Icons';

export const SingleCommentInner = styled.div`
    background-color: #fff;
    margin-bottom: 20px;
    padding: 10px 15px;
    box-shadow: 0 8px 6px -6px #cdd0d7;
`;
export const SingleCommentTitle = styled.div`
    color:#2a3f9d;
    font-size: 20px;
    font-weight: 500;
    margin-bottom:10px;
    
`;
export const CommentInfo = styled.div`
    color: #b4b7ba;
    display: flex;
    font-size: 14px;

`;

export const ComIcon = styled.div`
    width: 20px;
    height: 20px;
    background-position:center;
    background-repeat: no-repeat;
    margin-right: 5px;
`;
export const SingleCommentText = styled.div`
    margin-bottom:10px;
    font-size: 16px;
`;
export const CommentsWrapper = styled.div`
    width: 900px;
    margin:10px 0;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
  width: 100%;

  margin-top: 0.5rem;
  .page {
    color:#2a3f9d;
    font-weight: 600;
    margin-right: 5px;
    min-width: 32px;
    padding: 3px 6px;
    display: block;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
  .page.active {
      background-color: #fff;
      border: 1px solid #2a3f9d;
    }
`;
export const StyledOption = styled.option `

`;
export const StyledSelect = styled.select`
	position: absolute;
	left: 45px;
	width: 120px;
	border: none;
	padding: 10px;
	background-color: inherit;
  color: #2a3f9d;
	font-weight: 700;
  font-size:12px;
	text-align: center;
  cursor: pointer;
	outline: none;
	appearance: none;
  align-items: center;
`;
export const SelectorContainer = styled.div <{beforeImg?: string, afterImg?:string }>`
  width: 130px;
  height: 30px;
  position:relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  border-radius:3px;
  font-size:16px;
  &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 10px;
    width: 20px;
    height: 20px;
  }

  &::after{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.afterImg}')`};
    position: absolute;
    top:3px;
    right: 0px;
    cursor:pointer;


  }
`;




