import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, CardDescription,CardTitle, CardButton } from '../Hero/Styles/StyleCard';
import InfoBox from '../Hero/InfoBox/InfoBox';
import image from '../../images/blue-and-red-plants-2505693.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px){
        /* margin-top: -190%; */
     }
`;

export const Image = styled.img`
  height: 260px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BlogContent1() {
  return (
    <>
    <InfoBox subtitle={'Recent News'}/>
    <Container>
      <Card>
        <Link style={{textDecoration: 'none', }} to={'/blog'}>
          <CardContent>
            <Image src={image}/>
            <CardTitle>Blog</CardTitle>
            <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
            nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Link>
      </Card>

      <Card>
        <Link style={{textDecoration: 'none'}} to={'/blog'}>
          <CardContent>
            <Image src={image}/>
            <CardTitle>Blog</CardTitle>
            <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
            nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Link>
      </Card>

      <Card>
        <Link style={{textDecoration: 'none'}} to={'/blog'}>
          <CardContent>
            <Image src={image}/>
            <CardTitle>Blog</CardTitle>
            <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
            nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Link>
      </Card>
      
    </Container>

    </> 
  )
}

export default BlogContent1