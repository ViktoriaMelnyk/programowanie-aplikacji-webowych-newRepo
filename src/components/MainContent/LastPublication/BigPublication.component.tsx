import React, {FC} from 'react';
import { BigPublicationText, BigPublicationWrapper, BigPublicationInfo } from './LastPublications.styles';

interface IBigPublicationProps {
    imgUrl?: string,
    text?: string,
    userName?: string,
    date?: string,
};
export const BigPublication: FC<IBigPublicationProps> = (props) =>{
    const {imgUrl, text, userName,date} = props;
    return(
        <BigPublicationWrapper style = {{backgroundImage: `url(${imgUrl})`}}>
            
            <BigPublicationInfo>
                <BigPublicationText>{text}</BigPublicationText>
                {date} {userName}
            </BigPublicationInfo>
            
        </BigPublicationWrapper>

    );
};