import React from 'react'
import styled from 'styled-components'
import img from '../../images/computer-1245714.jpg'

const BannerContent = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px){
        visibility: collapse; 
     }
`;

const BannerImage = styled.img`
  height: 700px;
  width: 100%;  
  margin: 2% 0;
`;

const Text = styled.h1`
  font-family: calibri;
  font-size: 50px;
  position: absolute;
  top: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function Banner() {
  return (
    <BannerContent>
       <Text>Our Blog</Text>
      <BannerImage src={img} />
    </BannerContent>
  )
}

export default Banner