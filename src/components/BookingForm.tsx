import React, { useState } from 'react';
import { IconArrowRight } from './ui/Icons';

interface BookingFormProps {
  activeClinic: any;
  t: (key: string) => string;
}

const BookingFormComponent: React.FC<BookingFormProps> = ({ activeClinic, t }) => {
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName) return;

    const city = activeClinic?.city || 'Virtual Service Area';
    const state = activeClinic?.state || '';
    const dateStr = bookingDate ? ` for ${bookingDate}` : '';
    const phoneStr = bookingPhone ? ` (Phone: ${bookingPhone})` : '';
    const message = encodeURIComponent(
      `Hello Dr. Shilpa Thakur,\n\nI would like to schedule a remote clinical nutrition consultation.\n\nName: ${bookingName}${phoneStr}\nLocation: ${city}, ${state}${dateStr}\n\nPlease let me know the available consultation slots.`
    );

    const waUrl = `https://wa.me/917696160133?text=${message}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-emerald-950 rounded-[32px] text-white p-8 shadow-xl border border-emerald-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400 opacity-5 rounded-full blur-2xl"></div>
      <h3 className="text-xl font-bold brand-font mb-2">{t('registerButton')}</h3>
      <p className="text-xs text-emerald-200/80 mb-6 leading-relaxed">
        {t('registerAppointment')} <strong>{activeClinic?.city}</strong>. Direct encrypted routing to Dr. Shilpa Thakur's clinical telehealth desk via WhatsApp.
      </p>

      <form onSubmit={handleBookingSubmit} className="space-y-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="bookingName" className="text-[9px] font-black uppercase tracking-widest text-emerald-300">Your Full Name</label>
          <input 
            id="bookingName"
            type="text" 
            required
            value={bookingName}
            onChange={e => setBookingName(e.target.value)}
            placeholder="e.g. Rahul Sharma" 
            aria-label="Your Full Name"
            className="bg-emerald-900/60 border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 placeholder:opacity-40"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="bookingPhone" className="text-[9px] font-black uppercase tracking-widest text-emerald-300">Contact Number (Optional)</label>
          <input 
            id="bookingPhone"
            type="tel" 
            value={bookingPhone}
            onChange={e => setBookingPhone(e.target.value)}
            placeholder="e.g. +91 98765-43210" 
            aria-label="Contact Number"
            className="bg-emerald-900/60 border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 placeholder:opacity-40"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="bookingDate" className="text-[9px] font-black uppercase tracking-widest text-emerald-300">Preferred Consult Date</label>
          <input 
            id="bookingDate"
            type="date" 
            required
            value={bookingDate}
            onChange={e => setBookingDate(e.target.value)}
            aria-label="Preferred Consult Date"
            className="bg-emerald-900/60 border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full btn-primary mt-4 flex items-center justify-center gap-2 cursor-pointer"
        >
          {t('registerButton')} <IconArrowRight size={14} />
        </button>
      </form>
    </div>
  );
};

export const BookingForm = React.memo(BookingFormComponent);
