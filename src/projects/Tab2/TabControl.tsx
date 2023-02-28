import React, { useState } from 'react';
import './Tab.css';

function TabControl(props: any) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="TabContent">
      <div className="TabContent">
        {props.tabs.map((tab: any, index: any) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {props.tabs.map((tab: any, index: any) => (
          <div
            key={index}
            className={index === activeTab ? 'active' : 'inactive'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabControl;
