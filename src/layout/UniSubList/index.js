import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';

const UniSubList = () => {
    let { letter } = useParams();
    const [unis, setUnis] = useState([]);

    const allUnis = useSelector(state => state.unis);
    
    useEffect(()=>{
        const filteredData = allUnis.filter(uni => uni.name[0] === letter);
        setUnis(filteredData);
    }, [letter, allUnis])

    const uniElements = unis.map((item,i) => <div className='uni-card' key={i}>{item.name}</div>);

    return (
        <div>
            {uniElements}
        </div>
    )
}

export default UniSubList;

