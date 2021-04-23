import { Link } from 'react-router-dom'
import React from 'react';
import Styled from 'styled-components'

const StyleNav = Styled.nav`
  display:flex;
  justify-content:space-around;
  align-items:center;
  min-height:10vh;
  background: grey;
  color: green;`
  
const Styleh1 = Styled.h1`
  display:flex;
  justify-content: center;
  background:grey;
  color:black;
  `

const Nav = () => {
  return (
    <div className = "header">
        <div className = "navBar">
            <Styleh1>Lambda Eats</Styleh1>
            <StyleNav>
                <Link to="/">Home</Link>
                <a>Help</a>
            </StyleNav>
        </div>
    </div>
  );
};
export default Nav; 