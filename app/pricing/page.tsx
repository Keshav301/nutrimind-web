import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function PricingPage() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "/month",
            description: "Perfect for getting started",
            features: [
                "Basic diet tracking",
                "Access to community forums",
                "5 workout templates",
                "Limited stats history"
            ],
            notIncluded: [
                "Personalized meal plans",
                "1-on-1 Trainer access",
                "Advanced analytics",
                "Priority support"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Pro",
            price: "$29",
            period: "/month",
            description: "Best for serious fitness enthusiasts",
            features: [
                "Unlimited diet tracking",
                "Personalized meal plans",
                "Access to all workout templates",
                "Full stats history",
                "Advanced analytics",
                "Priority support"
            ],
            notIncluded: [
                "1-on-1 Trainer access"
            ],
            cta: "Upgrade to Pro",
            popular: true
        },
        {
            name: "Elite",
            price: "$99",
            period: "/month",
            description: "Complete coaching experience",
            features: [
                "Everything in Pro",
                "1-on-1 Trainer access",
                "Weekly video check-ins",
                "Custom workout programming",
                "Nutritionist consultation"
            ],
            notIncluded: [],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-6xl mx-auto space-y-12">

                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your goals. No hidden fees, cancel anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <Card key={i} className={`relative p-8 bg-zinc-900 border-zinc-800 flex flex-col ${plan.popular ? 'border-green-600 ring-1 ring-green-600' : ''}`}>
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-500">{plan.period}</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3 text-sm">
                                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3 text-sm text-gray-500">
                                        <X className="h-4 w-4 text-gray-600 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-white text-black hover:bg-gray-200'}`}>
                                {plan.cta}
                            </Button>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
}
