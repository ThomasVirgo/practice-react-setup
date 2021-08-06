import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const UniSubList = () => {
    let { letter } = useParams();
    const [unis, setUnis] = useState([]);

    useEffect(async () => {
        const data = await getUnis();
        let filteredData = data.filter(uni => uni.name[0] === letter);
        setUnis(filteredData);
    }, [letter]);

    async function getUnis(){
        const { data } = await axios.get('http://universities.hipolabs.com/search?country=United+States');
        return data;
    }

    const uniElements = unis.map((item,i) => <div className='uni-card' key={i}>{item.name}</div>);

    return (
        <div>
            Hello, you have chosen the letter: {letter}
            {uniElements}
        </div>
    )
}

export default UniSubList;

