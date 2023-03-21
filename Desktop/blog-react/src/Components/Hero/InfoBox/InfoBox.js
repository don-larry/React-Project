import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.bgdefault};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media only screen and (min-width: 600px){
        width: 100%;
    }
`;

const Title = styled.div`
    color: ${(props) => props.theme.colors.secondary};;
`;

const Subtitle = styled.div`
    font-weight: bold;
    font-size: 40px;
    color: ${(props) => props.theme.colors.primary};;
    margin: 5px;
`;

function InfoBox({title, subtitle}) {
  return (
    <Container>
       <Title>{title}</Title>
       <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

export default InfoBox