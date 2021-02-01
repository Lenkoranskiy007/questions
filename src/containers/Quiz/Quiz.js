import React from 'react'
import classes from './Quize.module.css'
import {ActiveQuiz} from "../../Components/ActiveQuiz/ActiveQuiz";
import {FinishedQuiz} from "../../Components/FinishedQuiz/FinishedQuiz"

class Quiz extends React.Component {

    state = {
        results: {},
        isFinished: false,
        activeQuestions: 0,
        answerState: null,

        quiz: [{
            finishedQuiz: [
                {text: "How are you", id: 1},
                {text: "How are you", id: 2},
            ],
            questions: "Как звали первого президента США?",
            id: 2,
            rightAnswerId: 2,
            answer: [
                {text: "Джон Адамс", id: 1},
                {text: "Джордж Вашингтон", id: 2},
                {text: "Томас Джефферсон", id: 3},
                {text: "Джеймс Медисон", id: 4}
            ]
        },
            {
                questions: "В каком году была основана Америка?",
                id: 2,
                rightAnswerId: 3,
                answer: [
                    {text: 1701, id: 1},
                    {text: 1742, id: 2},
                    {text: 1776, id: 3},
                    {text: 1704, id: 4}
                ]
            },

        ],


    }

    onAnswerClick = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestions]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[answerId]) {
                results[answerId] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })

                } else {
                    this.setState({
                        activeQuestions: this.state.activeQuestions + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)


        } else {
            results[answerId] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }

    }


    isQuizFinished() {
        return this.state.activeQuestions + 1 === this.state.quiz.length
    }

     retryHandler = () =>{
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            results: {},
        })
    }



    render() {
        return (

            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {this.state.isFinished ?
                        <FinishedQuiz
                        results={this.state.results}
                        quiz={this.state.quiz}
                       retryHandler={ this.retryHandler}
                        /> :
                        <ActiveQuiz
                            questions={this.state.quiz[this.state.activeQuestions].questions}
                            answers={this.state.quiz[this.state.activeQuestions].answer}
                            onAnswerClick={this.onAnswerClick}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestions}
                            state={this.state.answerState}
                        />}
                </div>
            </div>
        )
    }
}

export default Quiz