import React, { useEffect } from 'react'

import styled from 'styled-components'

const User = ({name}) => {
    useEffect(() => {
        document.title = "요양보호사 모의시험 수험자정보";
      }, []);

  return (
    <Wrap>
        <h2>수험자 정보</h2>
        <div>성함: {name}</div>
        <div>좌석번호: </div>
    </Wrap>
  )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    overflow-x: hidden;
    margin: 1vh;
`;


export default User