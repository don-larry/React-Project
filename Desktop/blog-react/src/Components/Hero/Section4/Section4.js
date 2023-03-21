import React from 'react'
import styled from 'styled-components';
import image2 from '../../../images/amsterdam-4625104.jpg';
import { Container, Description, Wrapper } from '../Section2/Section2';


function Section4() {
  return (
    <Container image = {image2} height = {'60%'}>
        <Wrapper direction = {'row'} >
            <Description weight = {'bolder'}>1M+</Description>
            <Description weight = {'bolder'}>1M+</Description>
            <Description weight = {'bolder'}>1M+</Description>
            <Description weight = {'bolder'}>1M+</Description>
        </Wrapper>
    </Container>
  )
}

export default Section4