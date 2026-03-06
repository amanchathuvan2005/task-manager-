import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function TaskDetail() {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                const data = await res.json();
                setTask(data);
            } catch (err) {
                console.error('Failed to fetch task:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchTask();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
                <div className="spinner" />
            </div>
        );
    }

    if (!task) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-red-400">Task not found</h2>
                <Link to="/tasks" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 transition-colors">
                    ← Back to Tasks
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <Link
                to="/tasks"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors mb-6 group"
            >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Tasks
            </Link>

            <div className="glass-card p-8 fade-in-up">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-slate-500 font-mono">TASK-{id}</span>
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${task.completed
                                ? 'bg-emerald-500/15 text-emerald-400'
                                : 'bg-amber-500/15 text-amber-400'
                            }`}
                    >
                        <span className={`w-1.5 h-1.5 rounded-full ${task.completed ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                        {task.completed ? 'Completed' : 'Pending'}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize mb-6">
                    {task.title}
                </h1>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Task ID</p>
                        <p className="text-lg font-semibold text-slate-200">{task.id}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">User ID</p>
                        <p className="text-lg font-semibold text-slate-200">{task.userId}</p>
                    </div>
                    <div className="col-span-2 bg-slate-800/50 rounded-xl p-4">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status</p>
                        <p className={`text-lg font-semibold ${task.completed ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {task.completed ? '✅ This task has been completed' : '⏳ This task is still pending'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
