import React, {FC} from 'react';
import Icons from '../../../common/Icons';
import { WorkspacesWrapper, WorkspacesTitle } from '../WorkspacesSection/Workspaces.styles';
import { CommentsWrapper } from './CommentsSection.styles';
import { SingleComment } from './SingleComment.component';


interface IComments {
    title: string,
    text: string,
    companyName: string,
    commentType:string,
    logo: string,
    smallIcon: string,
    date: number,
}

const commentsContent: IComments[] = [
    {
    title: 'World company SAS',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
    companyName:'Subsid. corp',
    commentType: 'Corporate',
    logo:`${Icons.homeIcon}`,
    smallIcon: `${Icons.contractIcon}`,
    date:  2,
    },
    {
        title: 'World company SAS',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
        companyName:'Subsid. corp',
        commentType: 'Corporate',
        logo:`${Icons.homeIcon}`,
        smallIcon: `${Icons.contractIcon}`,
        date:  2,
        },
        {
            title: 'World company SAS',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
            companyName:'Subsid. corp',
            commentType: 'Corporate',
            logo:`${Icons.homeIcon}`,
            smallIcon: `${Icons.contractIcon}`,
            date:  2,
            },

    
];
export const Comments: FC = () =>{
    const comments = commentsContent
    .map((comment, index) =>(
        <SingleComment
            key = {index}
            title = {comment.title}
            text = {comment.text}
            companyName = {comment.companyName}
            commentType = {comment.commentType}
            logo = {comment.logo}
            smallIcon = {comment.smallIcon}
            date = {comment.date}

        />
    ));
    return(
        <WorkspacesWrapper>
            <WorkspacesTitle>Resume your work</WorkspacesTitle>
            <CommentsWrapper>{comments}</CommentsWrapper> 
        </WorkspacesWrapper>
    );
};