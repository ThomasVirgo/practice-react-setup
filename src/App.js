import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { ActivityPage, UniversityPage } from './pages';

const App = () => {
    return (
        <>
        {/* <Header /> */}

        <Switch>
            <Route exact path='/' render={() => <h1>Hola Amigo!</h1>}></Route>
            <Route path = '/activity'>
              <ActivityPage />   
            </Route>
            <Route path="/universities">
                <UniversityPage />
            </Route>
            <Route render={() => <h1>Page not Found :(</h1>}></Route>
        </Switch>
        
        {/* <Footer /> */}
        </>
    )
}

export default App;