import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Activity = () => {
    const [activity, setActivity] = useState("");

    useEffect(async () => {
        console.log('Activity component mounted')

        async function getRandomActivity(){
            const { data } = await axios.get('http://www.boredapi.com/api/activity/');
            return data.activity;
        }

        let newActivity = await getRandomActivity();
        console.log(newActivity);


        return () => consoloe.log('Activity component unmounted')
    }, [])

    return (
        <div id='activity-generator'>

        </div>
    )
}

export default Activity;