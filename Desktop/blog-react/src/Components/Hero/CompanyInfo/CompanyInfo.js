import React from 'react'
import styled from 'styled-components';
import InfoBox from '../InfoBox/InfoBox';
import { Card, CardTitle, CardContent, CardButton, CardDescription } from '../Styles/StyleCard';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgdefault};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px){
      width: 100%;
      margin-top: 50px; 
    }
`;

function CompanyInfo() {
  return (
    <>
      
      <Container>
      <InfoBox title={'What We Do'} subtitle={'Our Services'} />
        <Card>
          <CardContent>
            <CardTitle>Intro</CardTitle>
            <CardDescription>
            The performance of a student affects not just the student involved but also her teachers, 
            parents, peers and
            even the community at large if we are looking at the bigger picture,
            this is one reason why the evaluation of
            a student’s performance cannot be over emphasised.
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Intro</CardTitle>
            <CardDescription>
            The performance of a student affects not just the student involved but also her teachers, 
          parents, peers and
          even the community at large if we are looking at the bigger picture,
          this is one reason why the evaluation of
          a student’s performance cannot be over emphasised.
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Intro</CardTitle>
            <CardDescription>
            The performance of a student affects not just the student involved but also her teachers, 
          parents, peers and
          even the community at large if we are looking at the bigger picture,
          this is one reason why the evaluation of
          a student’s performance cannot be over emphasised. 
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Intro</CardTitle>
            <CardDescription>
            The performance of a student affects not just the student involved but also her teachers, 
          parents, peers and
          even the community at large if we are looking at the bigger picture,
          this is one reason why the evaluation of
          a student’s performance cannot be over emphasised.
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Intro</CardTitle>
            <CardDescription>
            The performance of a student affects not just the student involved but also her teachers, 
          parents, peers and
          even the community at large if we are looking at the bigger picture,
          this is one reason why the evaluation of
          a student’s performance cannot be over emphasised.
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Intro</CardTitle>
            <CardDescription>
            The performance of a student affects not just the student involved but also her teachers, 
          parents, peers and
          even the community at large if we are looking at the bigger picture,
          this is one reason why the evaluation of
          a student’s performance cannot be over emphasised.
            </CardDescription>
            <CardButton>Read More</CardButton>
          </CardContent>
        </Card>
      </Container>

    </>
  )
}

export default CompanyInfo