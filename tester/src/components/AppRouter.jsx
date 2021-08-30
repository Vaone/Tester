import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Error from '../pages/Error';
import CreateTests from '../pages/CreateTests';
import CreateQuestions from '../pages/CreateQuestions';
import Home from '../pages/Home';
import PathQuestions from '../pages/PathQuestions';
import PathTest from '../pages/PathTest/PathTest';
import Exam from '../pages/Exam';
import Step1 from '../pages/Step1';

const Step2 = () => <>Step2</>
const Step3 = () => <>Step3</>
const Result = () => <>Result</>

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/createTests'>
        <CreateTests />
      </Route>
      <Route path='/createQuestions'>
        <CreateQuestions />
      </Route>
      <Route path='/pathTest'>
        <PathTest />
      </Route>
      <Route exact path='/pathQuestions' component={PathQuestions}/>
      {/* <Route path='/pathQuestions/step1' component={Step1}/> */}
      <Route path='/pathQuestions/step2' component={Step2}/>
      <Route path='/pathQuestions/step3' component={Step3}/>
      <Route path='/pathQuestions/result' component={Result}/>
      <Route path='/Exam'>
        <Exam />
      </Route>
      <Route path='/error' component={Error}>
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  )
};

export default AppRouter;