import React from "react";
type TabNavItemProps = {
    id: string,
    title: string,
    activeTab: string,
    setActiveTab: (tab: any) => void
};

const TabNavItem = (props: TabNavItemProps) => {
    const handleClick = () => {
        props.setActiveTab(props.id);
    };
    return (
        <li onClick={handleClick} className={props.activeTab === props.id ? "active" : ""}>
            {props.title}
        </li>
    );
};


type TabContentProps =
    {
        id: string, 
        activeTab: string, 
        children: any
    }

const TabContent = (props: TabContentProps) => {
    return (
        props.activeTab === props.id ? <div className="TabContent">
            {props.children}
        </div>
            : null
    );
};

export { TabContent, TabNavItem };