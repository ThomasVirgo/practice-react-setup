import React, { useState, useEffect } from 'react';
import axios from 'axios';


//try and implement params with react-router-dom
const UniversityPage = () => {
    const [unis, setUnis] = useState({});

    useEffect(async () => {
        const data = await getUnis();
        setUnis(data);
        console.log(data);
    }, [])

    async function getUnis(){
        const { data } = await axios.get('http://universities.hipolabs.com/search?country=United+States');
        console.log(data);
        return ;
    }

    return (
        <div id='unis-container'>

        </div>
    )

}

export default UniversityPage;