
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
       <div className="bg-pakistan-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-cinzel text-gold font-bold mb-4">Contact Us</h1>
          <p className="text-stone-200 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out for feedback, inquiries, or just to say Salam!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-white p-10 rounded-3xl shadow-sm text-center border border-stone-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-cinzel font-bold text-pakistan-green mb-4">Visit Us</h3>
            <p className="text-stone-500 leading-relaxed">
              Ghulamullah Road Makli Thatta
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-10 rounded-3xl shadow-sm text-center border border-stone-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="text-2xl font-cinzel font-bold text-pakistan-green mb-4">Call Us</h3>
            <p className="text-stone-500 leading-relaxed">
              Customer Support: +92 3103543822<br/>
              Delivery Hotline: +92 3045942408
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-10 rounded-3xl shadow-sm text-center border border-stone-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-cinzel font-bold text-pakistan-green mb-4">Email Us</h3>
            <p className="text-stone-500 leading-relaxed">
              General Inquiries: yaseenyasir561@gmail.com<br/>
              Reservations: +92 3103543822
            </p>
          </div>
        </div>

        {/* Map Placeholder
        <div className="mt-20 h-96 bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner"> */}
           {/* <img 
             src="https://picsum.photos/seed/map/1200/400" 
             className="w-full h-full object-cover grayscale opacity-50" 
             alt="Map placeholder"
           /> */}
           {/* <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                <span className="font-bold text-stone-700">Baithak Restaurant is here!</span>
             </div> */}
           </div>
        </div>
      // </div>
    // </div>
  );
};

export default Contact;
