import React, { useState } from 'react';
import ImageModal from './image_modal';
import zoom_in from '../image/zoomin.png';
import styled from 'styled-components';

import useStore from './store';

const Question_1 = () => {
  const { viewlevel, viewcount, questionNumber, sheet, setSheet, testData } = useStore();
  // const questionNumber = useStore((questionNumber) => state.questionNumber);

  const optionNumbers = [{1: '①'}, {2: '②'}, {3: '③'}, {4: '④'}, {5: '⑤'}]
  const [clickedOption, setClickedOption] = useState(null);
  const [isModal, setIsModal] = useState(false);

  let filterData = [];

  if (viewcount === 1) {
    filterData = testData.filter(item => item.id === questionNumber);
  } else if (viewcount === 2) {
      filterData = [];
      for (let i = 0; i < testData.length; i += 2) {
          if (i + 1 < testData.length) {
              const questionNumber = testData[i].id;
              filterData.push(testData[i], testData[i + 1]);
              if (questionNumber % 2 === 1 && questionNumber <= 87) {
                  filterData[filterData.length - 2].questionNumber = questionNumber;
                  filterData[filterData.length - 1].questionNumber = questionNumber + 1;
              } else if (questionNumber === testData.length) {
                  filterData[filterData.length - 2].questionNumber = testData.length - 1;
                  filterData[filterData.length - 1].questionNumber = testData.length;
              }
          }
      }
  }

  // if (viewcount === 1) {
  //   filterData = testData.filter(item => item.id === questionNumber + 1);
  // } else if (viewcount === 2) {
  //   const startIndex = Math.min(questionNumber, testData.length - 2);
  //   filterData = testData.filter((item, index) => index >= startIndex && index < startIndex + 2);
  // }
  
  console.log('testData: ', testData)
  console.log('questionNumber: ', questionNumber)
  console.log('viewcount: ', viewcount)

  const handleClick = (number) => (value) => {
    setClickedOption(value);

    const updatedSheet = [...sheet];
    updatedSheet[number-1] = { [number]: value };
    setSheet(updatedSheet);
  };

  return (
    <div>
      <Box viewlevel={viewlevel} viewcount={viewcount}>
        {filterData.map((d, index) => (
          <QuestionContainer key={index} viewcount={viewcount}>
            <h3>{d.id}. {d.question}</h3>
            {d.text && <div style={{border: "1px solid black", padding: '5px', margin: '1px'}}>{d.text}</div>}
            {d.image !== "" &&
              <ImageContainer>
                <img src={d.image} style={{ width: '50%', border: '1px solid black' }} alt="image" />
                <img src={zoom_in} style={{ width: '3vh', padding: '1vh' }} onClick={() => setIsModal(true)} />
                {isModal && <ImageModal image={d.image} setIsModal={setIsModal}>큰 이미지</ImageModal>}
              </ImageContainer>
            }
      <OptionContainer>
        {optionNumbers.map((option, index) => (
          <OptionItem key={index} onClick={() => handleClick(d.id)(parseInt(Object.keys(option)[0], 10))}>
            {sheet[d.id - 1] && sheet[d.id - 1][d.id] === parseInt(Object.keys(option)[0], 10) ? '●' : Object.values(option)[0]}
            {d[`option${index + 1}`]}
          </OptionItem>
        ))}
      </OptionContainer>
          </QuestionContainer>
        ))}
      </Box>
    </div>
  );
};

const Box = styled.div`
  font-size: ${props => props.viewlevel === 0 ? '2.5vh' : '3vh'};
  display: flex;
  width: ${props => props.viewcount === 2 ? '90%' : '80%' };
  // align-items: center;
  // justify-content: center;
  padding: 1px;
  // box-sizing: border-box;
  // border: 1px solid red;
`;

const QuestionContainer = styled.div`
  width: 100%;
  padding: 5vh;
  //   border: ${props => props.viewcount === 2 && '1px solid black'};
  // outline: ${props => props.viewcount === 2 && '2px solid black'}; /* 겹치는 부분에만 선이 보이도록 설정 */
  outline-offset: -2px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh;
`;

export default Question_1;
