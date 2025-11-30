import React from "react";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
            </div>

            {/* Content Container */}
            <div className="w-full max-w-md relative z-10">
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-block">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                            NutriMind
                        </h1>
                    </Link>
                </div>

                <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                    {children}
                </div>

                <div className="mt-8 text-center text-sm text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} NutriMind. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
