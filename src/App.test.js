import { screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('it renders a heading that says Hola Amigo!', () => {
        renderWithReduxProvider(<App />)
        const heading = screen.getByRole('heading', { name: 'home'} )
        expect(heading.textContent).toBe('Hola Amigo!')
    })

})