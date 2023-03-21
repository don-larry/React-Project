import React from 'react';
import styled from "styled-components";
import image from '../../images/logo192.png';
import { NavLink } from 'react-router-dom';
import { set } from 'react-hook-form';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    flex-wrap: wrap;

    /* for mobiles */
    @media only screen and (max-width: 600px){
        width: 100%;
        height: 10%;
        padding: 1%;
        font-size: 12px;
        display: flex;
        flex-direction: row;
    }
`;

export const LogoBar = styled.div`

@media only screen and (max-width: 600px){
        width: 15%;
    }
`;

const MenuBar = styled.div`

@media only screen and (max-width: 600px){
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 25px;
    }
`;

const ButtonBar = styled.div``;
const SearchBar = styled.div``;

const Search = styled.input`
    height: 25px;
    /* border: none; */
    border: 1px solid black;
    border-radius: 5px;
    padding-left: 10px;
    &::placeholder{
        color: ${(props) => props.theme.colors.textdark};
    }

     /* for mobiles */
    @media only screen and (max-width: 600px){
       width: 65%;
       height: 7%;
       font-size: 12px;
       margin-left: 23%;
    }
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  padding: 10px;
  margin-top: -5px;
  margin-left: 50px;
  border-radius: 10;
  position: relative; 
  box-shadow: 5px;

  @media only screen and (max-width: 600px){
        margin-left: 0;
    }
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    color: ${(props) => props.theme.colors.primary};
`;

const MenuItem = styled.li`
    font-family: Cambria;
    padding: 5px;
    border-radius: 2px;
    font-weight: bold;
    font-size: bolder;
    margin-right: 20px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textdark};
    &:hover{
        color: ${(props) => props.theme.colors.primary};
    }

    @media only screen and (max-width: 600px){
       margin-left: -20px;
       font-size: 15px;
    }
    
`;

const FontAwesomeIcon = styled.div``;

const Button = styled.button`
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.bgdefault};
    color: ${(props) => props.theme.colors.primary};
    padding: 6px 10px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    margin-right: 50px;
    &:hover{
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.bgdefault};
    }

    @media only screen and (max-width: 600px){
       visibility: hidden;
    }
`;

const Darkmode = styled.button`
    height: 30px;
    width: 30px;
    margin-right: 20px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.clip};
    -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

function Navbar ({mode, setMode}) {
  return (
    <>
    <Container>

        <LogoBar>
            <Image src={image} alt="React"/>
        </LogoBar>

        <MenuBar>
            <Menu>
                <MenuItem><NavLink style={{textDecoration: 'none'}} to='/'> Home </NavLink></MenuItem>
                <MenuItem><NavLink style={{textDecoration: 'none'}} to='/about'> About </NavLink></MenuItem>
                <MenuItem><NavLink style={{textDecoration: 'none'}} to='/contact'> Contact </NavLink></MenuItem>
                <MenuItem><NavLink style={{textDecoration: 'none'}} to='/blog'> Blog </NavLink></MenuItem>                            
            </Menu>
        </MenuBar>

        <SearchBar>  
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <Search placeholder='Search' />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </SearchBar>
        
        <ButtonBar>
            <Button><NavLink style={{textDecoration: 'none'}} to='/contact'>Contact</NavLink></Button>
        </ButtonBar>

        <Darkmode onClick={() => setMode(!mode)} />
    </Container>
    
    </>
  )
}


export default Navbar