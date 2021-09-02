import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Error from '../pages/Error';
import CreateTests from '../pages/CreateTests';
import CreateQuestions from '../pages/CreateQuestions';
import Home from '../pages/Home';
import SelectQuestions from '../pages/SelectQuestions';
import SelectTest from '../pages/SelectTest';
import Exam from '../pages/Exam';

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
      <Route path='/SelectTest' component={SelectTest} />
      {/* <Route path='/pathTest' component={PathTest} /> */}
      <Route path='/pathQuestions' component={SelectQuestions}/>
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