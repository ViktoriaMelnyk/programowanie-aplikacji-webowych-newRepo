import styled from 'styled-components';

export const PublicationsWrapper = styled.div`
    width: 900px;
    height: 300px;
    display: flex;
    margin: 0 auto;
    box-shadow: 0 8px 6px -6px #cdd0d7;
`;
export const BigPublicationWrapper = styled.div`
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    color: #fff;
    position:relative;

`;
export const SmallPublicationsWrapper = styled.div`
    width: 600px;
    height: 300px;
    padding: 11px 20px;
    background-color:#fff;
    p{
        margin:0;
        display: block;
        font-size: 23px;
        font-weight: 500;
    }
    a{
        color: #2a3f9d;
        font-weight: 500;
    }
`;
export const PublicationInfo = styled('div')``;
export const BigPublicationInfo = styled('div')`
    position:absolute;
    bottom: 10px;
    margin: 10px;
    padding: 7px;
    font-weight: 300;
`;


export const BigPublicationText = styled.div`
    font-weight: 500;
    font-size: 16px;
`;
export const SmallPublicationText = styled.div`
    color: #192136;
    font-weight: 500;
`;
export const SmallPublImg = styled.div`
    width: 75px;
    height: 65px;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    margin-right: 7px;
`;



export const SmallPublicationsInner = styled.div`
    display: flex;
    align-items:center;
    margin: 5px;
    margin-left: 0px;

`;
export const PublDate = styled.span`
    color: #b4b7ba;
    margin-right: 5px;
`;
export const UserInfo = styled.div`
    color: #192136;
`;

export const PublAuthor = styled.div``;




