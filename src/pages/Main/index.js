import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub, GoCheck } from 'react-icons/go';
import { SiNotion } from 'react-icons/si';

const Index = () => {

  return (
    <Wrap>
      <Completed>
        <h2>BACK : https://github.com/zerda217/zerda_sand</h2>
        <h2>FRONT : https://github.com/zerda217/zerda_fur</h2>
      </Completed>

      <IconDiv>
        <GoMarkGithub size='5vh' onClick={() => window.open('https://github.com/zerda217', '_blank')} />
        <SiNotion size='5vh' onClick={() => window.open('https://zerda217.notion.site/7a0a96d6494d47a597b9f5e2af45a807', '_blank')} />
      </IconDiv>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Completed = styled.div`
  text-align: center;
  width: 100%;
  height: 15vh;
  margin: 5% 0;
  background: #2dd;
`

const IconDiv = styled.div`
  display: flex;
  padding: 5%;
`

export default Index