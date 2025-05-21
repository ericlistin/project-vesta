import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #0f0f0f;
    color: #ffffff;
    overflow-x: hidden;
  }
`;

const CustomCursor = styled.div`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  mix-blend-mode: difference;
  transition: transform 0.2s ease;
  transform: translate(${props => props.x - 10}px, ${props => props.y - 10}px) scale(${props => props.scale});
  z-index: 9999;
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
  color: #a0a0a0;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #ffffff;
  color: #0f0f0f;
  border: none;
  border-radius: 30px;
  cursor: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => {
    setCursorScale(2);
  };

  const handleMouseLeave = () => {
    setCursorScale(1);
  };

  return (
    <>
      <GlobalStyle />
      <CustomCursor x={mousePos.x} y={mousePos.y} scale={cursorScale} />
      <Container>
        <Title 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Welcome to the Future
        </Title>
        <Subtitle
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Experience our innovative solutions with a touch of modern design and interactivity.
        </Subtitle>
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Get Started
        </Button>
      </Container>
    </>
  );
}

export default App;