import React from "react";
import { PropsWithChildren } from 'react';
type TabContentProps =
    {
        id: string,
        activeTab: string,
        children: any
    }
function TabContent(props: PropsWithChildren<TabContentProps>) {
    return (
        props.activeTab === props.id ? <div className="TabContent">
            {props.children}
        </div>
            : null
    );
};

type TabNavItemProps = {
    id: string,
    title: string,
    activeTab: string,
    setActiveTab: (tab: any) => void,
};

const TabNavItem = (props: TabNavItemProps) => {
    const handleClick = () => {
        props.setActiveTab(props.id);
    };
    return (
        <li onClick={handleClick} className={props.activeTab === props.id ? "active" : ""}>
            {props.title}
            <TabContent id="Tab 1" activeTab={props.activeTab}>
            </TabContent>
        </li>
    );
};


export { TabNavItem };