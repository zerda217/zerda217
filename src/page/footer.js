import React from 'react'

import styled from 'styled-components'

const footer = () => {
  return (
    <Wrap>
        ◀ | ▶
    </Wrap>
  )
}

const Wrap = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #13264E;
    color: #FFF;
    padding: 1vh;
    height: 5vh;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export default footer