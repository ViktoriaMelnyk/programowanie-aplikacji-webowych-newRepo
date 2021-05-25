import styled from 'styled-components';
import { Field, Form } from "formik";
import Icons from '../../../common/Icons';
import { Edit } from '../Profile.styles';

export const BigWrapper = styled.div`
  max-width: 930px;
  width: 100%;
  margin-bottom:30px;
 
`;
export const SmallWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 
`;
export const SmallWrapperForFields = styled(SmallWrapper)`
    max-width: 550px;
 
`;
export const Title = styled.div`
 color: #b4b7ba;
 font-size:20px;
 margin:10px;
`;
export const ProfileForm2 = styled(Form)`
    padding: 10px 0;
    padding-bottom:20px;
    border-bottom: 1px solid #e0e3e7;

`;
export const Edit2 = styled(Edit)`
    margin-bottom:0;
`;
export const TextField = styled(Field)`
  display:block;
  height: fit-content;
  width:fit-content;
  color: #6EAABA;
  border-radius: 0.5rem;
  border: none;
  padding: 10px;
  background-color: #E6F0F3;
  display: block;
  font-weight:${({ bold }) =>
    bold ? '700' : '400'};
  font-size: 20px;
`;
