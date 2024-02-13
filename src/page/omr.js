import React, { useState } from 'react';
import styled from 'styled-components';

// 테이블 스타일드 컴포넌트
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: #FFF;
  color: #000;
`;

// 테이블 셀 스타일드 컴포넌트
const Cell = styled.td`
  border: 1px solid #000;
  padding: 10px;
`;

// 체크박스 스타일드 컴포넌트
const Checkbox = styled.input`
  display: none;
`;

// 레이블 스타일드 컴포넌트
const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 1.5vh;
  height: 1.5vh;
  line-height: 1.5vh;
  border: 1px solid #000;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  /* 체크됐을 때 동그라미 안에 검은색으로 채우기 */
  &::after {
    content: ${props => props.checked ? '"●"' : '""'};
    // display: block;
    color: black;
  }
`;

const OMRTable = () => {
  const [answers, setAnswers] = useState({
    1: null,
    2: null
  });

  // 체크된 답을 업데이트하는 함수
  const handleAnswerChange = (questionNumber, answer) => {
    setAnswers({ ...answers, [questionNumber]: answer });
  };

  return (
    <Table>
      <tbody>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((questionNumber) => (
          <tr key={questionNumber}>
            <Cell>{questionNumber}.</Cell>
            {['①', '②', '③', '④', '⑤'].map((answerNumber) => (
              <Cell key={answerNumber}>
                <Checkbox
                  type="radio"
                  id={`question${questionNumber}_answer${answerNumber}`}
                  name={`question${questionNumber}`}
                  value={answerNumber}
                  checked={answers[questionNumber] === answerNumber}
                  onChange={() => handleAnswerChange(questionNumber, answerNumber)}
                />
                <Label htmlFor={`question${questionNumber}_answer${answerNumber}`} checked={answers[questionNumber] === answerNumber} />
              </Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OMRTable;
