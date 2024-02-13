import React from 'react'
import data from '../data/exam_data'

const Question_1 = ({viewLevel}) => {
  return (
    <div>
        <h1>테스트 문제</h1>
        <div>
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
            </div>

    </div>
  )
}

export default Question_1