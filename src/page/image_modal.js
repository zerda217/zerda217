import React from 'react'

import styled from 'styled-components';

const Image_modal = ({image, setIsModal}) => {

  return (
    <ModalContainer onClick={() => setIsModal(false)}>
        <Wrap>
            <img src={image} style={{width:'50%', border:'1px solid black'}} alt="image" />
        </Wrap>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  z-index: 9999;
  width: 100vh;
  height: 100vh;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7); /* 회색 배경색, 오퍼시티 70% */
    z-index: 9998; /* 모달 창보다 낮은 z-index */
`;

export default Image_modal