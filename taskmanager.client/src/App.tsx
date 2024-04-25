import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homePage';
import ActivitiesPage from './pages/activitiesPage';
import TasksPage from './pages/tasksPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/activities" element={<ActivitiesPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
