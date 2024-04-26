import React from 'react';

interface Task {
    Id: number;
    Name: string;
    Description: string;
    StartDate: Date;
    EndDate: Date;
}

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div>
            <h2>Task List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.Id}>
                            <td>{task.Id}</td>
                            <td>{task.Name}</td>
                            <td>{task.Description}</td>
                            <td>{task.StartDate.toLocaleDateString()}</td>
                            <td>{task.EndDate.toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
