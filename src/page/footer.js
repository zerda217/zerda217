import React from 'react'
import { useNavigate  } from 'react-router-dom'

import useStore from './store';
import styled from 'styled-components'

const Footer = () => {
  const { viewcount, examData, testData, questionNumber, setQuestionNumber } = useStore();
  const dataType = useStore((state) => state.dataType);
  console.log('questionNumber: ', questionNumber)
  const navigate = useNavigate();

  const choiceData = () => {
    if (dataType === 'test') {
      return testData;
    } else if (dataType === 'exam') {
      return examData;
    }
    return null;
  };

  const data = choiceData()

  const minusQuestionNumber = (number) => {
    console.log('number: ', number)
    setQuestionNumber(number)
  }

  const plusQuestionNumber = (number) => {
    console.log('number: ', number)
    setQuestionNumber(number)
  }

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
        <Div onClick={() => setQuestionNumber(1)}>처음으로</Div>

        <Div 
          onClick={() => { 
            if (viewcount === 1) {
              minusQuestionNumber((Number(questionNumber) > 0 ? questionNumber - 1 : questionNumber));
            } else if (viewcount === 2) {
              minusQuestionNumber((Number(questionNumber) > 0 ? questionNumber - 2 : questionNumber));
            }
        }}>
          ◀
        </Div>
        <Div>||</Div>
        <Div 
          onClick={() => { 
            if (viewcount === 1) {
              plusQuestionNumber(questionNumber < data.length - 1 && questionNumber + 1);
            } else if (viewcount === 2) {
              plusQuestionNumber(questionNumber < data.length - 2 && questionNumber + 2);
            }
        }}>
          ▶
        </Div>

        <Div onClick={() => { 
            if (viewcount === 1) {
              setQuestionNumber(data.length);
            } else if (viewcount === 2) {
              setQuestionNumber(data.length - 1);
            }
        }}>
          마지막으로
        </Div>

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

const Div = styled.div`
  padding: 0 1vh;
`

export default Footer