import TabControl from './TabControl';

function AppTab2() {
  const tabs = [
    { label: 'Tab 1', content: <div>Tab 1 content</div>, contentPath: '../Clock.tsx' },
    { label: 'Tab 2', content: <div>Tab 2 content</div>, contentPath: '../Tab/ComponentB.tsx'  },
    { label: 'Tab 3', content: <div>Tab 3 content</div>, contentPath: '../Tab/ComponentA.tsx'  },
  ];

  return (
    <div>
      <h1>My App</h1>
      <TabControl tabs={tabs} />
    </div>
  );
}

export default AppTab2;
