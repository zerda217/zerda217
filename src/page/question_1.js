import React from 'react'
import data from '../data/exam_data'

import styled from 'styled-components'

const Question_1 = ({viewLevel, viewCount}) => {

  return (
    <div>
        <Box viewLevel={viewLevel} viewCount={viewCount}>
            {data.map((d) => (
                <div>
                    <h3 key={d.index}>
                        {d.question} {viewCount}
                    </h3>

                    { d.text ?? 
                        <div key={d.index}>
                            {d.text}
                        </div>
                    }

                    { d.image ?? 
                        <div key={d.index}> {d.image} </div> 
                    }

                    <div key={d.index}>{d.option1}</div>
                    <div key={d.index}>{d.option2}</div>
                    <div key={d.index}>{d.option3}</div>
                    <div key={d.index}>{d.option4}</div>
                    <div key={d.index}>{d.option5}</div>

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
    &::after {
        content: '';
        position: absolute;
        height: 65%;
        width: 1px;
        background-color: black;
        top:25vh;
        right: 60%;
        bottom: 0;
      }
  ` : `
    width: 60vh;`)}
`

export default Question_1