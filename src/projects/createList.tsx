import React, { useState, useId } from 'react';

type MenuItem = {
  title: string;
  subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>;
type ListItem = {
  id: number;
  value: string;
};

const CreatList = ({ menuConfig }: { menuConfig: MenuConfig, total: number }) => {
  const [openMenu, setOpenMenu] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const passwordHintId = useId();

  const toggleSubMenu = (index: any) => {
    if (openMenu === index) {
      setOpenMenu(null);
    } else {
      setOpenMenu(index);
    }
  };

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

  return (<>
    <>
      <div className="menu-wrapper">
        {menuConfig.map((item, index) => (
          <div key={index} data-test-id={`first-level-${item.title.toLowerCase()}`}>
            <span>{item.title}</span>
            {item.subItems && (
              <button onClick={() => toggleSubMenu(index)} data-test-id={`button-${item.title.toLowerCase()}`}>
                {openMenu === index ? 'Hide' : 'Expand'}
              </button>
            )}
            {openMenu === index && item.subItems && (
              <ul className="sub-items" data-test-id={`ul-${item.title.toLowerCase()}`}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} data-test-id={`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`}>{subItem}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddButtonClick}>Add</button>
        <ul>
          {listItems.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  </>
  );
};

export default CreatList;