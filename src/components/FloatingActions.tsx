import { MessageCircle, Phone } from 'lucide-react';
import { callLink, whatsappLink } from '../data/clinic';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <a
        href={callLink}
        aria-label="Call the clinic"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white shadow-card transition-all duration-300 hover:scale-110 hover:bg-primary-800"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary-500" />
        <Phone className="relative h-5 w-5" />
      </a>

      <a
        href={whatsappLink("Hello! I'd like to book an appointment at Dr. Saket's Dental Clinic.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5b]"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <MessageCircle className="relative h-6 w-6" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </div>
  );
}
