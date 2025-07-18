import React, { useState, useEffect } from "react";
import { Clock, Calendar, Heart } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date("2025-08-17T19:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-yellow-900 to-red-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 p-4 rounded-full">
              <Clock className="w-16 h-16 text-red-900" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-4">
            Wedding Countdown
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-yellow-200">
            The magical day is approaching!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400 hover:border-red-400 transition-colors duration-300">
            <div className="text-5xl font-bold text-yellow-400 mb-2">
              {timeLeft.days}
            </div>
            <div className="text-lg text-yellow-200">Days</div>
          </div>
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-400 hover:border-yellow-400 transition-colors duration-300">
            <div className="text-5xl font-bold text-red-400 mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-lg text-red-200">Hours</div>
          </div>
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400 hover:border-red-400 transition-colors duration-300">
            <div className="text-5xl font-bold text-yellow-400 mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-lg text-yellow-200">Minutes</div>
          </div>
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-400 hover:border-yellow-400 transition-colors duration-300">
            <div className="text-5xl font-bold text-red-400 mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-lg text-red-200">Seconds</div>
          </div>
        </div>

        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border-2 border-gradient-to-r from-yellow-400 to-red-400">
          <div className="flex justify-center mb-4">
            <Calendar className="w-8 h-8 text-yellow-400 mr-2" />
            <Heart className="w-8 h-8 text-red-400 mr-2" />
            <Calendar className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">
            Save The Date
          </h3>
          <div className="text-lg text-white">
            Join us for the celebration of love on
            <br />
            <span className="text-yellow-400 font-bold text-2xl">
              August 17th, 2025 at 7:00 PM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;