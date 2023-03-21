import React from 'react'
import styled from 'styled-components';
import image1 from '../../../images/background-313415.jpg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-image: url(${({image}) => image});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: ${({height}) => height};

    @media only screen and (max-width: 600px){
      width: 100%;
      
    }
`;

export const Wrapper = styled.div`
    flex-direction: ${({direction}) => direction};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* flex-wrap: wrap; */

    @media only screen and (max-width: 600px){
       padding: 20px;
       display: flex;
       flex-direction: column;
    }
`

const Title = styled.div`
    color: ${(props) => props.theme.colors.textlight};
    font-size: 30px;
    font-weight: bold;

    /* @media only screen and (max-width: 600px){
        padding: 0;
        
    } */
`;

export const Description = styled.p`
    color: ${(props) => props.theme.colors.textlight};
    font-weight: ${({weight}) => weight};
    width: 40%;
    font-size: 25px;
    padding: ${({padding}) => padding};
    justify-content: center;
    display: flex;

    @media only screen and (max-width: 600px){
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: start;
        
    }

`

function Section2() {
  return (
    <Container image = {image1}>
        <Wrapper direction = {'column'}>
            <Title>Second Section</Title>
            <Description weight = {'lighter'} padding = {'2%'}>
                The performance of a student affects not just the student involved but also her teachers, parents, 
                peers and even the community at large if we are looking at the bigger picture, this is one reason why 
             
            </Description>
            <Description weight = {'lighter'} padding = {'2%'}>
                The performance of a student affects not just the student involved but also her teachers, parents, 
                peers and even the community at large if we are looking at the bigger picture, this is one reason why 
              
            </Description>
            <Description weight = {'lighter'} padding = {'2%'}>
                The performance of a student affects not just the student involved but also her teachers, parents, 
                peers and even the community at large if we are looking at the bigger picture, this is one reason why 
              
            </Description>
            <Description weight = {'lighter'} padding = {'2%'}>
                The performance of a student affects not just the student involved but also her teachers, parents, 
                peers and even the community at large if we are looking at the bigger picture, this is one reason why 
              
            </Description>
        </Wrapper>
    </Container>
  )
}

export default Section2