import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import axios from 'axios';
import { UniSubList } from '../../layout';


const UniversityPage = () => {
    // const [unis, setUnis] = useState({});
    let match = useRouteMatch();

    // useEffect(async () => {
    //     const data = await getUnis();
    //     setUnis(data);
    //     console.log(data);
    // }, [])

    // async function getUnis(){
    //     const { data } = await axios.get('http://universities.hipolabs.com/search?country=United+States');
    //     console.log(data);
    //     return ;
    // }

    return (
        <div id='unis-container'>
            <h2>Universities</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/A`}>A</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/B`}>
                            B
                        </Link>
                    </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:letter`}>
                    <UniSubList />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a letter</h3>
                </Route>
            </Switch>
        </div>
    )

}

export default UniversityPage;