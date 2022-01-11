import React, { useState } from 'react';
import Dashboard from '../../views/Dashboard';
import Grid from "../../views/Grid";
import Blog from "../../views/Blog";
import {
    Route,
    Routes,
} from "react-router-dom";
import "../../styles/App.css";

export default function View(props) {
    
    const { cardList, setCurrentTopic } = props; 

    return (
        <div id="view-container">
            <Routes>
                <Route path="/home" element={<Dashboard setTopic={setCurrentTopic}/>} />
                <Route path="/topics" element={<Grid cardList={cardList}/>} />
                <Route path="/blog" element={<Blog/>} />
            </Routes>
        </div>
    )
}