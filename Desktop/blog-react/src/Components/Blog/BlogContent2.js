import React from 'react'
import styled from 'styled-components'
import img from '../../images/icon-2486501.png'

const Container = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
`;
 
const TextContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 20px;
    color: ${(props) => props.theme.colors.light};
`;

const TextTitle = styled.h2`
    font-size: 20px;
    margin-left: 30px;
    font-weight: bolder;
`;

const Text = styled.p`
    font-size: 13px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    flex-wrap: wrap;
`;

const Image = styled.img`
    background-image: url(img);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    width: 60%;

    @media only screen and (max-width: 600px){
        width: 100%;
        background-color: ${(props) => props.theme.colors.bgdefault};
        
     }
`;


function BlogContent2() {
  return (
    <Container>
        <Image src={img}/>
        <TextContent>
           <TextTitle>Long Live the blog</TextTitle>
           <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptates nesciunt, omnis quo ex voluptatum, mollitia magni rerum reiciendis sint harum eos, laudantium doloremque ipsam sequi minima quidem facere in.</Text>
           <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptates nesciunt, omnis quo ex voluptatum, mollitia magni rerum reiciendis sint harum eos, laudantium doloremque ipsam sequi minima quidem facere in.</Text>
        </TextContent>
        
    </Container>
  )
}

export default BlogContent2