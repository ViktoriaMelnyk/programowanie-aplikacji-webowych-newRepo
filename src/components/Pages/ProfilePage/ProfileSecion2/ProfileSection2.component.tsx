import React, { FC, useState } from "react";
import { Formik, Field, Form } from "formik";
import { BigWrapper, Edit2, ProfileForm2, SmallWrapper, SmallWrapperForFields, TextField, Title } from "./ProfileSection2.styles";
import { Edit, ProfileForm } from "../Profile.styles";



export const ProfileSectionTwo: FC = () => {
    const data={
    expertise: 'Mergers and acquisition',
    spec1: 'Cross border operation',
    spec2: 'Transaction over 500M Є/$',
    adm1: 'Paris bar operation',
    adm2: 'Tunisian bar association',
    counties: 'Tunisia',
    }
    const[information, setInformation]= useState(data);
    return (
        <BigWrapper>
            <Formik 
            enableReinitialize={true} 
            initialValues={{
              expertise: information.expertise? information.expertise: '',
              spec1: information.spec1? information.spec1: '',
              spec2: information.spec2? information.spec2: '',
              admission1: information.adm1? information.adm1: '',
              admission2: information.adm2? information.adm2: '',
              counties: information.counties? information.counties: '',
           }}  onSubmit={(info) => console.log(info)}>
           
            <ProfileForm2>
                <SmallWrapper>
                    <Title>Expertise</Title>
                    <Edit2 type = 'submit'/>
                </SmallWrapper>
                <TextField name="expertise"/>
                <Title>Specialities</Title>
                <SmallWrapperForFields>
                    <TextField name="spec1"/>
                    <TextField name="spec2"/>
                </SmallWrapperForFields>
                <Title>Admission to practice law</Title>
                <SmallWrapperForFields>
                    <TextField name="admission1"/>
                    <TextField name="admission2"/>
                </SmallWrapperForFields>
                <Title>Counties</Title>
                <TextField name="counties"/>
            </ProfileForm2>
            </Formik>
        </BigWrapper>
    );
}