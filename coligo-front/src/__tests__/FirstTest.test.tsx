import { render, screen } from '@testing-library/react'
import Home from '../components/home/Home';

test("Example 1 renders successfully", () => {
    render(<Home setLoggedIn={() => {}}/>);

    const element = screen.getByText(/Welcome to Coligo/i);

    expect(element).toBeInTheDocument();
})