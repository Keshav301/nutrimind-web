// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import bowl from "../../assets/bowl.png"

// export default function Landing() {
//   return (
//     <section className="relative w-full bg-black text-white overflow-hidden">
//       {/* Container */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content: Text */}
//         <div className="flex flex-col gap-6 z-10">
//           <div className="inline-block px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm font-medium w-fit">
//             #1 Nutrition Tracking App
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
//             Fitness isn't just about training, it's about <span className="text-green-500">understanding</span>.
//           </h1>
          
//           <p className="text-gray-400 text-lg md:text-xl max-w-lg">
//             Track calories, get personalized meal plans, and connect with expert trainers to transform your body and mind.
//           </p>

//           <div className="flex items-center gap-4 mt-4">
//             <Link 
//               href="/signup" 
//               className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-xl transition-all transform hover:scale-105"
//             >
//               Get Started Now
//             </Link>
            
//             <Link 
//               href="/demo" 
//               className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-medium rounded-xl transition-all"
//             >
//               View Demo
//             </Link>
//           </div>

//           {/* Social Proof / Stats (Optional based on design) */}
//           <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
//             <div className="flex -space-x-4">
//               {[1,2,3].map((i) => (
//                 <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs">
//                    User
//                 </div>
//               ))}
//             </div>
//             <div className="text-sm">
//               <span className="font-bold text-white">10k+</span> <span className="text-gray-400">Active Users</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Content: Hero Image */}
//         <div className="relative flex justify-center md:justify-end z-10">
//            {/* Green Glow Effect behind image */}
//            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/20 blur-[100px] rounded-full -z-10"></div>
           
//            {/* Replace src with your actual image from assets */}
//            <div className="relative w-full max-w-[500px] aspect-square">
//              {/* Placeholder for the salad bowl image */}
//              <div className="w-full h-full rounded-3xl  flex items-center justify-center text-gray-500">
//                 <Image src={bowl} alt="Healthy Food" fill className="object-contain" />
//              </div>
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import bowl from "../../assets/bowl.png"
import React from "react";

export default function Landing() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-20 px-6 gap-10">
        <div className="flex flex-col gap-6 max-w-lg">
          <span className="text-sm border border-gray-700 px-3 py-1 rounded-full w-max">AI-powered meal scan</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Fitness isn’t just about training, it’s about understanding</h1>
          <p className="text-gray-400">Nutrimind bridges the gap, giving both trainers and fitness lovers the insight and tools they need to grow smarter together.</p>

          <div className="flex gap-4 mt-4">
            <button className="bg-green-600 px-5 py-3 rounded-lg text-white font-medium">Scan Your Meal</button>
            <button className="bg-gray-800 px-5 py-3 rounded-lg font-medium">AI‑Powered Nutrition</button>
          </div>
        </div>

        <div className="relative w-[350px] h-[350px] rounded-xl overflow-hidden">
          <Image src={bowl} alt="Food" fill className="object-cover" />
          <span className="absolute top-4 right-4 bg-gray-900/70 px-3 py-1 rounded-lg text-sm">120 Kcal</span>
          <span className="absolute bottom-4 right-4 bg-gray-900/70 px-3 py-1 rounded-lg text-sm">85% water content</span>
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full max-w-6xl py-20 px-6">
        <h2 className="text-3xl font-bold mb-10">How is it work?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <div className="w-full h-40 relative rounded-xl overflow-hidden bg-gray-800" />
            <h3 className="font-semibold text-lg">Scan your meal</h3>
            <p className="text-gray-400 text-sm">AI detects calories & nutrients.</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full h-40 relative rounded-xl overflow-hidden bg-gray-800" />
            <h3 className="font-semibold text-lg">Track your body & mood</h3>
            <p className="text-gray-400 text-sm">AI maps nutrition + training.</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full h-40 relative rounded-xl overflow-hidden bg-gray-800" />
            <h3 className="font-semibold text-lg">Grow smarter with insights</h3>
            <p className="text-gray-400 text-sm">See progress in one dashboard.</p>
          </div>
        </div>
      </section>

      {/* Smart Nutrition */}
      <section className="w-full max-w-6xl py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Smart nutrition meets real-time learning</h2>
        <div className="w-full h-60 bg-gray-900 rounded-xl relative overflow-hidden">
          <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-white text-sm">Detected Macros: Protein 32g • Carbs 45g • Fats 18g</div>
        </div>
      </section>

      {/* Trainers */}
      <section className="w-full max-w-6xl py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Trainers</h2>
          <p className="text-gray-400 mb-6">Assign meal + workout plans. Track client progress in real-time. Get AI recommendations for each trainee.</p>
          <button className="bg-green-600 px-5 py-3 rounded-lg text-white font-medium">Open Trainer Portal</button>
        </div>

        <div className="w-full h-60 bg-gray-900 rounded-xl" />
      </section>

      {/* Fitness Lovers */}
      <section className="w-full max-w-6xl py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-60 bg-gray-900 rounded-xl" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Fitness Lovers</h2>
          <p className="text-gray-400 mb-6">See what your trainer sees. Understand your food impact. Stay consistent with AI motivation.</p>
          <button className="border border-gray-700 px-5 py-3 rounded-lg font-medium">Start as Fitness Lover</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-6xl py-20 px-6">
        <h2 className="text-3xl font-bold mb-10">What fitness lover say about NutriMind</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg text-gray-300 text-sm">
              <p className="mb-4">I love NutriMind. It has a very personalized meal, and many more things. I really recommend it.</p>
              <strong>Raj Yadav</strong>
              <p className="text-gray-500 text-xs">Fitness Trainer</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full max-w-6xl py-20 px-6">
        <div className="w-full h-56 bg-gray-900 rounded-xl flex items-center justify-between px-10">
          <h2 className="text-3xl font-bold max-w-md">Transform how you train, eat, and grow — with NutriMind.</h2>
          <button className="bg-green-600 px-6 py-3 rounded-lg text-white font-medium">Download Now</button>
        </div>
      </section>
    </div>
  );
}
