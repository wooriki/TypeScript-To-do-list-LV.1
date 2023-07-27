import React from "react";
import DefaultBtn from "./DefaultBtn";

interface Tab {
    id: number;
    title: string;
    detail: string;
    isDone: boolean;
}

interface TabsProps {
    tab: Tab;
    deleBtn: (id: number) => void;
    toggleBtn: (id: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tab, deleBtn, toggleBtn }) => {
    const { id, title, detail, isDone } = tab;

    return (
        <div className={`userTab ${isDone ? "complete" : ""}`}>
            <div className="tabTitle">{title}</div>
            <div className="tabDetail">{detail}</div>
            <div className="btns">
                <button className="redBtn" onClick={() => deleBtn(id)}>
                    삭제
                </button>
                <button className="blueBtn" onClick={() => toggleBtn(id)}>
                    {isDone ? "취소" : "완료"}
                </button>
            </div>
        </div>
    );
};

export default Tabs;
