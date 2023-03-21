import React, { useCallback } from 'react'
import image from '../../../images/angel-1055391.jpg';
import InfoBox from '../../Hero/InfoBox/InfoBox';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Container = styled.div`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 300px;
    color: white;
    margin-bottom: 5%;

    @media only screen and (max-width: 600px){
        background-size: 100% 100%;
     }
`;

export const Review = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;    
    align-items: center;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 600px){
        width: 100%;
     }
`;

export const ImageReview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px){
        width: 100%;
        display: flex;
        flex-direction: column;
     }
`;

export const NavButton = styled.button`
    font-size: 15px;
    cursor: pointer;
    color: white;
    background: transparent;
    border: none;
    margin: 50px;

    @media only screen and (max-width: 600px){
        visibility: hidden;
        margin: -10px;
     }
   
`;

export const Image = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 15px;
    transition: transform 0.4s ease;

    @media only screen and (max-width: 600px){
        margin-top: -20px;
     }
`;

export const TextReview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: white;
    /* background-color: red; */

    @media only screen and (max-width: 600px){
        width: 300px;
        height: 200px;
        font-size: 10px;
        margin: 0;
        margin-top: -80px;
        
     }
`;

export const Dots = styled.button`
    font-size: 70px;
    cursor: pointer;
    letter-spacing: 15px;
    height: 10px;
    width: 10px;
    border: none;
    border-radius: 50%;
    margin: 5px;
    background-color: ${props => props.active ? 'white' : 'blue'};

    &:hover{
        background-color: darkblue;
        transform: scale(1.3);
        border: 0.5px solid tomato; 
    }

    @media only screen and (max-width: 600px){
        /* margin: 0; */
        margin-top: -90px;
        
     }
`;

function Reviews (props) {
    const [state, setState] = useState({
        items: props.items,
        activeIndex: 0,
        autoplay: true, 
        // scrollbehavior: smooth
    });
    
    const moveTo = useCallback((newIndex) => {
        if (newIndex === -1) {
            setState((s) => ({...s, activeIndex: state.items.length - 1}));
        }
        else if (newIndex === state.items.length) {
            setState((s) => ({...s, activeIndex: 0}));
        }

        setState((s) => ({...s, activeIndex: newIndex}));     
    
        // get the current active review element and scroll it into view smoothly
        const activeReview = document.getElementById(`review-${newIndex}`);
        if (activeReview) {
            activeReview.scrollIntoView({ behavior: "smooth" });
        }
    }, [state]);

    const autoplay = useCallback(() => {
        const interval = setInterval(() =>{
        const nextIndex = state.activeIndex + 1;
        if (nextIndex === state.items.length) {
            setState((s) => ({...s, activeIndex: 0}));
        }
        else {
            moveTo(nextIndex);
        }
        }, 5000);
        return () => clearInterval(interval);
    }, [moveTo, state.activeIndex, state.items.length]);

    useEffect(() => {
        if (state.autoplay) {
            const cleanup = autoplay();
            return () => cleanup();
        }
    }, [state.autoplay, state.activeIndex, autoplay]);

    return (
    <>    
        <InfoBox subtitle = {'Reviews'}/>
        <Container>
            <Review> 
                <ImageReview>
                    <NavButton onClick={() => moveTo(state.activeIndex - 1)}>
                        <FaArrowCircleLeft />
                    </NavButton>

                        <Image src={state.items[state.activeIndex].image}/>
                        <TextReview>{state.items[state.activeIndex].comment}</TextReview>

                    <NavButton onClick={() => moveTo(state.activeIndex + 1)}>
                        <FaArrowCircleRight />
                    </NavButton>
                </ImageReview>  
                    {state.items.map((item, index) => (
                        <Dots 
                        key={item} 
                        active={state.activeIndex === index} 
                        index={index} 
                        onClick={() => moveTo(index)} 
                        moveTo={moveTo}
                        styled={state.activeIndex === index ? "border: 1px solid tomato;" : ""}/>
                    ))
                    } 
                
           </Review> 
        </Container> 

    </>

  )
}

export default Reviews