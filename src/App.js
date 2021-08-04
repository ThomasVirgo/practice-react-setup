import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Activity } from './components';

const App = () => {
    return (
        <>
        {/* <Header /> */}

        <Switch>
            <Route exact path='/' render={() => <h1>Hola Amigo!</h1>}></Route>
            <Route path = '/activity'>
              <Activity />   
            </Route>
            <Route render={() => <h1>Page not Found :(</h1>}></Route>
        </Switch>
        
        {/* <Footer /> */}
        </>
    )
}

export default App;