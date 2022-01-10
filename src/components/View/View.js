import React from 'react';
import Dashboard from '../../views/Dashboard';
import Grid from "../../views/Grid";
import Blog from "../../views/Blog";
import {
    Route,
    Routes,
} from "react-router-dom";

export default function View() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Dashboard/>} />
                <Route path="/grid" element={<Grid/>} />
                <Route path="/blog" element={<Blog/>} />
            </Routes>
        </div>
    )
}