import React, { useEffect } from 'react'

import useStore from './store';
import styled from 'styled-components'

const User = () => {
  useEffect(() => {
    document.title = "요양보호사 모의시험 수험자정보";
  }, []);

  const { name, seatNumber, testId } = useStore();

  return (
    <Wrap>
        <h2>수험자 정보</h2>
        <div>성함: {name ? name : '성함확인'}</div>
        <div>좌석번호: {seatNumber ? seatNumber : 0}</div>
        <div>수험번호: {testId ? testId : '000'}</div>
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