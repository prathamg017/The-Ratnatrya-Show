'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhatsAppShare() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  useEffect(() => {
    // Show tooltip after 5 seconds to draw attention
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 12000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const shareText = "🙏 जय जिनेन्द्र! रत्नत्रय शो — एक अद्भुत जैन सांस्कृतिक अनुभव। निःशुल्क प्रवेश। अपने शहर में आमंत्रित करें: https://theratnatrayashow.com/invite";
  const encodedText = encodeURIComponent(shareText);
  const whatsappUrl = `https://wa.me/?text=${encodedText}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white px-4 py-2 rounded-xl shadow-2xl border border-[#D4AF37] text-sm font-bold text-[#8B1538] whitespace-nowrap mb-2 relative"
          >
            <span>Bhakti Spread Karein! 🙏</span>
            {/* Tooltip arrow */}
            <div className="absolute top-[100%] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
            <div className="absolute top-[100%] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#D4AF37] mt-[1px]"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white text-3xl hover:bg-[#128C7E] transition-all relative group"
        onClick={() => setShowTooltip(false)}
      >
        {/* Glowing aura */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:block transition-all"></div>
        
        {/* WhatsApp Icon (using simple emoji as fallback for light-weight) */}
        <span>📱</span>
        
        {/* Hover label for desktop */}
        <span className="absolute right-full mr-4 bg-[#1A1A1A] text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Share in Sangh Groups
        </span>
      </motion.a>
    </div>
  );
}
