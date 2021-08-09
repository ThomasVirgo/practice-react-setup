import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios';

describe('App', () => {
    test('it renders a heading that says Hola Amigo!', () => {
        renderWithReduxProvider(<App />)
        const heading = screen.getByRole('heading', { name: 'home'} )
        expect(heading.textContent).toBe('Hola Amigo!')
    })

    test('it renders error if error existts', () => {
        // const initState = { loading: true, doggos: [], error: new Error('Bad Things') }
        // renderWithReduxProvider(<App />, { initState })
        // const error = screen.getByRole('alert')
        // expect(error).toBeInTheDocument()
        // expect(error.textContent).toBe('Bad Things')
    })
})