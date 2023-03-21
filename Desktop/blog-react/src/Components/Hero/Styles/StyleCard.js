import styled from "styled-components";

export const Card = styled.div`
    width: 350px;
    margin: 10px 10px;
    box-sizing: 0px -1px 15px -5px #dad0d0;
    box-shadow: 0px -1px 15px -5px #a8a4a4;    
    background: linear-gradient(to right, ${(props) => props.theme.colors.bglight} 50%, ${(props) => props.theme.colors.text} 50%);
    background-size: 200%, 100%;
    background-position: right bottom;
    transition: all 1s ease-out;

    &:hover{
        /* background-color: ${(props) => props.theme.colors.bglight}; */
        color: ${(props) => props.theme.colors.bglight};
        background-position: left bottom;
        border: 1px dotted ${(props) => props.theme.colors.primary};
        border-radius: 5px;
        cursor: pointer;
        
    }
`;

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.bgdefault};
`;

export const CardTitle = styled.h3`
    color: ${(props) => props.theme.colors.light};
    text-shadow: -1px -1px 1px, 1px 1px 1px darkgrey;
`;

export const CardDescription = styled.div`
    color: ${(props) => props.theme.colors.light};
    font-size: 15px;
    text-align: center;
`;

export const CardButton = styled.div`
    color: ${(props) => props.theme.colors.tetiary};
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    text-decoration: underline;
`