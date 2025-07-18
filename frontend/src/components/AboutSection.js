import React from "react";
import { mockWeddingData } from "../utils/mockData";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-4">
            About The Couple
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bride Section */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-red-600 to-pink-600 rounded-full shadow-2xl border-8 border-yellow-400 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1640744537094-0d5b8da84b01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxoaW5kdSUyMHdlZGRpbmd8ZW58MHx8fHJlZHwxNzUyODA4MzM5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Bride"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-red-900 px-6 py-3 rounded-full font-bold text-xl">
                The Bride
              </div>
            </div>
            <h3 className="text-4xl font-bold text-yellow-300 mb-4">Sunanda</h3>
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400">
              <p className="text-lg text-yellow-200 mb-3">
                <strong>Profession:</strong> {mockWeddingData.bride.profession}
              </p>
              <p className="text-lg text-yellow-200 mb-3">
                <strong>Education:</strong> {mockWeddingData.bride.education}
              </p>
              <p className="text-lg text-yellow-200 mb-3">
                <strong>Hobbies:</strong> {mockWeddingData.bride.hobbies}
              </p>
              <p className="text-red-200 italic">
                "{mockWeddingData.bride.quote}"
              </p>
            </div>
          </div>

          {/* Groom Section */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full shadow-2xl border-8 border-red-400 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5713647/pexels-photo-5713647.jpeg"
                  alt="Groom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-400 text-yellow-900 px-6 py-3 rounded-full font-bold text-xl">
                The Groom
              </div>
            </div>
            <h3 className="text-4xl font-bold text-red-300 mb-4">Raju</h3>
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 border border-red-400">
              <p className="text-lg text-red-200 mb-3">
                <strong>Profession:</strong> {mockWeddingData.groom.profession}
              </p>
              <p className="text-lg text-red-200 mb-3">
                <strong>Education:</strong> {mockWeddingData.groom.education}
              </p>
              <p className="text-lg text-red-200 mb-3">
                <strong>Hobbies:</strong> {mockWeddingData.groom.hobbies}
              </p>
              <p className="text-yellow-200 italic">
                "{mockWeddingData.groom.quote}"
              </p>
            </div>
          </div>
        </div>

        {/* Love Story */}
        <div className="mt-16 text-center">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border-2 border-gradient-to-r from-yellow-400 to-red-400">
            <h3 className="text-3xl font-bold text-yellow-300 mb-6">Our Love Story</h3>
            <p className="text-lg text-white leading-relaxed">
              {mockWeddingData.loveStory}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;