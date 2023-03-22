import React, { useState } from 'react';

type ListItem = {
  id: number;
  value: string;
};

const CreatList: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue !== '') {
      const newItem: ListItem = {
        id: listItems.length + 1,
        value: inputValue,
      };
      setListItems([...listItems, newItem]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddButtonClick}>Add</button>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreatList;
