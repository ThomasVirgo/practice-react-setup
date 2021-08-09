import UniversityPage from ".";
import axios from 'axios';
 

describe('University Page', ()=>{
    test('it makes a request using axios', ()=>{
        renderWithReduxProvider(<UniversityPage/>);
        expect(axios.get).toHaveBeenCalled();
    })
})