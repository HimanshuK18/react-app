import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateList from './CreateList';

describe('CreateList', () => {
  it('should add a new item when the Add button is clicked', () => {
    const { getByLabelText, getByText, getAllByRole } = render(<CreateList />);
    
    const input = getByLabelText('Add item');
    const addButton = getByText('Add');
    
    // Simulate typing into the input
    fireEvent.change(input, { target: { value: 'New item' } });
    
    // Simulate clicking the Add button
    fireEvent.click(addButton);
    
    // Check that the new item has been added to the list
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
    expect(listItems[0]).toHaveTextContent('New item');
  });
});
