/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { TabNavItem } from './TabConfigure';
import './tab.css';


const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.data[0].tabname);
    const [Component, setComponent] = useState(null);
    useEffect(() => {
        let AllComponents = [];
        async function allComponents() {
            return props.data.map(async (tab) => {
                const componentModule = await import(`./${tab.tabComponentPath}`);
                return componentModule;
            })
        };

        try {
            AllComponents = allComponents();
        }
        catch (error) {
            console.log(error);
        }
        console.log(AllComponents);
    }, [props]);

    return (<>
        <div className="Tabs">
            <ul className="nav">
                {
                    props.data.map((tab, index) =>
                        <TabNavItem
                            title={tab.tabname}
                            id={tab.tabname}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab} />
                    )}
            </ul>
            {Component && <Component />}
        </div>
    </>);
};
export default Tabs;