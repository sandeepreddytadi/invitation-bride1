import React from "react";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-900 via-yellow-900 to-red-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Wedding Details */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Heart className="w-8 h-8 text-red-400 fill-current mr-2" />
              <h3 className="text-2xl font-bold text-yellow-400">Wedding Details</h3>
            </div>
            <div className="space-y-2 text-yellow-200">
              <p className="font-semibold">August 17th, 2025</p>
              <p>Sunday at 7:00 PM onwards</p>
              <div className="flex items-start justify-center md:justify-start mt-3">
                <MapPin className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                <div>
                  <p>N.V.R Function Hall A/C</p>
                  <p>Beside RTC Complex</p>
                  <p>Ramachandrapuram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-yellow-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-yellow-200">wedding@sunanda-raju.com</span>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Thank You</h3>
            <p className="text-yellow-200 leading-relaxed">
              Your presence at our wedding will be the greatest gift of all. 
              We look forward to celebrating this special day with you!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-yellow-400 mt-12 pt-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Heart className="w-6 h-6 text-red-400 fill-current mx-2" />
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
              Sunanda & Raju
            </span>
            <Heart className="w-6 h-6 text-red-400 fill-current mx-2" />
          </div>
          <p className="text-yellow-200 text-lg">
            Together forever, starting August 17th, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;