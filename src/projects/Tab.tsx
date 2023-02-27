import { useState } from "react";
import '../css/App.css';

function Tabs(props: any) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <div className="w3-bar w3-black">
                {props.children.map((child: any, index: number) => (
                    <button
                        key={index}
                        className={index === activeTab ? "" : "w3-bar-item w3-button"}
                        onClick={() => setActiveTab(index)}
                    >
                        {child.props.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {props.children[activeTab]}
            </div>
        </div>
    );
}

function Tab(props: any) {
    return (<>
        <div> {props.title}</div>
        <div>
            {props.children}
        </div>
    </>);
}

export default function TabApp(props: any) {
    
    return (
        <Tabs>
            <Tab title="Tab 1">
                <p>Tab 1 content goes here.</p>
            </Tab>
            <Tab title="Tab 2">
                <p>Tab 2 content goes here.</p>
            </Tab>
            <Tab title="Tab 3">
                <p>Tab 3 content goes here.</p>
            </Tab>
        </Tabs>
    );
}
