import React from "react";
import { useState } from "react";
import "./Tab.css";
import Tabs from "./components/Tabs";
import DefaultBtn from "./components/DefaultBtn";

interface Tab {
    id: number;
    title: string;
    detail: string;
    isDone: boolean;
}

const App: React.FC = () => {
    const [tabs, setTabs] = useState<Tab[]>([
        {
            id: 1,
            title: "React 공부하기",
            detail: "React 기초에 대하여",
            isDone: false,
        },
        {
            id: 2,
            title: "JS 공부하기",
            detail: "문제 풀기 & 복습",
            isDone: false,
        },
        {
            id: 3,
            title: "러닝 40분",
            detail: "3:1 비율로 인터벌",
            isDone: false,
        },
    ]);
    const [title, setTitle] = useState<string>(""); // title 상태의 타입 지정
    const [detail, setDetail] = useState<string>(""); // detail 상태의 타입 지정

    // 초기값 tabs 이후에 추가되는 tabs을 만들어줄 함수를 선언해준다;
    const addHandler = () => {
        if (title === "" || detail === "") {
            alert("입력란을 채워 주세요.");
            return;
        }

        const newTab: Tab = {
            id: tabs.length + 1,
            title: title,
            detail: detail,
            isDone: false,
        };

        setTabs((prevTabs) => [...prevTabs, newTab]);
        setTitle("");
        setDetail("");
    };

    const deleBtn = (id: number) => {
        const newTabs2 = tabs.filter((tab) => tab.id !== id);
        setTabs(newTabs2);
    };

    const toggleBtn = (id: number) => {
        const doneTab = tabs.find((tab) => tab.id === id);

        if (doneTab) {
            doneTab.isDone = !doneTab.isDone;
            const newDoneTab = tabs.filter((tab) => tab.id !== id);
            setTabs([...newDoneTab, doneTab]);
        }
    };

    const workingOnTab = tabs.filter((tab) => !tab.isDone);
    const finallyDoneTab = tabs.filter((tab) => tab.isDone);

    return (
        <div className="appBody">
            <header className="appHeader">
                <h1>My ToDoList</h1>
                <h1>React</h1>
            </header>
            <div className="appInput">
                <label className="titleLable">제목</label>
                <input
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="detailLable">내용</label>
                <input
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                />
                <button onClick={addHandler}>등록하기</button>
            </div>
            <h1 style={{ padding: "10px 0 0 20px" }}>Working On 🔥</h1>
            <div className="tabBody">
                {workingOnTab.map((tab) => (
                    <Tabs
                        tab={tab}
                        key={tab.id}
                        deleBtn={deleBtn}
                        toggleBtn={toggleBtn}
                    />
                ))}
            </div>
            <h1 style={{ padding: "10px 0 0 20px" }}>Finally Done 🎉🎉</h1>
            <div className="doneBody">
                {finallyDoneTab.map((tab) => (
                    <Tabs
                        tab={tab}
                        key={tab.id}
                        deleBtn={deleBtn}
                        toggleBtn={toggleBtn}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
