import axios from 'axios';
import { Task } from '../components/types';

const API_URL = 'https://localhost:7200/api/Tasks';

export const getTasks = async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
}

export const createTask = async (task: Task): Promise<void> => {
    try {
        await axios.post(API_URL, task);
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}