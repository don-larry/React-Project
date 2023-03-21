import React from 'react'
import { FaPeopleArrows } from 'react-icons/fa';
// import { Groups2Outlined } from '@mui/icons-material';
import styled from 'styled-components'


const Container = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${(props) => props.theme.colors.light};
`;

const TextTitle = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.colors.textdark};
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 50%;
    box-shadow: 1px 2px 4px -1px ${(props) => props.theme.colors.textdark};
    
    @media only screen and (max-width: 600px){
        width: 90%;
        margin-top: -20px;
     }
`;

const ContentTexts = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 100%;
`;

const Text = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-left: 30px;
    color: ${(props) => props.theme.colors.light};

    @media only screen and (max-width: 600px){
        font-size: 17px;
        
     }    
`;

const TextInfo = styled.div`
    font-size: 14px;
    color: ${(props) => props.theme.colors.textdark};
    width: 80%;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Icon = styled.div`
    font-size: 70px;
    width: 20%;
    display: flex;
    justify-content: center;
    margin-top: -40px;
    margin-left: 30px;
    color: ${(props) => props.theme.colors.light};
`;

const Link = styled.a`
    font-size: 15px;
    font-weight: bold;
    display: flex;
    margin: 10px;
    margin-left: 30px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.bgroyal};
`;

function Community() {
  return (
    <>
    <Container>
        <Title>
            Still need help?
        <TextTitle>
            Reach out to us on the community platform.
        </TextTitle>
        </Title>
        
        <Content>
            <Icon>
                <FaPeopleArrows />
            </Icon>

            <ContentTexts>
                <Text>Ask the Community</Text>
                <TextInfo>
                    Get answers from fellow viewers, vote for ideas that help shape the society, and earn rewards for participating
                </TextInfo>
 
                <Link to={'/community'}>Go to Community</Link>
            </ContentTexts>
        </Content>
       
    </Container>
    </>
  )
}

export default Community