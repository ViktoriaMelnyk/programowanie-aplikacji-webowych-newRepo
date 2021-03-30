import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`
const Corp = styled.div`

`
const Dropdown = styled.div`

`
const DropdownBtn = styled.button`

`
const DropdownContent = styled.div`

`


export const DropdownComp: FC = () =>{
  return(

    <Wrapper>
       
        <Corp>
        
        <p>Corporate</p> 
        </Corp>
        <Dropdown>
            <DropdownBtn>
                <i></i>
            </DropdownBtn>
        </Dropdown>
        <DropdownContent>
                <input type="text" placeholder= "Filter..."/>
                <p>Platform</p>
                
                
        </DropdownContent>

    </Wrapper>
      
//    <nav>
//        <img src="" alt=""/>
//        <div className='home'>
//            <a href=""><img src="" alt=""/></a>
//            <p>Home</p>
//        </div>
//        <div className='corporate'>
//            <a href=""><img src="" alt=""/></a>
//            <p>Corporate</p>
//        </div>
//        <div className="dropdown">
//             <button className="dropbtn">Dropdown
//             <i></i>
//             </button>
//         <div className="dropdown-content">
//             <a href="#"></a>
//             <a href="#"></a>
//             <a href="#"></a>
//         </div>
//         <input type="text" placeholder="Search.."></input>
//         <div>
//             <a href=""><img src="" alt=""/></a>
//             <a href=""><img src="" alt=""/></a>
//             <a href=""><img src="" alt=""/></a>
//         </div>
//    </nav>
  );
};