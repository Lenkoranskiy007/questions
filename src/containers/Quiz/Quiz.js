import React from 'react'
import classes from './Quize.module.css'
import {ActiveQuiz} from "../../Components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {

    state = {
        activeQuestions: 0,
        answerState: null,
        quiz: [{
            questions: "Какого цвета небо?",
            id: 2,
            rightAnswerId: 2,
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
                rightAnswerId: 3,
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
        const question = this.state.quiz[this.state.activeQuestions]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })
            const timeout = window.setTimeout(() => {
               if(this.isQuizFinished()) {
                   console.log('finished')
               } else {
                   this.setState({
                       activeQuestions: this.state.activeQuestions + 1,
                       answerState: null
                   })
               }
                window.clearTimeout(timeout)
            }, 1000)


        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }

    }



    isQuizFinished () {
        return this.state.activeQuestions + 1 === this.state.quiz.length
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
                      state={this.state.answerState}


                    />
                </div>
            </div>
        )
    }
}

export default Quiz