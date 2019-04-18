import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Main.css'

import { HomePage, ListsPage } from './../Pages';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/lists' component={ListsPage} />
        <Route render={() => <h2>Page not found</h2>} />
        {/*console.log('main', props)*/}
      </Switch>
    </main>
  );
};

export default Main;