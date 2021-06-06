import styled from 'styled-components';
import Icons from '../../common/Icons';
import {View, IListOrMosaicProps} from './EntitiesPage.component'


export const EntitiesPageWrapper = styled('div')<{isFullsceen:boolean}>`
   max-width: ${(props) =>
   props.isFullsceen? '100%':'930px'};
   padding: 15px;
   margin: 0 auto;
   position: ${(props) =>
   props.isFullsceen? 'absolute':'static'};
   top: ${(props) =>
   props.isFullsceen? '0':'auto'};
   left: ${(props) =>
   props.isFullsceen? '0':'auto'};
   right: ${(props) =>
   props.isFullsceen? '0':'auto'};
   width: 100%;
   min-height: ${(props) =>
   props.isFullsceen? '100vh':''};
   z-index: ${(props) =>
   props.isFullsceen? '100':'0'};
   background-color: #fff;
   box-shadow: 0 8px 6px -6px #cdd0d7;

`;
export const EntitiesHeader = styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px;
`;
export const EntitiesHeaderItem = styled.div`
    font-size: 16px;
    position:relative;
    padding-right:60px;
    font-weight: 500;
    ::after{
        content: url('${Icons.settingsIcon}');
        position: absolute;
        left: 70px;
    }
`;

export const EntitesWrapper= styled('div')<IListOrMosaicProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({view}) =>
    view === View.Mosaic ? "repeat(auto-fit, minmax(250px, 1fr))" : "1fr"};
  grid-gap: 10px;
`;
export const MosaicBtn = styled('button')<IListOrMosaicProps>`
    font-size: 15px;
    position:relative;
    padding: 5px 25px;
    padding-left: 20px;
    font-weight: 500;
    height: 30px;
    outline: none;
    cursor: pointer;
    border: none;
    color: #2a3f9d;
    font-weight: 600;
    border-radius:3px;
    background-color: ${({view}) =>
    view === View.Mosaic ? "#E6F0F3" : "transparent"};
    ::before{
        content: url('${Icons.mosaicIcon}');
        position: absolute;
        top:50%;
        left:  14px;
        transform: translate(-50% , -50%);
        padding: 0 5px;   
    }
    span{
        padding-left:15px;
    }
`;
export const ListBtn = styled('button')<IListOrMosaicProps>`
    background-image: url('${Icons.listIcon}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 30px;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius:3px;
    padding: 10px;
    background-color: ${({view}) =>
    view === View.List ? "#E6F0F3" : "transparent"};

`;

export const EntitiesHeaderRight = styled.div``;
export const EntitiesHeaderLeft = styled.div``;
export const SingleEntityInner = styled('div')<IListOrMosaicProps>`
    display:flex;
    justify-content: ${({view}) =>
    view === View.List ? "" : "space-between"};
    max-width:${({view}) =>
    view === View.List ? "100%" : "250px"};
    box-shadow: 0 8px 6px -6px #cdd0d7;
    padding:5px;
    text-align: start;

`;

export const EntityPhoto = styled('div')<{imgUrl?:string}>`
    background-image:  ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
    width:60px;
    height: 60px;
    margin: 0 10px;
`;
export const EntityInfo = styled.div``;
export const SingleEntityTitle = styled.div`
    color:#2a3f9d;
    font-size: 14px;
`;
export const SingleEntityText = styled.div`
    font-size: 12px;
    color: #b4b7ba;
    padding:5px 0;
`;

