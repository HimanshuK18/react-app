/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
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
    const messageElement = getByText('Hello World!');
    expect(messageElement).toBeInTheDocument();
    const messageElementID = getByTestId('content');
    expect(messageElementID).toBeInTheDocument();
    const messageElementText = queryByText('Hello World!');
    expect(messageElementText).toBeInTheDocument();
  });

  it('should not render a message when showMessage prop is false', () => {
    const { queryByText } = render(<Message showMessage={false} />);
    const messageElement = queryByText('Hello World!');
    expect(messageElement).toBeNull();
  });

  it('test the button click', () => {
    const screen = render(<Message showMessage={false} />);
    const button = screen.getByTestId('Button');
    expect(button.textContent).toBe('Current value 0');
    fireEvent.click(button);
    expect(button.textContent).toBe('Current value 1');
  });

  it('navigation on butoon click', () => {
    const screen = render(<Message showMessage={false} />);
    const button = screen.getByTestId('Button-Route');
    expect(button.textContent).toBe('Home');
    fireEvent.click(button);
    expect(mockNavigation).toHaveBeenCalledWith('/');
  });
});