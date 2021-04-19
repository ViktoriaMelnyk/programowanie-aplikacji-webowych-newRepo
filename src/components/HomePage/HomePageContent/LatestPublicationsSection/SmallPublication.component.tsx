import React, {FC} from 'react';
import { UserInfo, PublicationInfo, SmallPublicationsInner, SmallPublicationText, SmallPublImg, PublDate } from './LatestPublications.styles';

interface SmallPublicationProps {
    imgUrl: string,
    text: string,
    userName: string,
    date: string,
}
export const SmallPublication: FC<SmallPublicationProps> = (props) =>{
    const {imgUrl, text, userName,date} = props;
    return(
        <SmallPublicationsInner>
            <SmallPublImg style = {{backgroundImage: `url(${imgUrl})`}}></SmallPublImg>
            <PublicationInfo>
                <SmallPublicationText>{text}</SmallPublicationText>
                <UserInfo><PublDate>{date}</PublDate>{userName}</UserInfo>
            </PublicationInfo>
        </SmallPublicationsInner>
    );
};