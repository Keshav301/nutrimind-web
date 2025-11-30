import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, User, CreditCard, Bell, LogOut, ChevronRight } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-4xl mx-auto space-y-8">

                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-zinc-800 border-2 border-green-600 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Alex Johnson</h1>
                        <p className="text-gray-400">alex.johnson@example.com</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="px-2 py-1 bg-green-900/30 text-green-500 text-xs rounded-md border border-green-900/50">Pro Member</span>
                            <span className="text-xs text-gray-500">Member since Nov 2023</span>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <Button variant="outline" className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white">
                            Edit Profile
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-zinc-900 border-zinc-800 text-center">
                        <h3 className="text-3xl font-bold text-green-500">12</h3>
                        <p className="text-sm text-gray-400">Workouts this month</p>
                    </Card>
                    <Card className="p-6 bg-zinc-900 border-zinc-800 text-center">
                        <h3 className="text-3xl font-bold text-blue-500">85%</h3>
                        <p className="text-sm text-gray-400">Goal Completion</p>
                    </Card>
                    <Card className="p-6 bg-zinc-900 border-zinc-800 text-center">
                        <h3 className="text-3xl font-bold text-purple-500">4.5kg</h3>
                        <p className="text-sm text-gray-400">Weight Lost</p>
                    </Card>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Settings</h2>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                        {[
                            { icon: User, label: "Account Information", desc: "Update your personal details" },
                            { icon: CreditCard, label: "Billing & Subscription", desc: "Manage your plan and payment methods" },
                            { icon: Bell, label: "Notifications", desc: "Configure how you want to be notified" },
                            { icon: Settings, label: "App Settings", desc: "Display preferences and other settings" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 hover:bg-zinc-800/50 cursor-pointer transition-colors border-b border-zinc-800 last:border-0">
                                <div className="p-2 bg-black rounded-lg">
                                    <item.icon className="h-5 w-5 text-gray-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.label}</h3>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-600" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-900/10 w-full justify-start pl-0">
                        <LogOut className="h-5 w-5 mr-2" /> Sign Out
                    </Button>
                </div>

            </div>
        </div>
    );
}
