import React from 'react';
import { useParams } from 'react-router-dom';

const UniSubList = () => {

    let { letter } = useParams();
    return (
        <div>
            Hello, you have chosen the letter: {letter}
        </div>
    )
}

export default UniSubList;

