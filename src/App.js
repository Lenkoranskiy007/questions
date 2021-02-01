import './App.css';
import React from "react";
import {Route,Switch} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import QuizList from './containers/QuizList/QuizList'
import Quiz from "./containers/Quiz/Quiz";


class App extends React.Component {
    render() {
    return (
        <Layout>
            <Switch>
               <Route path='/auth' component={Auth}/>
               <Route path='/quiz-creator' component={QuizCreator}/>
               <Route path='/quiz/:id' component={Quiz}/>
               <Route path='/' component={QuizList}/>
            </Switch>
         </Layout>

    )
  }

}

export default App;
