import { Link } from 'react-router-dom';

export default function TaskCard({ id, title, completed }) {
    return (
        <Link
            to={`/tasks/${id}`}
            className={`glass-card block p-5 group cursor-pointer border-l-4 ${completed
                    ? 'border-l-emerald-500'
                    : 'border-l-amber-500'
                }`}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-100 group-hover:text-white transition-colors capitalize">
                        {title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                        Task #{id}
                    </p>
                </div>

                <span
                    className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${completed
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : 'bg-amber-500/15 text-amber-400'
                        }`}
                >
                    <span className={`w-1.5 h-1.5 rounded-full ${completed ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    {completed ? 'Done' : 'Pending'}
                </span>
            </div>
        </Link>
    );
}
