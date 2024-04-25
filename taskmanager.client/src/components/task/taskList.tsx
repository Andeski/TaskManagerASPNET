import React from 'react';

interface Task {
    id: number;
    name: string;
    content: string;
    startDate: Date;
    endDate: Date;
    status: string;
    activityId: number;
}

interface Props {
    tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div>
                            <strong>{task.name}</strong>
                            <p>{task.content}</p>
                            <p>Start Date: {task.startDate.toDateString()}</p>
                            <p>End Date: {task.endDate.toDateString()}</p>
                            <p>Status: {task.status}</p>
                            <p>Activity ID: {task.activityId}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
