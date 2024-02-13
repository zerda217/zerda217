import React, { useEffect } from 'react'

import styled from 'styled-components'

const Info = () => {
  useEffect(() => {
      // 컴포넌트가 마운트될 때 실행되는 코드
      document.title = "요양보호사 모의시험 안내1"; // 원하는 타이틀로 변경합니다.

      // 컴포넌트가 언마운트될 때 원래 타이틀로 되돌리는 코드
      // return () => {
      //   document.title = "이전 타이틀"; // 이전 타이틀로 변경합니다.
      // };
    }, []);
  
  return (
    <Wrap>
        <h2>안내</h2>
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
    border: 2px solid #12364F;
`;

export default Info