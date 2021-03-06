import React from 'react';
import classes from './QuizCreator.module.css'
import Button from '../../Components/UI/Button/Button'
import {createControl} from '../../Form/formFramework'
import Input from "../../Components/UI/Input/Input";
import Auxillary from "../../Hoc/Auxillary";
import Select from "../../Components/UI/Select/Select";
import {validate} from "../../Form/formFramework";
import {validateForm} from "../../Form/formFramework";

function createOptionControl(number) {
    return createControl({
      label: `Вариант ${number}`,
      errorMessage: 'Значение не может быть пустым ',
      id: number
    },{required: true}
    )
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        },{required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends React.Component {

    state = {
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    }

    submitHandler  = (event) => {
        event.preventDefault()
    }

    addQuestionHandler = (event) => {
     event.preventDefault()
    }

    createQuizHAndler = () => {

    }

    changeHandler = (value, controlName) => {
        const copyFormControl  =  this.state.formControls
        const  control  = { ...copyFormControl[controlName] }

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)
        copyFormControl[controlName] = control
        this.setState({
            copyFormControl,
            isFormValid: validateForm(copyFormControl)
        })

    }

    renderControls () {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Auxillary key={controlName + index}>
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessafe={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}

                />
                  {  index === 0 ? <hr/> : null}</Auxillary>
            )
        })
    }


    selectChangeHandler = (event) => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }
    render(){
       const select = <Select
                label='Выберите правильный ответ'
                value={this.state.rightAnswerId}
                onChange={this.selectChangeHandler}
                options={[
                    {text: 1, value: 1},
                    {text: 2, value: 2},
                    {text: 3, value: 3},
                    {text: 4, value: 4}
                ]}
            />


       return (
           <div className={classes.QuizCreator}>
               <div>
                   <h1>Создание теста </h1>
                   <form onSubmit={this.submitHandler}>
                       {this.renderControls()}
                       {select}
                       <Button
                          type='primary'
                          onClick={this.addQuestionHandler}
                          disabled={!this.state.isFormValid}
                        >
                           Добавить вопрос
                       </Button>
                       <Button
                          type='success'
                          onClick={this.createQuizHAndler}
                          disabled={this.state.quiz.length === 0}
                        >
                           Создать тест
                       </Button>
                   </form>

               </div>
           </div>
       )
    }
}

export default QuizCreator