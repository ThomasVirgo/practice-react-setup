import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { UniSubList } from '../../layout';
import './style.css';
import fetchUnis from '../../actions';


const UniversityPage = () => {
    const dispatch = useDispatch();
    let match = useRouteMatch();

    useEffect(()=>{
        dispatch(fetchUnis())
    }, [])

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const links = alphabet.map(letter => 
    <span key={letter} className ='span-link'>
        <Link to={`${match.url}/${letter}`}>{letter}</Link>
    </span>
    )

    return (
        <div id='unis-container'>
            <h2>Universities</h2>
            {links}

            <Switch>
                <Route path={`${match.path}/:letter`}>
                    <UniSubList/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a letter</h3>
                </Route>
            </Switch>
        </div>
    )

}

export default UniversityPage;