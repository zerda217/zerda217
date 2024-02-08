import React from 'react'

import styled from 'styled-components'

const footer = () => {
  const handleButtonClick = () => {
    const result = window.confirm('알림창이 뜹니다! 예 또는 아니요를 선택하세요.'); // 윈도우 confirm 창을 띄우는 함수
    if (result) {
      alert('사용자가 "예"를 선택했습니다.');
    } else {
      alert('사용자가 "아니요"를 선택했습니다.');
    }
  }
  
  return (
    <Wrap>
      <div>?</div>
      <div>
        ◀ | ▶
      </div>
      <button onClick={handleButtonClick}>
        제출
      </button>
    </Wrap>
  )
}

const Wrap = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
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