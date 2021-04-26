import React, {FC} from 'react';
import {Icons} from '../../../common/Icons'
import { WorkspaceItem } from './WorkspaceItem.component';

import {SliderWrapper, WorkspacesTitle, WorkspacesWrapper} from './Workspaces.styles'

interface IWorkspaces {
    BgimgUrl: string,
    IconUrl: string,
    text: string,
    smallText: string,
    usersNum: number,
    apdateDay: number,
}

const workspacesContent: IWorkspaces[] = [
    {
        BgimgUrl: 'https://picsum.photos/id/10/200',
        IconUrl: `${Icons.contractIcon}`,
        text: 'Client Contract',
        smallText:'Contract',
        usersNum: 150,
        apdateDay: 2,
    },
    {
        BgimgUrl: 'https://picsum.photos/id/4/200',
        IconUrl: `${Icons.contractIcon}`,
        text: 'Client Contract',
        smallText:'Contract',
        usersNum: 22,
        apdateDay: 3,
    },
    {
        BgimgUrl: 'https://picsum.photos/200',
        IconUrl: `${Icons.bookIcon}`,
        text: 'Corporate',
        smallText:'Contract',
        usersNum: 15,
        apdateDay: 22,
    },
    {
        BgimgUrl: 'https://picsum.photos/id/258/200',
        IconUrl: `${Icons.bookIcon}`,
        text: 'Supplier Contract',
        smallText:'Contract',
        usersNum: 150,
        apdateDay: 2,
    },
    {
        BgimgUrl: 'https://picsum.photos/id/258/200',
        IconUrl: `${Icons.bookIcon}`,
        text: 'Supplier Contract',
        smallText:'Contract',
        usersNum: 150,
        apdateDay: 2,
    },
    {
        BgimgUrl: 'https://picsum.photos/id/258/200',
        IconUrl: `${Icons.bookIcon}`,
        text: 'Supplier Contract',
        smallText:'Contract',
        usersNum: 150,
        apdateDay: 2,
    },
    
];
export const Workspaces: FC = () =>{
    const settings = {
		dots: false,
        arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
	};
    const workspaces = workspacesContent
    .map((workspace, index) =>(
        <WorkspaceItem
            key = {index}
            BgimgUrl = {workspace.BgimgUrl}
            IconUrl ={workspace.IconUrl}
            text = {workspace.text}
            smallText = {workspace.smallText}
            usersNum = {workspace.usersNum}
            apdateDay = {workspace.apdateDay}

        />
    ));
    return(
        <WorkspacesWrapper>
            <WorkspacesTitle>Workspaces</WorkspacesTitle>
            <SliderWrapper {...settings}>{workspaces}</SliderWrapper> 
        </WorkspacesWrapper>
    );
};