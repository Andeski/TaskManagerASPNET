import React, { useState } from 'react';
import { Task } from '../types';
import { createTask } from '../../services/taskService';

interface TaskFormProps {
    onSubmit: (task: Task) => Promise<void>;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [Name, setName] = useState('');
    const [Content, setContent] = useState('');
    const [StartDate, setStartDate] = useState<Date | null>(null);
    const [EndDate, setEndDate] = useState<Date | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!Name || !StartDate || !EndDate) return;

        const newTask: Task = {
            Id: Date.now(),
            Name,
            Content,
            StartDate: StartDate,
            EndDate: EndDate,
            Tags: 0,
            Status: 0,
            ActivityId: 0
        };
        //print the new task to the console
        console.log(newTask);

        await createTask(newTask);
        onSubmit(newTask);

        setName('');
        setContent('');
        setStartDate(null);
        setEndDate(null);

    };

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={Name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Content:
                    <input type="text" value={Content} onChange={e => setContent(e.target.value)} />
                </label>
                <br />
                <label>
                    Start Date:
                    <input type="date" value={StartDate?.toISOString().substr(0, 10) || ''} onChange={e => setStartDate(new Date(e.target.value))} />
                </label>
                <br />
                <label>
                    End Date:
                    <input type="date" value={EndDate?.toISOString().substr(0, 10) || ''} onChange={e => setEndDate(new Date(e.target.value))} />
                </label>
                <br />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
