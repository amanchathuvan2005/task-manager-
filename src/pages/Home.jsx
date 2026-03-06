import { useState, useEffect } from 'react';

export default function Home() {
    const [advice, setAdvice] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchAdvice = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
            const data = await res.json();
            setAdvice(data.slip.advice);
        } catch (err) {
            console.error('Failed to fetch advice:', err);
            setAdvice('Could not load advice. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
            {/* Hero Section */}
            <div className="text-center mb-10 fade-in-up">
                <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
                    Personal Task Dashboard
                </h1>
                <p className="text-slate-400 text-lg max-w-xl mx-auto">
                    Organize, track, and conquer your tasks — one step at a time.
                </p>
            </div>

            {/* Advice Card */}
            <div className="glass-card max-w-lg w-full p-8 text-center pulse-glow fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-4">
                    💡 Daily Advice
                </p>

                {loading ? (
                    <div className="flex justify-center py-6">
                        <div className="spinner" />
                    </div>
                ) : (
                    <blockquote className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed italic">
                        &ldquo;{advice}&rdquo;
                    </blockquote>
                )}

                <button
                    onClick={fetchAdvice}
                    disabled={loading}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Get New Advice
                </button>
            </div>
        </div>
    );
}
