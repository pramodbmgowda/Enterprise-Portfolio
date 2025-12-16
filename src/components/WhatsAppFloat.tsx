import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/919663170200" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-50 hover:bg-[#128C7E] transition-transform hover:scale-110 flex items-center gap-2 group"
    >
      <MessageCircle size={28} className="fill-white text-[#25D366]" />
      <span className="font-bold hidden md:inline pr-1">WhatsApp Us</span>
    </a>
  );
}