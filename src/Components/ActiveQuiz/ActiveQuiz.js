import React from 'react'
import classes from './Active.module.css'
import AnswerList from "./AnswerList/AnswerList";

export  const ActiveQuiz = (props) => {
    return(
        <div className={classes.ActiveQuiz}>
          <p className={classes.Question}>
              <span>
                  <strong>2.</strong>
                  {props.questions}
              </span>
              <small>{props.answerNumber} из {props.quizLength}</small>
          </p>
          <AnswerList
              onAnswerClick={props.onAnswerClick}
              state={props.state}
              answer={props.answers}/>

        </div>
    )
}