import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageView } from './component';


const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<PageView />} />
                <Route path="/page-view" element={<PageView />} />
            </Routes>

        </Router>
    );
};

export default AppRoutes;