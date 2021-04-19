import React, {FC} from 'react';
import { BigPublication } from './BigPublication.component';
import { SmallPublication } from './SmallPublication.component';
import { PublicationsWrapper, SmallPublicationsWrapper} from './LastPublications.styles'

interface IPublications {
    imgUrl: string,
    text: string,
    userName: string,
    date: string,
}

const publicationsContent: IPublications[] = [
    {
    imgUrl: 'https://picsum.photos/id/258/200',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
    userName:'John Doe',
    date: '07 Jan 2020',
    },
    {
        imgUrl: 'https://picsum.photos/200',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
        userName: 'John Doe',
        date: '07 Jan 2020',
    },
    {
        imgUrl: 'https://picsum.photos/200',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
        userName: 'John Doe',
        date: '07 Jan 2020',
    },
    {
        imgUrl: 'https://picsum.photos/200',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
        userName: 'John Doe',
        date: '07 Jan 2020',
    },
    
];

export const LatestPublications: FC = () =>{
    const publications = publicationsContent
    .slice(1,4)
    .map((publication, index) =>(
        <SmallPublication
            key = {index}
            imgUrl = {publication.imgUrl}
            text = {publication.text}
            userName = {publication.userName}
            date = {publication.date}

        />
    ));
    return(
        <PublicationsWrapper>
            <BigPublication
                imgUrl = {publicationsContent[0].imgUrl}
                text = {publicationsContent[0].text}
                userName = {publicationsContent[0].userName}
                date = {publicationsContent[0].date}
            />
            <SmallPublicationsWrapper>
                <p>Latest publications</p>
                {publications}
                <a href="">See more publications</a>
            </SmallPublicationsWrapper>
        </PublicationsWrapper>
    );
};