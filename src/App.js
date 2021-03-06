import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { ActivityPage, UniversityPage } from './pages';
import { Nav } from './layout';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

    return (
        <>
        <Nav></Nav>
        <Switch>
            <Route exact path='/' render={() => <h1 aria-label='home'>Hola Amigo!</h1>}></Route>
            <Route path = '/activity'>
              <ActivityPage />   
            </Route>
            <Route path="/universities">
                <UniversityPage />
            </Route>
            <Route render={() => <h1>Page not Found :(</h1>}></Route>
        </Switch>
        
        </>
    )
}

export default App;