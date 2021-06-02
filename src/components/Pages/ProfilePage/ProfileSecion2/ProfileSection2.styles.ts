import styled from 'styled-components';
import { Field, Form } from "formik";
import Icons from '../../../common/Icons';
import { Edit } from '../Profile.styles';
import { UserImg } from '../../../Aside/aside.style';
import DatePicker from "react-datepicker";

export const BigWrapper = styled.div`
  max-width: 930px;
  width: 100%;
  margin-bottom:45px;
  border-top: 1px solid #e0e3e7;
 
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
export const Title2 = styled(Title)`
  color:#4b5268;
  font-size:22px;
  font-weight: 500;
  padding:10px 0;
`;
export const ProfileForm2 = styled(Form)`
    padding: 10px 0;
    padding-bottom:20px;
`;
export const Edit2 = styled(Edit)`
    margin-bottom:0;
`;
export const SelectField = styled(Field)`
  display:block;
  height: fit-content;
  width:fit-content;
  color: #6EAABA;
  border-radius: 0.5rem;
  border: none;
  padding: 10px;
  background-color: #E6F0F3;
  font-size: 20px;
`;
export const SelectField2 = styled(Field)`
  display:block;
  height: fit-content;
  width:fit-content;
  border-radius: 0.5rem;
  border: none;
  padding-left: 50px;
  padding: 10px;
  font-size: 20px;
  margin:0;
  color:#4b5268;
`;
export const InputField = styled(Field)`
  display:block;
  height: fit-content;
  width:fit-content;
  width:100%;
  color: #4b5268;
  border-radius: 0.5rem;
  border: none;
  padding: 10px;
  background-color: transparent;
  display: block;
  font-size: 20px;
`;
export const UserPhoto = styled(UserImg)`
  width: 40px;
  height: 40px;
  margin-left:7px;

`;
export const Row = styled.tr`
    width:100%;
    justify-content: space-between;
    display: flex;
`;
export const TableTitle = styled.th`
    padding-top:20px;
    color:#4b5268;
    font-size:20px;
    font-weight: 500;
`;

export const TableContent = styled.td`
    font-size: 20px;
    font-weight: 500;
    color:#4b5268;
    width:200px;
`;
export const StyledDate = styled(DatePicker)`
  background:transparent;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  color:#4b5268;
  text-align: start;
  padding: 10px 0;
  max-width:200px;

`;



