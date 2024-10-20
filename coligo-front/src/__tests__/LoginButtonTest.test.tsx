import userEvent from "@testing-library/user-event";
import Home from "../components/home/Home";
import { render, screen } from '@testing-library/react'

test("Email link click handler called", async () => {
    const mockHandleClick = jest.fn();
    render(<Home 
                setLoggedIn={() => {}}
          />)
    await userEvent.click(screen.getByText(/log in/i));
    expect(mockHandleClick).toHaveBeenCalled();
})