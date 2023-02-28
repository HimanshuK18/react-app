import React, { useState, useEffect } from 'react';

const DynamicComponent = () => {
  const [componentName, setComponentName] = useState('');

  useEffect(() => {
    const loadComponent = async () => {
      const componentModule = await import(`./${componentName}`);
      setComponent(() => componentModule.default);
    };
    
    if (componentName !== '') {
      loadComponent();
    }
  }, [componentName]);

  const [Component, setComponent] = useState(null);

  const handleComponentChange = (event) => {
    setComponentName(event.target.value);
  };

  return (
    <div>
      <select value={componentName} onChange={handleComponentChange}>
        <option value="">Select a component</option>
        <option value="ComponentA">Component A</option>
        <option value="ComponentB">Component B</option>
      </select>
      {Component && <Component name="Himan" />}
    </div>
  );
};

export default DynamicComponent;
