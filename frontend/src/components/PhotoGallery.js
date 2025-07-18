import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1665960213508-48f07086d49c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDB8fHx8MTc1MjgwODM4NHww&ixlib=rb-4.1.0&q=85",
      caption: "Engagement Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1722952934708-749c22eb2e58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDB8fHx8MTc1MjgwODM4NHww&ixlib=rb-4.1.0&q=85",
      caption: "Pre-Wedding Photoshoot"
    },
    {
      url: "https://images.unsplash.com/photo-1722952934661-dde241aeb591?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDB8fHx8MTc1MjgwODM4NHww&ixlib=rb-4.1.0&q=85",
      caption: "Traditional Attire"
    },
    {
      url: "https://images.pexels.com/photos/17493647/pexels-photo-17493647.jpeg",
      caption: "Haldi Ceremony"
    },
    {
      url: "https://images.pexels.com/photos/27118152/pexels-photo-27118152.jpeg",
      caption: "Mehndi Celebration"
    },
    {
      url: "https://images.pexels.com/photos/27155552/pexels-photo-27155552.jpeg",
      caption: "Family Portrait"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-red-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 mb-4">
            Wedding Gallery
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Capturing the beautiful moments of our journey together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-2">{image.caption}</h3>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-400 transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
              >
                <X size={32} />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
              >
                <ChevronRight size={48} />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-w-full max-h-full rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-2xl font-bold bg-black bg-opacity-50 py-2 px-4 rounded-lg">
                  {selectedImage.caption}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;