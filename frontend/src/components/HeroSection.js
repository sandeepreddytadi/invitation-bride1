import React, { useState, useEffect } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass("animate-pulse");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.3), rgba(184, 134, 11, 0.3)), url('https://images.unsplash.com/photo-1709979773998-2655b3dfa124?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHxyZWR8MTc1MjgwODM1NXww&ixlib=rb-4.1.0&q=85')`
        }}
      />
      
      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-hearts">
          {[...Array(12)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-red-600 opacity-20 animate-bounce ${animationClass}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
              size={20 + Math.random() * 20}
            />
          ))}
        </div>
        <div className="floating-stars">
          {[...Array(8)].map((_, i) => (
            <Star
              key={i}
              className={`absolute text-yellow-400 opacity-30 animate-spin ${animationClass}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
              size={16 + Math.random() * 12}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        {/* Animated 3D Couple Models - Placeholder */}
        <div className="mb-8 relative">
          <div className="flex justify-center items-center space-x-12">
            {/* Bride 3D Model Placeholder */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-pink-600 rounded-full animate-pulse shadow-2xl border-4 border-yellow-400 flex items-center justify-center">
                <Sparkles className="text-white w-16 h-16" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm">
                Sunanda
              </div>
            </div>
            
            {/* Heart Animation */}
            <div className="animate-bounce">
              <Heart className="text-red-500 w-16 h-16 fill-current" />
            </div>
            
            {/* Groom 3D Model Placeholder */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full animate-pulse shadow-2xl border-4 border-red-400 flex items-center justify-center">
                <Sparkles className="text-white w-16 h-16" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
                Raju
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Title */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-4 animate-pulse">
            Sunanda & Raju
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-6">
            cordially invite you to their
          </div>
          <div className="text-4xl md:text-5xl font-bold text-red-200 mb-8">
            Sacred Wedding Ceremony
          </div>
        </div>

        {/* Wedding Details */}
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border-2 border-yellow-400 shadow-2xl">
          <div className="text-yellow-400 text-lg font-semibold mb-4">
            ✨ WEDDING DETAILS ✨
          </div>
          <div className="space-y-4 text-white">
            <div className="text-2xl font-bold text-yellow-300">
              AUGUST 17TH, 2025
            </div>
            <div className="text-xl text-red-300">
              SUNDAY AT 07:00PM ONWARDS
            </div>
            <div className="text-lg text-yellow-200">
              N.V.R FUNCTION HALL A/C
            </div>
            <div className="text-lg text-red-200">
              BESIDE RTC COMPLEX, RAMACHANDRAPURAM
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;