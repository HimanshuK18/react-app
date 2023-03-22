import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Message from './showMessage';
import "@testing-library/jest-dom/extend-expect";

const mockNavigation = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => (mockNavigation)
}));
describe('Message', () => {
  it('should render a message when showMessage prop is true', () => {
    const { getByText, getByTestId, queryByText } = render(<Message showMessage={true} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const messageElement = getByText('Hello World!');
    expect(messageElement).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const messageElementID = getByTestId('content');
    expect(messageElementID).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const messageElementText = queryByText('Hello World!');
    expect(messageElementText).toBeInTheDocument();
  });

  it('should not render a message when showMessage prop is false', () => {
    const { queryByText } = render(<Message showMessage={false} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const messageElement = queryByText('Hello World!');
    expect(messageElement).toBeNull();
  });

  it('test the button click', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(<Message showMessage={false} />);
    const button = screen.getByTestId('Button');
    expect(button.textContent).toBe('Current value 0');
    fireEvent.click(button);
    expect(button.textContent).toBe('Current value 1');
  });

  it('navigation on butoon click', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(<Message showMessage={false} />);
    const button = screen.getByTestId('Button-Route');
    expect(button.textContent).toBe('Home');
    fireEvent.click(button);
    expect(mockNavigation).toHaveBeenCalledWith('/');
  });
});