import React from 'react'
import styled from "styled-components";

const footer = () => {
  return (
    <Wrap>ZERDA</Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
`;

export default footer