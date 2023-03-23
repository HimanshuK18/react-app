/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DialogBox from './dialog';
import "@testing-library/jest-dom/extend-expect";


describe('DialogBox', () => {
  const mockDataAdded = jest.fn();

  beforeEach(() => {
    mockDataAdded.mockClear();
  });

  it('renders dialog box with correct labels and buttons', () => {
    const { getByLabelText, getByRole } = render(
      <DialogBox Opened={true} dataAdded={mockDataAdded} />
    );
    expect(getByLabelText('First Name:')).toBeInTheDocument();
    expect(getByLabelText('Last Name:')).toBeInTheDocument();
    expect(getByLabelText('Age:')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('updates input fields and sends data when save button is clicked', () => {
    const { getByLabelText, getByRole } = render(
      <DialogBox Opened={true} dataAdded={mockDataAdded} />
    );
    const firstNameInput = getByLabelText('First Name:');
    const lastNameInput = getByLabelText('Last Name:');
    const ageInput = getByLabelText('Age:');
    const saveButton = getByRole('button', { name: 'Save' });

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.click(saveButton);

    expect(mockDataAdded).toHaveBeenCalledTimes(1);
    expect(mockDataAdded).toHaveBeenCalledWith({
      fname: 'John',
      lName: 'Doe',
      age: '30',
    });
  });

  test("Updates the state with user inputs", () => {
    const { getByTestId } = render(
      <DialogBox Opened={true} dataAdded={mockDataAdded} />
    );
    const fnameInput = getByTestId('fname-input') as HTMLInputElement;
    const lnameInput = getByTestId('lname-input') as HTMLInputElement;
    const ageInput = getByTestId('age-input') as HTMLInputElement;
   

    expect(fnameInput.value).toBe('');
    expect(lnameInput.value).toBe('');
    expect(ageInput.value).toBe('0');

    fireEvent.change(fnameInput, { target: { name: "fname", value: "John" } });
    expect(fnameInput.value).toBe('John');
   
  });
});
