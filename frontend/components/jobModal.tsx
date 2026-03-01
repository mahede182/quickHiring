'use client';

import type { Job } from '@/@types/job';
import { X } from 'lucide-react';
import { useState } from 'react';
import { API_BASE_URL } from '@/lib/constants';

type Props = {
    job: Job;
    onClose: () => void;
};

export function JobModal({ job, onClose }: Props) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        resumeLink: '',
        coverNote: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        setResult(null);

        try {
            const res = await fetch(`${API_BASE_URL}/applications`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jobId: job.id,
                    name: form.name,
                    email: form.email,
                    resumeLink: form.resumeLink,
                    coverNote: form.coverNote,
                }),
            });

            const data = await res.json();
            console.log(data, "data from application submission");

            if (res.ok && data.success) {
                setResult({ success: true, message: 'Application submitted successfully!' });
                setForm({ name: '', email: '', resumeLink: '', coverNote: '' });
            } else {
                const msg = data.errors
                    ? data.errors.map((e: { message: string }) => e.message).join(', ')
                    : data.message || 'Something went wrong';
                setResult({ success: false, message: msg });
            }
        } catch {
            setResult({ success: false, message: 'Network error. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Modal */}
            <div
                className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Job Details */}
                <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-semibold text-foreground">{job.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        {job.company} · {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-full text-primary">
                            {job.job_type}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-600 border border-purple-200 rounded-full">
                            {job.category}
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{job.description}</p>
                    <p className="text-sm font-medium text-foreground mt-2">
                        Salary: <span className="text-primary">{job.salary}</span>
                    </p>
                </div>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Apply for this job</h3>

                    {result && (
                        <div
                            className={`p-3 rounded-lg text-sm ${result.success
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : 'bg-red-50 text-red-700 border border-red-200'
                                }`}
                        >
                            {result.message}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-3 py-2 border border-border rounded-lg text-sm outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-3 py-2 border border-border rounded-lg text-sm outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            Resume Link <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            required
                            value={form.resumeLink}
                            onChange={(e) => setForm({ ...form, resumeLink: e.target.value })}
                            placeholder="https://drive.google.com/your-resume"
                            className="w-full px-3 py-2 border border-border rounded-lg text-sm outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            Cover Note <span className="text-muted-foreground">(optional)</span>
                        </label>
                        <textarea
                            value={form.coverNote}
                            onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
                            placeholder="Tell us why you're a great fit..."
                            rows={3}
                            maxLength={2000}
                            className="w-full px-3 py-2 border border-border rounded-lg text-sm outline-none focus:border-primary transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
}
