import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaFacebookSquare, FaYoutube, FaWhatsapp, FaEnvelope, FaArrowCircleRight } from 'react-icons/fa';
import { LogoBar } from '../navbar/Navbar';
import image from '../../images/logo192.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 400px;
    width: 100%;
    bottom: 0;
    display: flex;
    background: linear-gradient(to right, ${(props) => props.theme.colors.bgfooter}, ${(props) => props.theme.colors.bgtitle});
    color: ${(props) => props.theme.colors.bgdefault};
    box-shadow: 0px -1px 12px -5px ${(props) => props.theme.colors.primary};
    border-top-left-radius: 120px;
    flex-direction: row;

    @media only screen and (max-width: 600px){
      width: 100%;
      height: 90%;
      display: flex;
      flex-direction: column;
      border-radius: 0px;
      margin-top: 20px;
    }
    
`;

const FooterContent = styled.div`
    width: 33%;
    padding-left: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px){
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-top: -250px;
    }
`;

const FooterTitle = styled.h2`
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    margin-top: 50px;
    text-decoration: underline;
    text-underline-offset: 5px;  
    color: ${(props) => props.theme.colors.textlight};  
`;

const FooterText = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    color: ${(props) => props.theme.colors.textlight};

    @media only screen and (max-width: 600px){
        width: 85%;
    }
    
`;

const FooterLinks = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.textlight};

    @media only screen and (max-width: 600px){
        width: 100%;
        margin-top: -200px;
    } 
`;

const LinkTitle = styled.h2`
    font-weight: bold;
    font-size: 18px;
    margin-left: 20px;
    margin-bottom: 25px;
    text-decoration: underline;
    text-underline-offset: 5px;

    @media only screen and (max-width: 600px){
        width: 80%;
        margin-left: -40px;
        margin-bottom: 5px;
    }
`;

const Links = styled.ul`
    list-style: none;
    cursor: pointer;

    @media only screen and (max-width: 600px){
        width: 100%;
        text-align: center;
    }
`;

const LinkItems = styled.li`
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    line-height: 35px;
    
    @media only screen and (max-width: 600px){
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
`;

const Newsletter = styled.div`
    width: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px){
        width: 100%;
        margin-top: 70px;
    }
`;

const NewsletterText = styled.h2`
    font-weight: bold;
    font-size: 18px;
    margin: 5px 0px 0px 0px;
    text-decoration: underline;
    text-underline-offset: 5px;
    color: ${(props) => props.theme.colors.textlight};
`;

const NewsletterInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 30px;
    background: transparent;
    color: ${(props) => props.theme.colors.text};
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.textlight};
    margin: 40px 0px 10px 0px;
    padding-left: 25px;
    /* background-color: white; */
    &::placeholder{
        color: white;
    }
`;

const Button = styled.button`
    background: transparent;
    color: ${(props) => props.theme.colors.textlight};
    cursor: pointer;
    margin: 1px;
    margin-top: 45px;
    font-size: 150%;
    border: none;
`;

const Social = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const SocialIcon = styled.li`
    margin: 60px 20px -60px 10px;
    cursor: pointer;
    font-size: larger;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.textlight};
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.tetiary};
    padding: 7px;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-left: 10%;

`;

const Envelope = styled.div`
    margin: -18px;
    margin-top: 12px;
    color: ${(props) => props.theme.colors.textlight};
`;

const Image = styled.img`
    height: 30px;
    margin-left: 90%;
`;


function Footer() {
  return (
    <Container>
        <FooterContent>
            <FooterTitle>About Us</FooterTitle>
            <LogoBar>
                <Image src={image}/>
            </LogoBar>
            <FooterText>
            The performance of a student affects not just the student involved but 
            also her teachers, parents, peers and even the community at large 
            if we are looking at the bigger picture, this is one reason
            why the evaluation of a student’s performance cannot be over emphasised.
            </FooterText>
        </FooterContent>

        <FooterLinks>
            <LinkTitle >Links</LinkTitle>
            <Links>
                <LinkItems>
                    <Link style={{color: 'white', textDecoration: 'none'}} to={'/services'}>Services</Link>
                    <Link style={{color: 'white', textDecoration: 'none'}} to={'/features'}>Features</Link>
                    <Link style={{color: 'white', textDecoration: 'none'}} to={'/blog'}>Blog</Link>
                </LinkItems>
            </Links> 
        </FooterLinks>

        <Newsletter>
            <NewsletterText>NewsLetter</NewsletterText>
            
            <Icon> 
                <Envelope>
                    <FaEnvelope />   
                </Envelope> 
                <NewsletterInput placeholder='Email'/>

                <Link to={'subscribe/gmail.com'}>
                    <Button><FaArrowCircleRight /></Button>
                </Link>
            </Icon>
              
            <Social>
                <Link to={'twitter.com'}> 
                    <SocialIcon><FaTwitter /></SocialIcon>
                </Link>
                
                <Link to={'facebook.com'}>
                    <SocialIcon><FaFacebookSquare /></SocialIcon>
                </Link>

                <Link to={'youtube.com'}>
                    <SocialIcon><FaYoutube /></SocialIcon>
                </Link>
                
                <Link to={'whatsapp.com'}> 
                <SocialIcon><FaWhatsapp /></SocialIcon>
                </Link>
                
            </Social>
        </Newsletter>

        
        
    </Container>
  )
}

export default Footer