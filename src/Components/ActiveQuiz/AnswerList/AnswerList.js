import React from 'react'
import AnswerItem from './AnswerItem/AnswerItem'

 const AnswerList = (props) => {
    return(
       <div>
           {props.answer.map((answer, index) => {
               return <AnswerItem
                   onAnswerClick={props.onAnswerClick}
                   key={index}
                   answer={answer}
               />
           })}
       </div>


    )
}

export default AnswerList