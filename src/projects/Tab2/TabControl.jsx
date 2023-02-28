import { useState, useEffect } from 'react';
import './Tab.css';

function TabControl(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [Component, setComponent] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  

  useEffect(() => {
    const path = '../Clock.tsx';
    const loadComponent = async (index) => {
      const componentModule = await import(`${props.tabs[index].contentPath}`);
      setComponent(() => componentModule.default);
    };
    loadComponent(activeTab);

  }, [activeTab,props.tabs]);

  return (
    <div className="TabContent">
      <div className="TabContent">
        {props.tabs.map((tab, index) => (
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
      {Component && <Component />}
      </div>
    </div>
  );
}
export default TabControl;
