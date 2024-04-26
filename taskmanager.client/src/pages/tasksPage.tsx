import React, { useState } from 'react';
import TaskList from '../components/task/taskList';
import TaskForm from '../components/task/taskForm';
import { Task } from '../components/types';
import { createTask } from '../services/taskService';

const TasksPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = async (task: Task) => {
        await createTask(task); //Assuming createTask returns a Promise<void>
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default TasksPage;
