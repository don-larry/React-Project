import styled from "styled-components";


export const Container = styled.div`
    padding: 10px 20px;
    margin-top: 4%;
    flex-wrap: wrap;
    margin-bottom: 4%;

    @media only screen and (max-width: 600px){
      width: 100%;
      display: flex;
      flex-direction: column;
      
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: ${({direction}) => direction};
    margin-left: 0 140px;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px){
      width: 100%;
      display: flex;
      flex-direction: column;
      
    }
`;

export const Header = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.primary};
    padding-bottom: 5px;
    text-align: center;
`;

export const Title = styled.div`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    text-align: center;

    @media only screen and (max-width: 600px){
      width: 100%;
      
    }
`;

export const Description = styled.div`
    color: ${(props) => props.theme.colors.textdark};
    padding: 10px;

    @media only screen and (max-width: 600px){
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: justify;

    }
`;

export const Right = styled.div`
    width: 40%;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px){
      width: 90%;
    }
    
`;

export const Left = styled.div`
    width: 60%;

    @media only screen and (max-width: 600px){
      width: 85%;
      
    }
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 350px;
    border-radius: 5px;

    @media only screen and (max-width: 600px){
      width: 100%;
    }
`

export const List = styled.div`
    list-style: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
`;

export const ListItems = styled.li`
    color: ${(props) => props.theme.colors.textdark};
    min-width: 200px;
    text-align: left;
    padding: 15px;
    box-shadow: 0px -1px 10px -5px ${(props) => props.theme.colors.primary};
    margin: 10px;
    background: linear-gradient(to right, ${(props) => props.theme.colors.bglight} 50%, ${(props) => props.theme.colors.text} 50%);
    background-size: 200%, 100%;
    background-position: right bottom;
    transition: all 1s ease-out;

    &:hover{
        color: ${(props) => props.theme.colors.textdark};
        background-position: left bottom;
        border: 1px dotted ${(props) => props.theme.colors.primary};
        border-radius: 5px;
        cursor: pointer;
    }
`;