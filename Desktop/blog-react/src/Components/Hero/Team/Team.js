import React from 'react'
import styled from 'styled-components'
import InfoBox from '../InfoBox/InfoBox';
import image from '../../../images/sponsor.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 5%;
`;

 const Teamwrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
 `;

 const TeamCard = styled.div`
    margin: 1%;
    padding: 5px;
    height: 350px;
    width: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    box-shadow: 0px -1px 15px -8px ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.bgdefault};
    border-radius: 5px;
`;

const CardImage = styled.img`
    height: 85%;
    width: 90%;
    object-fit: cover;
    &:hover{
        cursor: pointer;
        opacity: 0.4;
    }
`;

const Textwrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const TeamName = styled.div`
    color: ${(props) => props.theme.colors.primary};
`;

const Position = styled.div`
    color: ${(props) => props.theme.colors.textdark};
`;


function team() {
  return (
    <Container>
        <InfoBox title={'We Work Together'} subtitle={'Our Team'} />
        <Teamwrapper>
            <Link style={{textDecoration: 'none', margin: '5px'}} to={'/about'}> 
                <TeamCard>
                    <CardImage src={image}/>
                    <Textwrapper>
                        <TeamName>Name</TeamName>
                        <Position>Position</Position>

                    </Textwrapper>
                </TeamCard>
            </Link>

            <Link style={{textDecoration: 'none', margin: '5px'}} to={'/about'}> 
                <TeamCard>
                    <CardImage src={image}/>
                    <Textwrapper>
                        <TeamName>Name</TeamName>
                        <Position>Position</Position>

                    </Textwrapper>
                </TeamCard>
            </Link>

            <Link style={{textDecoration: 'none', margin: '5px'}} to={'/about'}> 
                <TeamCard>
                    <CardImage src={image}/>
                    <Textwrapper>
                        <TeamName>Name</TeamName>
                        <Position>Position</Position>

                    </Textwrapper>
                </TeamCard>
            </Link>

            <Link style={{textDecoration: 'none', margin: '5px'}} to={'/about'}> 
                <TeamCard>
                    <CardImage src={image}/>
                    <Textwrapper>
                        <TeamName>Name</TeamName>
                        <Position>Position</Position>

                    </Textwrapper>
                </TeamCard>
            </Link>
        </Teamwrapper>
    </Container>
  )
}

export default team