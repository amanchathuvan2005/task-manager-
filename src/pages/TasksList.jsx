import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';

export default function TasksList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
                const data = await res.json();
                setTasks(data);
            } catch (err) {
                console.error('Failed to fetch tasks:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="mb-8 fade-in-up">
                <h1 className="text-3xl font-bold gradient-text">Tasks</h1>
                <p className="mt-2 text-slate-400">
                    {loading ? 'Loading your tasks…' : `Showing ${tasks.length} tasks`}
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="spinner" />
                </div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                    {tasks.map((task, index) => (
                        <div
                            key={task.id}
                            className="fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <TaskCard
                                id={task.id}
                                title={task.title}
                                completed={task.completed}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
