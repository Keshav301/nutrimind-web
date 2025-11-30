import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, MapPin } from "lucide-react";

export default function TrainersPage() {
    const trainers = [
        {
            name: "Sarah Jenkins",
            specialty: "Yoga & Pilates",
            rating: 4.9,
            location: "New York, NY",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
            status: "Available"
        },
        {
            name: "Mike Ross",
            specialty: "Strength & Conditioning",
            rating: 4.8,
            location: "Chicago, IL",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
            status: "Busy"
        },
        {
            name: "Emily Chen",
            specialty: "Nutritionist",
            rating: 5.0,
            location: "San Francisco, CA",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
            status: "Available"
        },
        {
            name: "David Kim",
            specialty: "HIIT Coach",
            rating: 4.7,
            location: "Los Angeles, CA",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
            status: "Available"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-6xl mx-auto space-y-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">Find Your Trainer</h1>
                        <p className="text-gray-400">Connect with expert coaches to reach your goals</p>
                    </div>
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                            placeholder="Search by name or specialty..."
                            className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainers.map((trainer, i) => (
                        <Card key={i} className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-green-600/50 transition-colors group">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                    {trainer.rating}
                                </div>
                            </div>
                            <div className="p-5 space-y-4">
                                <div>
                                    <h3 className="font-bold text-lg">{trainer.name}</h3>
                                    <p className="text-sm text-green-500">{trainer.specialty}</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <MapPin className="h-3 w-3" />
                                    {trainer.location}
                                </div>

                                <div className="pt-2">
                                    <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold">
                                        Connect
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
}
