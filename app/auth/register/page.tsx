"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold text-white">Create an account</h2>
                <p className="text-zinc-400">Get started with your fitness journey today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    id="name"
                    type="text"
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    icon={<User className="h-4 w-4" />}
                />
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="name@example.com"
                    required
                    icon={<Mail className="h-4 w-4" />}
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Create a password"
                    required
                    icon={<Lock className="h-4 w-4" />}
                />
                <Input
                    id="confirm-password"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    required
                    icon={<Lock className="h-4 w-4" />}
                />

                <Button type="submit" className="w-full" isLoading={isLoading}>
                    Create account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#0a0a0a] px-2 text-zinc-500">Or continue with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" className="w-full">
                    Google
                </Button>
                <Button variant="secondary" className="w-full">
                    GitHub
                </Button>
            </div>

            <div className="text-center text-sm text-zinc-400">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-medium text-emerald-500 hover:text-emerald-400 hover:underline">
                    Sign in
                </Link>
            </div>
        </div>
    );
}
