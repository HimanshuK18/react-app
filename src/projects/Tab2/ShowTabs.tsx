import TabControl from './TabControl';

function AppTab2() {
  const tabs = [
    { label: 'Tab 1', content: <div>Tab 1 content</div>, contentPath: './Clock' },
    { label: 'Tab 2', content: <div>Tab 2 content</div>, contentPath: './FirstTab'  },
    { label: 'Tab 3', content: <div>Tab 3 content</div>, contentPath: './SecondTab'  },
  ];

  return (
    <div>
      <h1>My App</h1>
      <TabControl tabs={tabs} />
    </div>
  );
}

export default AppTab2;
