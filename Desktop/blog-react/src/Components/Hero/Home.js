import React from 'react'
import styled from "styled-components";
import image from '../../images/furniture-998265.jpg';
import img from '../../images/aerial-view-4301591.jpg'
import CompanyInfo from './CompanyInfo/CompanyInfo';
import InfoBox from './InfoBox/InfoBox';
import Section1 from './Section/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Team from './Team/Team';
import { Link } from 'react-router-dom';
import BlogContent1 from '../Blog/BlogContent1';


const Container = styled.div`
  height: 90%;
  display: flex;
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  flex-wrap: wrap;

  @media only screen and (max-width: 600px){
      width: 100%;
    }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;

  @media only screen and (max-width: 600px){
      width: 100%;
      align-items: center;
    }
`;

export const Title = styled.h1`
  display: flex;
  font-weight: bold;
  font-family: Tahoma;
  color:${(props) => props.theme.colors.bgtitle};
  width: 60%;
  margin: 15px;

  @media only screen and (max-width: 600px){
      width: 100%;  
      text-align: start;
      padding: 20px;
    }
`;

export const Description = styled.p`
  font-weight: bold;
  width: 60%;
  margin: 15px;
  color: ${(props) => props.theme.colors.light};

    @media only screen and (max-width: 600px){
      width: 100%;      
      text-align: start;
      padding: 20px;
      margin: -10px;
    }

`;

const ImageContent = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 2s;
  transform-style: preserve-3d;
  position: relative;  
  flex-wrap : wrap;

  @media only screen and (max-width: 600px){
      width: 100%;
    }
  
`;

const Image = styled.img`
  height: 300px;
  width: 400px;
  border-radius: 10px;
  position: relative;
  &:hover{
    background: url(${img});
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease-out;
    transform: scale(1.0);
    }

    @media only screen and (max-width: 600px){
      width: 90%;
      height: 100%;
    }
`;

const Buttoncontainer = styled.div`
  display: flex;
  margin: 5px;
  padding: 10px;
  /* background-color: ${(props) => props.theme.colors.bgdefault};
  color: ${(props) => props.theme.colors.light}; */
`;

const Button = styled.button`
  display: flex;
  flex-direction: column-reverse;
  background: linear-gradient(to right, ${(props) => props.theme.colors.light} 30%, ${(props) => props.theme.colors.primary} 20%, ${(props) => props.theme.colors.bgdefault} 50%);
  background-size: 350%, 100%;
  background-position: right bottom;
  padding: 12px 20px;
  color: ${(props) => props.theme.colors.light};
  border: 1px solid royalblue;
  border-radius: 5px;
  margin: 2px;
  &:hover{
    background-color: ${(props) => props.theme.colors.bgdefault};
    color: ${(props) => props.theme.colors.bgdefault};
    background-position: left bottom;
    transition: all 1s ease-out;
    transform: scale(1.1);
    font-family: cursive;
  }
`;

function Hero() {
  return (
    <>
    <Container>
      <TextContent>

        <Title>
          Gskills Computer Schools
          Wuse Shopping Plaza, Zone 5.
        </Title>
        <Description>
          The performance of a student affects not just the student involved but also her teachers, 
          parents, peers and
          even the community at large if we are looking at the bigger picture,
          this is one reason why the evaluation of
          a student’s performance cannot be over emphasised. Evaluation if not properly done 
          can affect present and future opportunities, 
          it is necessary it is done in a fair and transparent manner.
        </Description>

        <Buttoncontainer>
          <Link style={{textDecoration: 'none'}} to={'/about'}><Button>About Us</Button></Link>
          <Link style={{textDecoration: 'none'}} to={'/contact'}> <Button>Contact Us</Button></Link>     
        </Buttoncontainer>

      </TextContent>

      <ImageContent>
        <Image src={image} alt="React"/>
      </ImageContent>

    </Container>

    
    <CompanyInfo />
    <InfoBox />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Team />
    <BlogContent1 />
    
   
    </>

  )
}

export default Hero