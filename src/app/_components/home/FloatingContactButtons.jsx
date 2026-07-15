'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PhoneCall } from 'lucide-react';

export default function FloatingContactButtons() {
  const whatsappNumber = "919211827216"; 
  const whatsappMessage = "Hi, I am interested in your services. Can we connect?";
  const callNumber = "+919211827216";

  return (
    <div className="fixed bottom-24 md:bottom-6 left-6 z-[9999] flex flex-col gap-4 items-start">
      {/* Call Now Button (Mobile Only) */}
      <a
        href={`tel:${callNumber}`}
        className="md:hidden group flex items-center justify-center w-12 h-12 rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,0.3)] transition-all duration-300 hover:scale-110 border border-white/20"
        style={{ backgroundColor: '#0083FF', color: 'white' }}
        aria-label="Call Now"
      >
        <PhoneCall size={20} className="animate-pulse" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,0.3)] transition-all duration-300 hover:scale-110 border border-white/20"
        style={{ backgroundColor: '#25D366', color: 'white' }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
