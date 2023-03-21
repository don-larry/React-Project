import React from 'react';
import styled from 'styled-components';
import image from '../../images/sponsor.png';
import InfoBox from '../Hero/InfoBox/InfoBox';
import { FaEnvelopeOpen, FaLandmark, FaPhone, FaUser } from 'react-icons/fa';
import Intern from './Intern/Intern';
import Reviews from './Reviews/Reviews';
import { rev } from './Reviews/Data';
import { Dots } from './Reviews/Reviews';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2%;

  @media only screen and (max-width: 600px){
        width: 100%;
        margin: 0;
    }
`;

const Card = styled.div`
  height: 70%;
  width: 95%;
  display: flex;
  border: 1px solid darkblue;
  border-radius: 5px;
  margin: 1.5%;
  box-shadow: 0px -1px 20px -5px grey;
  transition: all 1s ease-in;
  &:hover{
    /* background-color: ${(props) => props.theme.colors.bglight}; */
    color: ${(props) => props.theme.colors.light};
    box-shadow: 0px -1px 15px -5px ${(props) => props.theme.colors.primary};;
    border: 1px solid ${(props) => props.theme.colors.bglight};
}

  @media only screen and (max-width: 600px){
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     }
`;

const CardWrapper = styled.div`
  margin: 15px;
  width: 50%;
  display: flex;

  @media only screen and (max-width: 600px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
     }
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;

  @media only screen and (max-width: 600px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
     }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 30px;
  padding: 10px;

  @media only screen and (max-width: 600px){
        margin: 5px;
        align-items: flex-start;
     }
`;
const Icon = styled.div`
  margin: 5px;
  color: ${(props) => props.theme.colors.light};  
`;

const CardText = styled.div`
  margin: 5px;
  color: ${(props) => props.theme.colors.light};
`;

const CardImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media only screen and (max-width: 600px){
        width: 100%;
       
     }
`;

const TextContent = styled.div`
  margin: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.light};

  @media only screen and (max-width: 600px){
        visibility: hidden;
     }
`;



function About() {
  return (
    <>
    <Container>
      <InfoBox title={'Our Team'} subtitle={'Meet Our Team'} />
      <Card>
        <CardWrapper>
          <CardImage src={image}/>
           <CardInfo>
            <Info>
                <Icon><FaUser /></Icon>
                <CardText>John Doe</CardText>   
            </Info>

            <Info>
                <Icon><FaPhone /></Icon>
                <CardText>+1 1234567890</CardText>   
            </Info>

            <Info>
                <Icon><FaEnvelopeOpen /></Icon>
                <CardText>name@example.com</CardText>   
            </Info>

            <Info>
                <Icon><FaLandmark /></Icon>
                <CardText>Location</CardText>   
            </Info>

           </CardInfo>
        </CardWrapper>

        <TextContent>
            Map
        </TextContent>
           
      </Card>
    </Container>  

      <Intern />
      <Reviews items={rev} smooth={true}/>
      {/* <Dots onClick={items[activeIndex]}/> */}
    </>
  )
}

export default About