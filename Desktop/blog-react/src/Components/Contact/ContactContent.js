import React from 'react'
import { FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa';
import styled from 'styled-components'

const Content = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.light};

    @media only screen and (max-width: 600px){
        width: 100%;
        margin-top: -20px;
     }
`;

const ContentText = styled.div`
    font-size: 35px;
    font-weight: bolder;
    color: black;
    /* background-color: blue; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    @media only screen and (max-width: 600px){
        font-size: 25px;
     }
`;

const ContentInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 80%;

    @media only screen and (max-width: 600px){
        width: 100%;
        margin-top: -15px;
     }
`;

const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: blue; */
    height: 100%;
    width: 33.3%;
    margin: 5px;
    box-shadow: 0px -1px 10px -5px ${(props) => props.theme.colors.textdark};

    @media only screen and (max-width: 600px){
        width: 100%;
        height: 90%;
        font-size: 12px;
     }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    font-size: 30px;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.bgdefault};
    margin: 10px;
    padding: 3px;
`;

const IconTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 5px;
`

const IconText = styled.p`
    width: 80%;
    font-size: 15px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    /* background-color: blueviolet; */

    @media only screen and (max-width: 600px){
       font-size: 12px;
       margin: 5px;
     }
`

function ContactContent() {
  return (
    <Content>
        <ContentText>
            GET IN TOUCH
        </ContentText>

        <ContentInfo>
            <ContentDiv>
                <Icon>
                    <FaMapPin />
                </Icon>
                <IconTitle>ADDRESS</IconTitle>
                <IconText> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
                nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
                </IconText>
            </ContentDiv>

            <ContentDiv>
                <Icon>
                    <FaPhone />
                </Icon>
                <IconTitle>PHONE</IconTitle>
                <IconText> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
                nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
                </IconText>
            </ContentDiv>

            <ContentDiv>
                <Icon>
                    <FaMailBulk/>
                </Icon>
                <IconTitle>EMAIL</IconTitle>
                <IconText> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
                nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
                </IconText>
            </ContentDiv>
        </ContentInfo>   
        
    </Content>
  )
}

export default ContactContent