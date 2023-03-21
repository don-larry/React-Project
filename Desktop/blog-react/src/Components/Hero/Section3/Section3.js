import React from 'react'
import styled from 'styled-components';
import { Container, Description, Header, ImageContainer, Left, List, ListItems, Right, Title, Wrapper } from '../Styles/Style.Section'
import image from '../../../images/apps-blur-button-close-up-267350.jpg'


function Section3() {
  return (
    <Container>
        <Wrapper direction = {'row-reverse'}>
            <Right>
                <ImageContainer src={image}/>
            </Right>
            <Left>
                <Title>Third Section</Title>
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

export default Section3