import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
            ? 'text-white bg-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.3)]'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`;

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                        <span className="text-2xl">📋</span>
                        <span className="text-xl font-bold gradient-text group-hover:opacity-80 transition-opacity">
                            TaskBoard
                        </span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        <NavLink to="/" className={linkClass} end>
                            Home
                        </NavLink>
                        <NavLink to="/tasks" className={linkClass}>
                            Tasks
                        </NavLink>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden pb-4 flex flex-col gap-1 fade-in-up">
                        <NavLink to="/" className={linkClass} end onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/tasks" className={linkClass} onClick={() => setMenuOpen(false)}>
                            Tasks
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}
