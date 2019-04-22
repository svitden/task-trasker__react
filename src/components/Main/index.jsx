import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Main.css'

import { BoardPage, ListsPage, BoardsDeletePage } from './../Pages';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={BoardPage} />
        <Route exact path='/boards/' component={BoardsDeletePage}/>
        <Route exact 
          path='/:id' 
          render={({match}) => {
            console.log('MATCH', match);
            const { id } = match.params;
            return <ListsPage boardId={id} /> 
          }}
        />
        {/* <Route exact path='/lists' component={ListsPage} />         */}
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </main>
  );
};

export default Main;