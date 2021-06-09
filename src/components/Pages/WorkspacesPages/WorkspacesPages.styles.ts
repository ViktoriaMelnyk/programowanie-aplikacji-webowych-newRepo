import styled from 'styled-components';
import Colors from '../../common/Colors';

export const MainWrapper = styled.div`
  max-width: 930px;
  padding: 0px 15px;
  margin: 0 auto;
  `;
export const WorkspaceitemWrapper= styled('div')<{bgImg?: string}>`
	background-image: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.bgImg}')`};
	background-repeat: no-repeat;
	background-size: 65% 65%;
	background-position: 130% 35%;
	border-radius: 10px;
    position:relative;
    width: 270px;
    height: 170px;
`;
export const ItemContent =  styled.div`
    width: 100%;
    height: 100%;            
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 15px;
`;
export const CorporateMattersWrapper = styled.div`
    width: 100%;
    box-shadow: 0 8px 6px -6px ${Colors.boxShadow};
    padding: 20px 15px;
    background-color: ${Colors.corporateDarkGrey};
    margin:20px 0;
`;
export const ItemImage =  styled('div')<{bgImg?: string}>`
   background-image: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.bgImg}')`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width:40px;
    height: 40px;
    margin-bottom: 10px;

`;
export const ItemTitle =  styled.div`
    font-size: 20px;
    margin-bottom: 7px;
    font-weight: 500;
    span{
        font-weight: 700;
    }
    
`;
export const ItemText =  styled.div`
    font-size: 12px;
`;
export const HeaderText =  styled.div`
    color: #8D9196;
`;
export const HeaderWrapper =  styled.div`
    box-shadow: 0 1px 1px ${Colors.boxShadow},0 1px 7px ${Colors.boxShadow}, 0 5px 7px ${Colors.boxShadow} ;
    margin-bottom: 40px;
`;
export const Banner=  styled(ItemImage)`
    width: 100%;
    height:100px;
`;
export const HeaderInfo =  styled.div`
    display:flex;
    justify-content: space-between;
    min-height: 100px;
    padding: 15px;
`;
export const HeaderImage=  styled(ItemImage)`
    margin-bottom: 0;
    height:50px;
    width: 50px;
`;
export const HeaderInfoInner=  styled.div`
`;
export const HeaderInfoInner2=  styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Settings =  styled(ItemImage)`
    margin-bottom: 0;
    height:25px;
    width: 30px;
`;
