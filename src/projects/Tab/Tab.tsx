import React, { useState } from "react";
import { TabNavItem, TabContent } from './TabConfigure';
import FirstTab from './TabShow/FirstTab';
import SecondTab from './TabShow/SecondTab';
import './tab.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const tabs = ["Tab1", "Tab2", "Tab3", "Tab4"];
    const tabsContent = [FirstTab, SecondTab, SecondTab, FirstTab]

    return (
        <div className="Tabs">
            <ul className="nav">
                {tabs.map((tab) => <TabNavItem title={tab} id={tab} activeTab={activeTab} setActiveTab={setActiveTab} />)}
            </ul>

            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <FirstTab></FirstTab>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <SecondTab></SecondTab>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <FirstTab></FirstTab>
                </TabContent>
                <TabContent id="tab4" activeTab={activeTab}>
                    <SecondTab></SecondTab>
                </TabContent>
            </div>
        </div>
    );
};
export default Tabs;