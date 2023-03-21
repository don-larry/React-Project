import './App.css';
import {Routes, Route} from 'react-router-dom';
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/Hero/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll';
import { useState } from 'react';


const BodyColor = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.colors.bgdefault};
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgdefault};
  height: 100vh;
 
  @media only screen and (max-width: 600px){
      width: 100%;
      overflow: scroll;
      overflow-x: hidden;
    }

    @media only screen and (min-width: 600px){
      width: 100%;
      overflow: scroll;
      overflow-x: hidden;
    }
`;

const theme = {
  colors: {
    primary: "darkblue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textdark: "grey",
    bgdefault: "white",
    bgsecondary: "darkblue",
    bgprimary: "darkblue",
    bglight: "aliceblue",
    bgtitle: "darkslateblue",
    bgroyal: "royalblue",
    tetiary: "red",
    hover: "aliceblue",
    textlight: "white",
    bgfooter: "black",
    clip: "black"
  }
}

const darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "white",
    text: "snow",
    textdark: "grey",
    bgdefault: "black",
    bgsecondary: "darkblue",
    bgprimary: "darkblue",
    bglight: "aliceblue",
    bgtitle: "darkslateblue",
    bgroyal: "royalblue",
    tetiary: "red",
    hover: "blue",
    textlight: "white",
    bgfooter: "black",
    clip: "yellow"
  }
}

function App() {
  const [mode, setMode] = useState(true);
  return (
    <>    
    <ThemeProvider theme={mode ? darktheme : theme}>    
      <BodyColor />
        <Container>
          <Navbar setMode={setMode} mode={mode}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes> 

          <Scroll />        
          <Footer />
        </Container>
    </ThemeProvider>
      
      
    </>

  );
}

export default App;
