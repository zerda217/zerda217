import React from 'react'
import data from '../data/exam_data'

import styled from 'styled-components'

const Question_1 = ({viewLevel}) => {

  return (
    <div>
        <Box viewLevel={viewLevel}>
            {data.map((d) => (
                <div>
                    <h3 key={d.index}>
                        {d.question}
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
    align-items: center;
    width: 60vh;
    font-size: ${props => props.viewLevel === 0 ? '3vh' : '4vh'};
    color: ${props => props.viewLevel === 0 ? '#13264E' : 'red'};
`

export default Question_1