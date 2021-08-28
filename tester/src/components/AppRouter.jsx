import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Error from '../pages/Error';
import CreateTests from '../pages/CreateTests';
import CreateQuestions from '../pages/CreateQuestions';
import Home from '../pages/Home';
import PathQuestions from '../pages/PathQuestions';
import PathTest from '../pages/PathTest';
import Exam from '../pages/Exam';

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/home'>
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
      <Route path='/pathQuestions'>
        <PathQuestions />
      </Route>
      <Route path='/Exam'>
        <Exam />
      </Route>
      <Route path='/error'>
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  )
};

export default AppRouter;