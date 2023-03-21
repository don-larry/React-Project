import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

function Scroll () {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else if (scrolled <= 200) {
            setVisible(false)
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible);

    const Button = styled.div`
        position: fixed;
        left: 95%;
        bottom: 40px;
        height: 20px;
        font-size: 30px;
        cursor: pointer;
        z-index: 1;
        color: black;
        opacity: 0.6;
    `;

  return (
    <Button>
        <FaArrowCircleUp onClick={scrolltoTop} style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}

export default Scroll