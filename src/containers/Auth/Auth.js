import React from 'react';
import classes from './Auth.module.css'
import Button from '../../Components/UI/Button/Button'
import Input from "../../Components/UI/Input/Input";
 class Auth extends React.Component {
     loginHandler = () => {

     }
     registerHandler = () => {

     }
     submitHandler = (event) => {
         event.preventDefault()
     }
     render() {
        return (
            <div className={classes.Auth}>
            <div>
                <h1>Авторизация</h1>

                <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                    <Input
                        label="Email"
                        // value={}
                        // onChange={}
                        // errorMessage={}
                    />
                    <Input
                        label="Пароль"
                        // value={}
                        // onChange={}
                        // errorMessage={}
                    />

                    <Button
                        type="success"
                        onClick={this.loginHandler}
                    >Войти
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.registerHandler}
                    >Зарегистрироваться
                    </Button>
                </form>
            </div>
        </div>)
    }
}

export default Auth