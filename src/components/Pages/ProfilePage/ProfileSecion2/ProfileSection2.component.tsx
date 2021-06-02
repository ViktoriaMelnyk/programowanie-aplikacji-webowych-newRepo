import React, { FC, useState } from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import { BigWrapper, Edit2, ProfileForm2, SmallWrapper, SmallWrapperForFields, SelectField, Title, Title2, InputField, UserPhoto, Row, TableTitle, TableContent, SelectField2, StyledDate} from "./ProfileSection2.styles";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IPhotoReducer } from "../../../reducers/photoReducers";
import Icons from "../../../common/Icons";
import { ISingleUser } from "../../../entities/users";
import { HeaderItem, SeeProfile} from "../Profile.styles";
import "react-datepicker/dist/react-datepicker.css";



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
    propName1:'Operation Ti...',
    propName2:'Op. Prometh...',
    propName3:'Op. Latandre',
    ent1:'Renault Co...',
    ent2:'Renault HQ',
    ent3:'Renault Br...',
    location: 'France',
    exp1:'',
    firm1:'Racine',
    firm2:'Cliford Chance',
    firm3:'SVZ',
    amount:'2300',
    amount2:'5600',
    amount3:'4500'
    }
    const [date1, setDate1] = useState(new Date(2018, 1, 20))
    const [date2, setDate2] = useState(new Date(2019, 2, 18))
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
                    spec1: information.spec1?information.spec1:'',
                    spec2: information.spec2?information.spec2:'',
                    admission1: information.adm1?information.adm1:'',
                    admission2: information.adm2?information.adm2:'',
                    counties: information.counties?information.counties:'',
                    fee: information.fee?information.fee : '',
                    terms:information.terms?information.terms:'',
                    file: '',
                    serv: information.serv?information.serv:'',
                    user:'',
                    propName1: information.propName1?information.propName1:'',
                    propName2:information.propName2?information.propName2:'',
                    propName3:information.propName3?information.propName3:'',
                    ent1:information.ent1?information.ent1:'',
                    ent2:information.ent2?information.ent2:'',
                    ent3:information.ent3?information.ent3:'',
                    location: information.location?information.location:'',
                    exp1: information.exp1?information.exp1:'',
                    firm1:information.firm1?information.firm1:'',
                    firm2:information.firm2?information.firm2:'',
                    firm3:information.firm3?information.firm3:'',
                    amount:information.amount?information.amount:'',
                    amount2:information.amount2?information.amount2:'',
                    amount3:information.amount3?information.amount3:'',
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
                    <InputField type= "file" name="file" disabled = {toggle} style={{ background:'#F5F7F9'}}/>
                    <Title2 >Services & projects</Title2>
                    <InputField name="serv" disabled = {toggle}/>
                    <Title2 >Internal correspondants</Title2>
                    </BigWrapper>
                    <SmallWrapper style={{marginBottom:'7px', background:'#F5F7F9', padding:'5px 0'}}>
                        <UserPhoto imgUrl = {photoList? userPhoto(user1):''}/>
                        <SelectField2 as="select" name="user" disabled = {toggle}>
                            {usersList.map((user)=>(<option key={user.id} value={user.name}>{user.name}</option>))}
                        </SelectField2>
                        <HeaderItem beforeImg = {Icons.messageIcon} style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Message</HeaderItem>
                        <HeaderItem beforeImg = {Icons.peopleIcon}  style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Profile</HeaderItem>
                    </SmallWrapper>
                    <SmallWrapper style={{marginBottom:'10px', background:'#F5F7F9', padding:'5px 0'}}>
                        <UserPhoto imgUrl = {photoList? userPhoto(user2):''}/>
                        <SelectField2 as="select" name="user" disabled = {toggle}>
                            {usersList.map((user)=>(<option key={user.id} value={user.name}>{user.name}</option>))}
                        </SelectField2>
                        <HeaderItem beforeImg = {Icons.messageIcon} style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Message</HeaderItem>
                        <HeaderItem beforeImg = {Icons.peopleIcon}  style={{fontSize: '20px', paddingLeft:'45px', color:'#8C91A0'}}>Profile</HeaderItem>
                    </SmallWrapper>
                    <BigWrapper>
                        <Title2>Proposals</Title2>
                        <Row style= {{marginBottom: '20px',borderBottom: "1px solid #e0e3e7", padding: '5px 20px'}}>
                            <TableContent><TableTitle>Name</TableTitle></TableContent>
                            <TableContent><TableTitle>Entity</TableTitle></TableContent>
                            <TableContent><TableTitle>Location</TableTitle></TableContent>
                            <TableContent><TableTitle>Expertise</TableTitle></TableContent>
                            <TableContent><TableTitle>Date</TableTitle></TableContent>
                            <TableContent><TableTitle>Firm</TableTitle></TableContent>
                        </Row>
                        <Row>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <InputField name="ent1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="location" disabled = {toggle} >
                            {['France',"USA","Italia"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="exp1" disabled = {toggle} style={{ color:"#4b5268", }}>
                            {['#Tax',"#M&A","Social"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                                <StyledDate selected={date1} onChange={(date) => setDate1(date as Date)} disabled = {toggle}></StyledDate> 
                            </TableContent>
                            <TableContent>
                            <InputField name="firm1" disabled = {toggle}/>
                            </TableContent>
                            

                        </Row>
                        <Row>
                            <TableContent>
                            <InputField name="propName2" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <InputField name="ent2" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="location" disabled = {toggle} >
                            {["USA","France","Italia"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="exp1" disabled = {toggle} >
                            {["#M&A","#Tax","Social"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                                <StyledDate selected={date2} onChange={(date) => setDate2(date as Date)} disabled = {toggle}></StyledDate> 
                            </TableContent>
                            <TableContent>
                            <InputField name="firm2" disabled = {toggle}/>
                            </TableContent>
                            

                        </Row>
                        <Row>
                            <TableContent>
                            <InputField name="propName3" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <InputField name="ent3" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="location" disabled = {toggle} >
                            {["Italia","France","USA"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="exp1" disabled = {toggle} >
                            {["Social","#Tax","#M&A"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                                <StyledDate selected={date1} onChange={(date) => setDate1(date as Date)} disabled = {toggle}></StyledDate> 
                            </TableContent>
                            <TableContent>
                            <InputField name="firm3" disabled = {toggle}/>
                            </TableContent>
                        </Row>
                        
                        <SeeProfile style ={{float: 'right', paddingBottom: '20px'}}>See more proposals</SeeProfile>
                    </BigWrapper>
                    <BigWrapper>
                        <Title2>Internal Revievs</Title2>
                        <Row style= {{marginBottom: '10px',   borderBottom: "1px solid #e0e3e7", padding: '5px 20px'}}>
                            <TableContent><TableTitle>Name</TableTitle></TableContent>
                            <TableContent><TableTitle>Entity</TableTitle></TableContent>
                            <TableContent><TableTitle>Location</TableTitle></TableContent>
                            <TableContent><TableTitle>Expertise</TableTitle></TableContent>
                            <TableContent><TableTitle>Date</TableTitle></TableContent>
                        </Row>
                        <Row>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <InputField name="ent1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="location" disabled = {toggle} >
                            {['France',"USA","Italia"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="exp1" disabled = {toggle}>
                            {['#Tax',"#M&A","Social"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                                <StyledDate selected={date1} onChange={(date) => setDate1(date as Date)} disabled = {toggle}></StyledDate> 
                            </TableContent>
                        </Row>
                        <Row>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <InputField name="ent1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="location" disabled = {toggle} >
                            {['France',"USA","Italia"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="exp1" disabled = {toggle} >
                            {['#Tax',"#M&A","Social"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                                <StyledDate selected={date1} onChange={(date) => setDate1(date as Date)} disabled = {toggle}></StyledDate> 
                            </TableContent>
                        </Row>
                        <Row>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <InputField name="ent1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="location" disabled = {toggle}>
                            {["USA","Italia",'France'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                            <SelectField2 as="select" name="exp1" disabled = {toggle} style={{ color:"#4b5268", }}>
                            {['#Tax',"#M&A","Social"].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                            </SelectField2>
                            </TableContent>
                            <TableContent>
                                <StyledDate selected={date1} onChange={(date) => setDate1(date as Date)} disabled = {toggle}></StyledDate> 
                            </TableContent>
                        </Row>
                        <SeeProfile style ={{marginTop:'20px', color: '#4b5268'}}>See more proposals</SeeProfile>
                    </BigWrapper>
                    <BigWrapper>
                        <Title2>Amount of fees</Title2>
                        <Row style= {{marginBottom: '20px', marginLeft:'20px'}}>
                            <TableContent><TableTitle>Year</TableTitle></TableContent>
                            <TableContent><TableTitle>Cost center</TableTitle></TableContent>
                            <TableContent><TableTitle>Total amount</TableTitle></TableContent>
                            <TableContent><TableTitle>Law firm</TableTitle></TableContent>
                        </Row>
                        <Row>
                            <TableContent>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['2015','2016','2017','2018','2019','2020','2021'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent style= {{display:'flex', maxWidth:'140px'}}>
                                <InputField name="amount" disabled = {toggle}/>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['$','€','£'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="firm1" disabled = {toggle}/>
                            </TableContent>                            
                        </Row>
                        <Row>
                            <TableContent>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['2015','2016','2017','2018','2019','2020','2021'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent style= {{display:'flex', maxWidth:'140px'}}>
                                <InputField name="amount" disabled = {toggle}/>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['$','€','£'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="firm1" disabled = {toggle}/>
                            </TableContent>                            
                        </Row>
                        <Row>
                            <TableContent>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['2015','2016','2017','2018','2019','2020','2021'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent style= {{display:'flex', maxWidth:'140px'}}>
                                <InputField name="amount" disabled = {toggle}/>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['$','€','£'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="firm1" disabled = {toggle}/>
                            </TableContent>                            
                        </Row>
                        <Row>
                            <TableContent>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['2015','2016','2017','2018','2019','2020','2021'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent style= {{display:'flex', maxWidth:'140px'}}>
                                <InputField name="amount" disabled = {toggle}/>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['$','€','£'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="firm1" disabled = {toggle}/>
                            </TableContent>                            
                        </Row>
                        <Row>
                            <TableContent>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['2017','2016','2015','2018','2019','2020','2021'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent style= {{display:'flex', maxWidth:'140px'}}>
                                <InputField name="amount" disabled = {toggle}/>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['$','€','£'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="firm3" disabled = {toggle}/>
                            </TableContent>                            
                        </Row>
                        <Row>
                            <TableContent>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['2016','2015','2017','2018','2019','2020','2021'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="propName1" disabled = {toggle}/>
                            </TableContent>
                            <TableContent style= {{display:'flex', maxWidth:'140px'}}>
                                <InputField name="amount" disabled = {toggle}/>
                                <SelectField2 as="select" name="year" disabled = {toggle}>
                                {['$','€','£'].map((i:string)=>(<option key={i} value={i}>{i}</option>))}
                                </SelectField2>
                            </TableContent>
                            <TableContent>
                            <InputField name="firm2" disabled = {toggle}/>
                            </TableContent>                            
                        </Row>
                    </BigWrapper>
                </ProfileForm2>
                )}
           </Formik> 
        </BigWrapper>
    );
}