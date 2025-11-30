import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Activity, Utensils, Flame } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome back, User</h1>
                        <p className="text-gray-400">Here's your daily nutrition overview</p>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Create New Diet Plan <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-zinc-900 border-zinc-800">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-900/20 rounded-full">
                                <Flame className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Calories Burned</p>
                                <h3 className="text-2xl font-bold">1,250 <span className="text-sm font-normal text-gray-500">kcal</span></h3>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-zinc-900 border-zinc-800">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-900/20 rounded-full">
                                <Utensils className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Meals Tracked</p>
                                <h3 className="text-2xl font-bold">3 <span className="text-sm font-normal text-gray-500">/ 5</span></h3>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-zinc-900 border-zinc-800">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-900/20 rounded-full">
                                <Activity className="h-6 w-6 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Activity Level</p>
                                <h3 className="text-2xl font-bold">High</h3>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Recent Activity / Diet Plan */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-semibold">Your Diet Plan</h2>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-medium">Today's Meals</h3>
                                <span className="text-sm text-green-500">On Track</span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: "Breakfast", time: "08:00 AM", calories: "450 kcal", items: "Oatmeal with berries & nuts" },
                                    { name: "Lunch", time: "01:00 PM", calories: "650 kcal", items: "Grilled chicken salad" },
                                    { name: "Snack", time: "04:00 PM", calories: "200 kcal", items: "Greek yogurt" },
                                ].map((meal, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
                                        <div>
                                            <h4 className="font-medium">{meal.name}</h4>
                                            <p className="text-sm text-gray-400">{meal.items}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{meal.calories}</p>
                                            <p className="text-xs text-gray-500">{meal.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Progress */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Weekly Progress</h2>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-[300px] flex items-center justify-center">
                            <p className="text-gray-500">Chart Placeholder</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-900/50 to-zinc-900 border border-green-900/30 rounded-xl p-6">
                            <h3 className="font-bold mb-2">Pro Tip</h3>
                            <p className="text-sm text-gray-300">Hydration is key! Aim for 3 liters of water today to maintain peak performance.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
