import React, { useState } from 'react';
import ImageModal from './image_modal';
import zoom_in from '../image/zoomin.png';
import styled from 'styled-components';

const Question_1 = ({ viewLevel, viewCount, data, dataNumber }) => {
  const [clickedOption, setClickedOption] = useState(null);
  const [isModal, setIsModal] = useState(false);

  let filterData = [];
  if (viewCount === 1) {
    filterData = data.filter(item => item.id === dataNumber + 1);
  } else if (viewCount === 2) {
    const startIndex = Math.min(dataNumber, data.length - 2);
    filterData = data.filter((item, index) => index >= startIndex && index < startIndex + 2);
  }

  const handleClick = (option) => {
    setClickedOption(option);
  };

  return (
    <div>
      <Box viewLevel={viewLevel} viewCount={viewCount}>
        {filterData.map((d, index) => (
          <QuestionContainer key={index} viewCount={viewCount}>
            <h3>{d.id}. {d.question}</h3>
            {d.text && <div>{d.text}</div>}
            {d.image !== "" &&
              <ImageContainer>
                <img src={d.image} style={{ width: '50%', border: '1px solid black' }} alt="image" />
                <img src={zoom_in} style={{ width: '3vh', padding: '1vh' }} onClick={() => setIsModal(true)} />
                {isModal && <ImageModal image={d.image} setIsModal={setIsModal} />}
              </ImageContainer>
            }
            <OptionContainer>
              <OptionItem onClick={() => handleClick(1)}>{clickedOption === 1 ? '●' : '①'} {d.option1}</OptionItem>
              <OptionItem onClick={() => handleClick(2)}>{clickedOption === 2 ? '●' : '②'} {d.option2}</OptionItem>
              <OptionItem onClick={() => handleClick(3)}>{clickedOption === 3 ? '●' : '③'} {d.option3}</OptionItem>
              <OptionItem onClick={() => handleClick(4)}>{clickedOption === 4 ? '●' : '④'} {d.option4}</OptionItem>
              <OptionItem onClick={() => handleClick(5)}>{clickedOption === 5 ? '●' : '⑤'} {d.option5}</OptionItem>
            </OptionContainer>
          </QuestionContainer>
        ))}
      </Box>
    </div>
  );
};

const Box = styled.div`
  font-size: ${props => props.viewLevel === 0 ? '3vh' : '4vh'};
  display: flex;
  width: 80vh;
  justify-content: space-around;
  padding: 1px;
  box-sizing: border-box;
`;

const QuestionContainer = styled.div`
  width: 100%;
  padding: 5vh;
//   border: ${props => props.viewCount === 2 && '1px solid black'};
  outline: ${props => props.viewCount === 2 && '2px solid black'}; /* 겹치는 부분에만 선이 보이도록 설정 */
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
  margin-top: 10px;
`;

export default Question_1;
