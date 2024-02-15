import React from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'

import styled from 'styled-components'

const Footer = ({viewcount, examData, testData, dataNumber, setDataNumber}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const lastPathComponent = path.substring(path.lastIndexOf('/') + 1);

  const choiceData = () => {
    if (lastPathComponent == 'test') {
      return testData
    } else if (lastPathComponent == 'exam') {
      return examData
    } else {
      return null
    }
  }

  const data = choiceData()

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
      <div></div>
      <div style={{display:'flex'}}>
        <div onClick={() => setDataNumber(0)}>처음으로</div>

        <div onClick={() => { 
    if (viewcount === 1) {
        setDataNumber(prev => prev > 0 && prev - 1);
    } else if (viewcount === 2) {
        setDataNumber(prev => prev > 0 && prev - 2);
    }
}}>
  ◀
</div>
<div>||</div>
<div onClick={() => { 
    if (viewcount === 1) {
        setDataNumber(prev => prev < data.length - 1 && prev + 1);
    } else if (viewcount === 2) {
        setDataNumber(prev => prev < data.length - 2 && prev + 2);
    }
}}>
  ▶
</div>

<div onClick={() => { 
    if (viewcount === 1) {
        setDataNumber(data.length - 1);
    } else if (viewcount === 2) {
        setDataNumber(data.length - 2);
    }
}}>
  마지막으로
</div>

        {/* <div onClick={() => {dataNumber > 0 && setDataNumber(dataNumber - 1)}}>
          ◀
        </div>
        <div>
          |
        </div>
        <div onClick={() => {dataNumber < data.length -1 && setDataNumber(dataNumber + 1)}}>
          ▶
        </div>
        <div onClick={() => setDataNumber(data.length -1)}>마지막으로</div> */}
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