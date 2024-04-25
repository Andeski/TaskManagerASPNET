import React, { useState } from 'react';

interface TaskFormProps {
    onSubmit: (task: Task) => void;
}

interface Task {
    id: number;
    name: string;
    content: string;
    startDate: Date;
    endDate: Date;
    status: string;
    activityId: number;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [status, setStatus] = useState('');
    const [activityId, setActivityId] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: Math.floor(Math.random() * 1000), //Generate random ID
            name,
            content,
            startDate,
            endDate,
            status,
            activityId,
        };
        onSubmit(newTask);
        //Reset form fields after submit
        setName('');
        setContent('');
        setStartDate(new Date());
        setEndDate(new Date());
        setStatus('');
        setActivityId(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Content:</label>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <div>
                <label>Start Date:</label>
                <input type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} />
            </div>
            <div>
                <label>End Date:</label>
                <input type="date" value={endDate.toISOString().split('T')[0]} onChange={(e) => setEndDate(new Date(e.target.value))} />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>
            <div>
                <label>Activity ID:</label>
                <input type="number" value={activityId} onChange={(e) => setActivityId(Number(e.target.value))} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;
