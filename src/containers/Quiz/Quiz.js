import React from 'react'
import classes from './Quize.module.css'
import {ActiveQuiz} from "../../Components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {

    state = {
        activeQuestions: 0,
        quiz: [{
            questions: "Какого цвета небо?",
            id: 1,
            rightAnswerId: 1,
            answer: [
                {text: "Черный", id:1},
                {text: "Синий", id: 2},
                {text: "Красный", id: 3},
                {text: "Зеленый", id: 4}
            ]
        },
            {
                questions: "В каком году был основан Санкт-Петербург" ,
                id: 2,
                rightAnswerId: 2,
                answer: [
                    {text: 1701, id:1},
                    {text: 1702, id: 2},
                    {text: 1703, id: 3},
                    {text: 1704, id: 4}
                ]
            },

        ],


    }

    onAnswerClick = (answerId) => {
       this.setState({
          activeQuestions: this.state.activeQuestions + 1
       })
    }

    render(){
        return(
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1 >Ответьте на все вопросы</h1>
                    <ActiveQuiz
                      questions={this.state.quiz[this.state.activeQuestions].questions}
                      answers={this.state.quiz[this.state.activeQuestions].answer}
                      onAnswerClick={this.onAnswerClick}
                      quizLength={this.state.quiz.length}
                      answerNumber={this.state.activeQuestions }


                    />
                </div>
            </div>
        )
    }
}

export default Quiz