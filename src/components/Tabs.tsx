import React from "react";
import Tab from "./Tab";

interface TabsProps {
    tab: Tab;
    deleteTab: (id: number) => void;
    toggleTab: (id: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tab, deleteTab, toggleTab }) => {
    return (
        <div className={`tab-item ${tab.isDone ? "done" : ""}`}>
            <h4>{tab.title}</h4>
            <span>{tab.detail}</span>

            <div className="btns">
                <button onClick={() => deleteTab(tab.id)}>Delete</button>
                {tab.isDone ? (
                    <button onClick={() => toggleTab(tab.id)}>Cancle</button>
                ) : (
                    <button onClick={() => toggleTab(tab.id)}>Complete</button>
                )}
            </div>
        </div>
    );
};

export default Tabs;
