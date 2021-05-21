import React, {ChangeEvent, FC, useState} from 'react';
import Icons from '../../../common/Icons';
import { WorkspacesWrapper, WorkspacesTitle } from '../WorkspacesSection/Workspaces.styles';
import { CommentsWrapper } from './CommentsSection.styles';
import { SingleComment } from './SingleComment.component';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import { IPostsReducer } from '../../../reducers/postsReducers';
import { ICommentsReducer } from '../../../reducers/commentsReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { ISingleUser } from '../../../entities/users';
import Pagination from './Pagination.component';
import { ISingleComment } from '../../../entities/comments';
import { Filter } from '../../../TopNav/DropdownContent/CircleMenu.styles';





export const Comments: FC=()=>{
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
    
     const { postsList }= useSelector<IState, IPostsReducer>(globalState => ({
        ...globalState.posts
      }))
    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
      }))

      const { commentsList }= useSelector<IState, ICommentsReducer>(globalState => ({
        ...globalState.comments
      }))
      const [page, setPage] = useState<number>(1);
      const [pageSize] = useState<number>(10);
      const [inputText, setInputText] = useState<string>('');
      const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
      const text= e.target.value;
      setInputText(text);
      }
      const renderResumeWorks = () => {
        if (
          postsList.length > 0 &&
          usersList.length > 0 &&
          photoList.length > 0 &&
          commentsList.length > 0
        ) {
          return commentsList
            .filter((comment) =>
              comment.name.toLowerCase().includes(inputText.toLowerCase())
            )
            .filter(
              (c, index) =>
                index >= (page - 1) * pageSize && index < page * pageSize
            )
            .map((comment) => (
                <SingleComment
                title = {comment.name}
                text = {comment.body}
                companyName = {usersList?usersList[(comment.id - 1) % 10]?.company.name: ''}
                commentType = {comment.id % 3 === 0 ? "Client contract" : "Supplier contract"}
                userName = {usersList?usersList[(comment.id - 1) % 10]?.name : ''}
                logo = {`${Icons.networkIcon}`}
                smallIcon = {`${Icons.networkIcon}`}
                date = {Math.floor(Math.random() * 100)} />

            ));
        } else return "";
      };
    
      return (
        <WorkspacesWrapper>
            <WorkspacesTitle>
                Resume your work  
            </WorkspacesTitle>
            <Filter type="text" placeholder = "filter..." value={inputText} onChange={inputHandler}></Filter>
            
            <CommentsWrapper>{renderResumeWorks()}</CommentsWrapper>
            <Pagination
                currentPage={page}
                pageSize={pageSize}
                totalPage={commentsList.length}
                setPage={setPage}
            />
          
        </WorkspacesWrapper>  
      );
};   
    





