import React from 'react'
import image from '../../../images/blue-and-green-sky-and-mountain-3617500.jpg';
import { Container, Description, Header, ImageContainer, Left, List, ListItems, Right, Title, Wrapper } from '../Styles/Style.Section';

function Section1() {
  return (
    <Container>
        <Wrapper direction = {'row'}>
            <Right>
                <ImageContainer src={image}/>
            </Right>
            <Left>
                <Title>First Section</Title>
                <Header>Whatever Whatever</Header>
                <Description>
                    The performance of a student affects not just the student involved but also her teachers, 
                    parents, peers and
                    even the community at large if we are looking at the bigger picture,
                    this is one reason why the evaluation of
                    a student’s performance cannot be over emphasised. Evaluation if not properly done 
                    can affect present and future opportunities, 
                    it is necessary it is done in a fair and transparent manner.
                </Description>

                <List>
                    <ListItems>List</ListItems>
                    <ListItems>List</ListItems>
                    <ListItems>List</ListItems>
                    <ListItems>List</ListItems>
                </List>
            </Left>
            
        </Wrapper>
    </Container>
  )
}

export default Section1