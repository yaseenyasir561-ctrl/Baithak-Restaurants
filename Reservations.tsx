
import React, { useState, useEffect } from 'react';
import { Reservation } from '../types';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof Reservation, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof Reservation, string>> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
        localStorage.setItem('reservations', JSON.stringify([...existing, formData]));
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 2,
          message: ''
        });
      } catch (e) {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl font-cinzel text-pakistan-green font-bold mb-6">Book Your Baithak</h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Planning a family gathering, a business lunch, or a special celebration? 
              Secure your spot at Baithak and let us take care of the rest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="font-bold text-gold mb-2">Group Bookings</h3>
              <p className="text-stone-500 text-sm">For parties of 10 or more, please contact us directly at <span className="text-pakistan-green font-bold">+03103543822</span>.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="font-bold text-gold mb-2">Catering</h3>
              <p className="text-stone-500 text-sm">We provide authentic catering services for weddings, corporate events, and home parties.</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80">
             <img 
               src="https://picsum.photos/seed/table/800/600" 
               className="w-full h-full object-cover"
               alt="Dining table set up"
             />
             <div className="absolute inset-0 bg-pakistan-green/20"></div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-stone-100 relative">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-gold text-stone-900 px-6 py-2 rounded-full font-bold shadow-lg">
            Reservation Form
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.name ? 'border-red-400' : 'border-stone-100 focus:border-gold'}`}
                  placeholder="Yasir Jokhio"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.email ? 'border-red-400' : 'border-stone-100 focus:border-gold'}`}
                  placeholder="yj@gmail.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.phone ? 'border-red-400' : 'border-stone-100 focus:border-gold'}`}
                  placeholder="+92 XXX XXXXXXX"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-100 focus:border-gold outline-none"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} Guests</option>)}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.date ? 'border-red-400' : 'border-stone-100 focus:border-gold'}`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Time</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.time ? 'border-red-400' : 'border-stone-100 focus:border-gold'}`}
                />
                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Special Requests (Optional)</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-100 focus:border-gold outline-none resize-none"
                placeholder="Birthdays, anniversaries, or dietary requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-pakistan-green text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-colors flex items-center justify-center disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <span className="flex items-center">
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Processing...
                </span>
              ) : 'Confirm Reservation'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-emerald-100 text-emerald-800 rounded-xl text-center font-semibold">
                Successfully Booked! We look forward to seeing you.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-100 text-red-800 rounded-xl text-center font-semibold">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
