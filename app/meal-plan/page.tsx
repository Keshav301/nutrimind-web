import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plus, MoreHorizontal } from "lucide-react";

export default function MealPlanPage() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const meals = [
        { type: "Breakfast", color: "bg-orange-500/20 text-orange-500 border-orange-500/30" },
        { type: "Lunch", color: "bg-green-500/20 text-green-500 border-green-500/30" },
        { type: "Dinner", color: "bg-blue-500/20 text-blue-500 border-blue-500/30" },
        { type: "Snack", color: "bg-purple-500/20 text-purple-500 border-purple-500/30" }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-7xl mx-auto space-y-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">Weekly Meal Plan</h1>
                        <p className="text-gray-400">Plan your nutrition for success</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-zinc-800">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="px-4 text-sm font-medium">Nov 24 - Nov 30</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-zinc-800">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                            <Plus className="h-4 w-4 mr-2" /> Add Meal
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    {days.map((day, i) => (
                        <div key={i} className="space-y-4">
                            <div className="text-center p-2 bg-zinc-900/50 rounded-lg border border-zinc-800">
                                <span className="font-bold block">{day}</span>
                                <span className="text-xs text-gray-500">2{4 + i}</span>
                            </div>

                            <div className="space-y-3">
                                {meals.map((meal, j) => (
                                    <Card key={j} className="p-3 bg-zinc-900 border-zinc-800 hover:border-zinc-700 cursor-pointer group relative min-h-[100px] flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className={`text-xs px-2 py-0.5 rounded-full border ${meal.color}`}>
                                                {meal.type}
                                            </span>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 -mt-1 -mr-1">
                                                <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                            </Button>
                                        </div>

                                        {i === 0 || i === 2 || i === 4 ? (
                                            <div>
                                                <p className="text-sm font-medium mt-2">Grilled Chicken</p>
                                                <p className="text-xs text-gray-500">450 kcal</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Plus className="h-6 w-6 text-zinc-700" />
                                            </div>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
