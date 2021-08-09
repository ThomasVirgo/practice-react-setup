import Activity from ".";
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import axios from 'axios';
 

describe('Activity', ()=>{
    test('it makes a request using axios', ()=>{
        renderWithReduxProvider(<Activity/>);
        const button = screen.getByRole('button', {name: 'new activity'})
        userEvent.click(button);
        expect(axios.get).toHaveBeenCalled();
    })
})
