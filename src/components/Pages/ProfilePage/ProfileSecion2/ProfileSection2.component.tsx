import React, { FC, useState } from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import { BigWrapper, Edit2, ProfileForm2, SmallWrapper, SmallWrapperForFields, SelectField, Title, Title2, InputField, UserPhoto } from "./ProfileSection2.styles";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IPhotoReducer } from "../../../reducers/photoReducers";
import Icons from "../../../common/Icons";
import { ISingleUser } from "../../../entities/users";
import { HeaderItem } from "../Profile.styles";



export const ProfileSectionTwo: FC = () => {
 
    const [toggle, setToggle] =useState(true)
    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
      }))
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
      const user1 = usersList[1];
      const user2 = usersList[2];
    const data={
    expertise: 'Mergers and acquisition',
    spec1: 'Cross border operation',
    spec2: 'Transaction over 500M Є/$',
    adm1: 'Paris bar operation',
    adm2: 'Tunisian bar association',
    counties: 'Tunisia',
    fee:'610€/hour (Negociated)',
    terms: 'Mounthly 10k€ retainer - see with Jenny Smith',
    serv:'Corporate M&A and international acquistions',
    user:'',
    }
    const[information]= useState(data);

      function userPhoto(user : ISingleUser)  {
        if(user !== undefined){
          for (let i = 0; i < photoList.length; i++) {
            const j = photoList[i];
            if(j.id===user.id){
               return j.url
            }
          }
        }
          return 'https://picsum.photos/id/258/200';
      }

    return (
        <BigWrapper>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    expertise: information.expertise?information.expertise : '',
                    spec1: 'Cross border operation',
                    spec2: 'Transaction over 500M Є/$',
                    admission1: 'Paris bar operation',
                    admission2: 'Tunisian bar association',
                    counties: 'Tunisia',
                    fee: information.fee?information.fee : '',
                    terms:information.terms?information.terms:'',
                    file: '',
                    serv: information.serv?information.serv:'',
                    user:'Name'
                }}
                    onSubmit={(info) => console.log(info)}
            >
                {(props: FormikProps<any>) => (
                <ProfileForm2>
                    <SmallWrapper>
                        <Title>Expertise</Title>
                        <Edit2 type = 'submit'onClick={() => setToggle((prevToggle => !prevToggle))}/>
                    </SmallWrapper>
                    <SelectField as="select" name="expertise" disabled = {toggle} >
                        {['Mergers and acquisition',"Chemistry","Another"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                    </SelectField>
                    <Title>Specialities</Title>
                    <SmallWrapperForFields>
                        <SelectField as="select" name="spec1" disabled = {toggle} >
                            {['Cross border operation',"Chemistry","Another"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                        </SelectField>
                        <SelectField as="select" name="spec2" disabled = {toggle} >
                            {["Transaction over 500M Є/$","Chemistry","Another"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                        </SelectField>
                    </SmallWrapperForFields>
                    <Title>Admission to practice law</Title>
                    <SmallWrapperForFields>
                        <SelectField as="select" name="admission1" disabled = {toggle} >
                            {["Paris bar operation","Chemistry","Another"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                        </SelectField>
                        <SelectField as="select" name="admission2" disabled = {toggle} >
                            {["Tunisian bar association","Chemistry","Another"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                        </SelectField>
                    </SmallWrapperForFields>
                    <Title>Counties</Title>
                    <SelectField as="select" name="counties" disabled = {toggle} style={{marginBottom:'30px'}} >
                            {["Tunisia","Poland","Ukraine"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                    </SelectField>
                    <BigWrapper>
                    <Title2 >Panel informations</Title2>
                    <Title>Hourly fee</Title>
                    <InputField name="fee" disabled = {toggle}/>
                    <Title>Terms & conditions</Title>
                    <InputField name="terms" disabled = {toggle}/>
                    <InputField type= "file" name="file" disabled = {toggle}/>
                    <Title2 >Services & projects</Title2>
                    <InputField name="serv" disabled = {toggle}/>
                    <Title2 >Internal correspondants</Title2>
                    </BigWrapper>
                    <SmallWrapper style={{marginBottom:'7px', background:'#F5F7F9', padding:'5px 0'}}>
                        <UserPhoto imgUrl = {photoList? userPhoto(user1):''}/>
                        <SelectField as="select" name="user" disabled = {toggle} style={{background:'transparent', color:'#8C91A0'}}>
                            {usersList.map((user)=>(<option key={user.id} value={user.name}>{user.name}</option>))}
                        </SelectField>
                        <HeaderItem beforeImg = {Icons.messageIcon} style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Message</HeaderItem>
                        <HeaderItem beforeImg = {Icons.peopleIcon}  style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Profile</HeaderItem>
                    </SmallWrapper>
                    <SmallWrapper style={{marginBottom:'10px', background:'#F5F7F9', padding:'5px 0'}}>
                        <UserPhoto imgUrl = {photoList? userPhoto(user2):''}/>
                        <SelectField as="select" name="user" disabled = {toggle}style={{background:'transparent', color:'#8C91A0'}}>
                            {usersList.map((user)=>(<option key={user.id} value={user.name}>{user.name}</option>))}
                        </SelectField>
                        <HeaderItem beforeImg = {Icons.messageIcon} style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Message</HeaderItem>
                        <HeaderItem beforeImg = {Icons.peopleIcon}  style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Profile</HeaderItem>
                    </SmallWrapper>
                </ProfileForm2>
                
                )}
           </Formik> 
        </BigWrapper>
    );
}