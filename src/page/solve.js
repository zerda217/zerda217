import React from 'react'
import Omr from './omr'

import styled from 'styled-components'

const Solve = () => {

  return (
    <Wrap>
        <h2>답지</h2>
        <Omr />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
//   padding: 1vh;
//   border: 1px solid red;
`;

export default Solve