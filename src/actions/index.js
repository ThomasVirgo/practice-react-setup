import axios from 'axios';

const fetchUnis = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://universities.hipolabs.com/search?country=United+States');
            dispatch({
                type: 'LOAD_UNIS',
                payload: data
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}

export default fetchUnis;