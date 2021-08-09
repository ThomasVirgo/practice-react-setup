import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Activity = () => {
    const [activity, setActivity] = useState("");

    async function getRandomActivity(){
        const { data } = await axios.get('http://www.boredapi.com/api/activity/');
        return data.activity;
    }

    async function handleClick(){
        const newActivity = await getRandomActivity();
        setActivity(newActivity);
    }

    return (
        <div className='container'>
            <div id='activity'>
                {activity}
            </div>
            <button onClick={handleClick} className="btn" aria-label='new activity'>Get New Activity</button>
        </div>
    )
}

export default Activity;