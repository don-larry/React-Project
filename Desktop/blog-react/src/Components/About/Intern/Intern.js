import React from 'react'
import styled from 'styled-components'
import InfoBox from '../../Hero/InfoBox/InfoBox';
import image from '../../../images/sunset-3918693.jpg';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px){
        width: 100%;
     }
`;

const Card = styled.div`
    width: 40%;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px -1px 10px -5px ${(props) => props.theme.colors.primary};
    &:hover{
      border: 1px dotted ${(props) => props.theme.colors.bgprimary};
    }

    @media only screen and (max-width: 600px){
        width:30%;
        font-size: 12px;
     }
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;

  @media only screen and (max-width: 600px){
        width: 90%;
        height: 100px;
     }
`;

const ImageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.light};
`;

function Intern() {
  return (
    <Container>
        <InfoBox subtitle={'Our Interns'}/>
        <Card>
          <ImageContent>
            <Image src={image} />
          </ImageContent>
         
          <ImageText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
            nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
          </ImageText>
        </Card>

        <Card>
          <ImageContent>
            <Image src={image} />
          </ImageContent>

          <ImageText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
            nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
          </ImageText>
        </Card>

        <Card>
          <ImageContent>
            <Image src={image} />
          </ImageContent>
        
          <ImageText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
            nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
          </ImageText>
        </Card>

        <Card>
          <ImageContent>
            <Image src={image} />
          </ImageContent>
           
          <ImageText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit repellat quas explicabo illo ipsa error quaerat qui asperiores maiores, 
            nisi dolore optio nihil itaque, repellendus in, odio placeat deserunt fugiat?
          </ImageText>
        </Card>

    </Container>
  )
}

export default Intern