import React, { useState } from 'react';
import Dashboard from '../../views/Dashboard';
import Grid from "../../views/Grid";
import Blog from "../../views/Blog";
import {
    Route,
    Routes,
} from "react-router-dom";
import { dataStructureTopics, algorithmsTopics } from "../../utils/staticData";

const topic = {
    'data-structures': dataStructureTopics,
    'algorithms': algorithmsTopics,
}

export default function View() {
    
    const [currentTopic, setCurrentTopic] = useState('data-structures');

    const handleTopicChange = (topic) => {
        console.log(topic);
        setCurrentTopic(topic);
    };

    return (
        <div>
            <Routes>
                <Route path="/home" element={<Dashboard handleClick={handleTopicChange}/>} />
                <Route path="/topics" element={<Grid cardList={topic[currentTopic]}/>} />
                <Route path="/blog" element={<Blog/>} />
            </Routes>
        </div>
    )
}