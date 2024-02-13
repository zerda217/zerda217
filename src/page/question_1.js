import React, { useState } from 'react'
import ImageModal from './image_modal'
import zoom_in from '../image/zoomin.png'

import styled from 'styled-components'

const Question_1 = ({viewLevel, viewCount, data, dataNumber}) => {
    const [clickedOption, setClickedOption] = useState(null);
    const [isModal, setIsModal] = useState(false);

    let filterData = [];
    if (viewCount === 1) {
        filterData = data.filter(item => item.id === dataNumber + 1);
    } else if (viewCount === 2) {
        const startIndex = Math.min(dataNumber, data.length - 2);
        filterData = data.filter((item, index) => index >= startIndex && index < startIndex + 2);
    }
    // console.log('ff: ', data.filter(item => item.id === dataNumber+1))
    console.log('@@', isModal)

    const handleClick = (option) => {
        setClickedOption(option);
    };
    
  return (
    <div>
        <Box viewLevel={viewLevel} viewCount={viewCount}>
            {filterData.map((d) => (
                <div>
                    <h3 key={d.index}>
                        {d.id}. {d.question}
                    </h3>

                    { d.text ?? 
                        <div key={d.index}>
                            {d.text}
                        </div>
                    }

                    { d.image && 
                        <div key={d.index}> 
                            <img src={d.image} style={{width:'50%', border:'1px solid black'}} alt="image" />
                            <img src={zoom_in} style={{width:'3vh', padding:'1vh'}} onClick={() => setIsModal(true)} />
                            { isModal &&
                                <ImageModal image={d.image} setIsModal={setIsModal} />
                            }
                        </div> 
                    }

                    <div onClick={() => handleClick(1)} key={d.index}> {clickedOption === 1 ? '●' : '①'} {d.option1}</div>
                    <div onClick={() => handleClick(2)} key={d.index}> {clickedOption === 2 ? '●' : '②'} {d.option2}</div>
                    <div onClick={() => handleClick(3)} key={d.index}> {clickedOption === 3 ? '●' : '③'} {d.option3}</div>
                    <div onClick={() => handleClick(4)} key={d.index}> {clickedOption === 4 ? '●' : '④'} {d.option4}</div>
                    <div onClick={() => handleClick(5)} key={d.index}> {clickedOption === 5 ? '●' : '⑤'} {d.option5}</div>

                </div>
            ))}
        </Box>

    </div>
  )
}

const Box = styled.div`
    // align-items: center;
    font-size: ${props => props.viewLevel === 0 ? '3vh' : '4vh'};
    // color: ${props => props.viewLevel === 0 ? '#13264E' : 'red'};
    ${props => (props.viewCount === 2 ? `
    display: flex;
    width: 80vh;
    justify-content: space-around;
    padding: 1px;
  ` : `
    width: 60vh;`)}
`

const Div = styled.div`
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: black;
    text-align: center;
    line-height: 1em;
    color: white;
    font-size: 1em;
  
`

export default Question_1