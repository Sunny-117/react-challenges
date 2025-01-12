
import React from "react";
import * as Pages from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import TransitionRoute from "./TransitionRoute";

export default function AppTransition() {
    return (
        <div className="main">
            <Router>
                <Pages.NavBar></Pages.NavBar>
                <div className="page-container">
                    {/* 不能写switch，route组件只要匹配了第一个就不在匹配了，导致后面的children运行不了 */}
                    <TransitionRoute path="/" exact component={Pages.Home} />
                    <TransitionRoute path="/news" exact component={Pages.News} />
                    <TransitionRoute path="/personal" exact component={Pages.Personal} />
                </div>
            </Router>
        </div>
    );
}
