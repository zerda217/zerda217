import React, { useState } from 'react';
import ImageModal from './image_modal';
import zoom_in from '../image/zoomin.png';
import styled from 'styled-components';

const Question_1 = ({ viewlevel, viewcount, data, dataNumber, sheet, setSheet }) => {
  const optionNumbers = [{1: '①'}, {2: '②'}, {3: '③'}, {4: '④'}, {5: '⑤'}]
  const [clickedOption, setClickedOption] = useState(null);
  const [isModal, setIsModal] = useState(false);

  let filterData = [];
  if (viewcount === 1) {
    filterData = data.filter(item => item.id === dataNumber + 1);
  } else if (viewcount === 2) {
    const startIndex = Math.min(dataNumber, data.length - 2);
    filterData = data.filter((item, index) => index >= startIndex && index < startIndex + 2);
  }

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
                <img src={d.image} style={{ width: '50%', border: '1px solid black' }} alt='image' />
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
