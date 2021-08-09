import { screen } from '@testing-library/react';
import Nav from '.';

describe('Header', () => {
    test('it renders a nav tag', () => {
        renderWithReduxProvider(<Nav/>);
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})