import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

const Footer = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    const result = window.confirm('시험을 종료하시겠습니까?'); // 윈도우 confirm 창을 띄우는 함수
    if (result) {
      alert('예. 시험을 종료합니다.');
      navigate('/pre_confirm');
    } else {
      alert('아니요. 시험을 계속 진행합니다.');
    }
  }
  
  return (
    <Wrap>
      <div>광고</div>
      <div>
        ◀ | ▶
      </div>
      <button style={{width:'200px', height:'30px'}} onClick={handleButtonClick}>
        답안 제출
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

export default Footer