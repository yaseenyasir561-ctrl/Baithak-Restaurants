
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';

const Home: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter(item => item.featured).slice(0, 3);

  return (
    <div className="space-y-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1920&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover animate-pulse-slow scale-105" 
          alt="Pakistani Feast"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto hero-pattern p-16 rounded-[40px] border border-white/10 backdrop-blur-md animate-fadeInUp">
          <h1 className="text-6xl md:text-9xl font-bold mb-6 font-cinzel text-gold drop-shadow-2xl">
            BAITHAK
          </h1>
          <p className="text-xl md:text-3xl mb-12 font-light text-stone-100 max-w-3xl mx-auto leading-relaxed tracking-wider">
            Savor the Soul of Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link 
              to="/menu" 
              className="bg-gold text-stone-900 px-12 py-5 rounded-full font-bold hover:bg-white transition-all duration-500 transform hover:scale-110 shadow-2xl tracking-widest text-sm uppercase"
            >
              Explore Menu
            </Link>
            <Link 
              to="/reservations" 
              className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all duration-500 shadow-2xl tracking-widest text-sm uppercase"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group animate-fadeInUp">
             <div className="absolute -top-8 -left-8 w-40 h-40 bg-gold rounded-full -z-10 opacity-20 blur-3xl group-hover:opacity-50 transition-all duration-700"></div>
             <img 
               src="https://i.postimg.cc/Vv2CLNPm/images-(1).jpg" 
               className="rounded-[40px] shadow-2xl border-[12px] border-white transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.02]"
               alt="Traditional Kitchen"
             />
             <div className="absolute -bottom-8 -right-8 w-48 h-48 border-[16px] border-pakistan-green/10 -z-10 rounded-[40px]"></div>
          </div>
          <div className="space-y-10 animate-fadeInUp stagger-2">
            <h2 className="text-5xl md:text-6xl font-cinzel text-pakistan-green font-bold leading-tight">Heritage in <br/><span className="text-gold">Every Bite</span></h2>
            <div className="h-2 w-32 bg-gold rounded-full"></div>
            <p className="text-stone-600 leading-relaxed text-xl font-light">
              "Baithak" represents the essence of Sindhi hospitality. It's more than a dining room; it's where friendships are forged over simmering Karahis and steaming Naans.
            </p>
            <p className="text-stone-600 leading-relaxed text-xl font-light">
              We recreate the magic of Lahore's Gawalmandi and Karachi's Burns Road, bringing authentic flavors to your table with contemporary elegance.
            </p>
            <div className="pt-8">
               <Link to="/contact" className="inline-flex items-center text-pakistan-green font-bold hover:text-gold transition-all text-xl group">
                 Our Heritage <span className="ml-4 group-hover:translate-x-3 transition-transform text-2xl">→</span>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="bg-stone-100 py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-cinzel text-pakistan-green mb-6 font-bold">Chef's Recommendations</h2>
          <p className="text-stone-500 mb-20 max-w-lg mx-auto italic">Hand-selected masterpieces from our head chef's personal collection.</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {featuredItems.map((item, idx) => (
              <div key={item.id} className={`bg-white rounded-[40px] shadow-lg overflow-hidden transition-all duration-500 group menu-card animate-fadeInUp stagger-${(idx % 3) + 1}`}>
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 right-6 bg-gold text-stone-900 px-6 py-2 rounded-full text-lg font-black shadow-xl">
                    ₨ {item.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-10 text-left">
                  <span className="text-[11px] font-black text-gold uppercase tracking-[0.3em] mb-4 block">{item.category}</span>
                  <h3 className="text-2xl font-bold mb-4 font-cinzel group-hover:text-pakistan-green transition-colors leading-tight">{item.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">{item.description}</p>
                  <Link to="/menu" className="inline-block text-pakistan-green font-black text-xs uppercase tracking-widest hover:text-gold transition-colors">
                    Explore Dish <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24">
            <Link 
              to="/menu" 
              className="inline-block bg-pakistan-green text-white px-16 py-5 rounded-full hover:bg-emerald-900 transition-all shadow-2xl hover:shadow-gold/20 font-bold transform hover:scale-105 tracking-widest uppercase text-sm"
            >
              See the Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Atmospheric Gallery with parallax-like effect */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24 animate-fadeInUp">
          <h2 className="text-5xl font-cinzel text-pakistan-green font-bold">A Sensory Journey</h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-8 animate-fadeInUp stagger-1">
            <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600" className="rounded-3xl object-cover w-full h-72 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Biryani"/>
            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600" className="rounded-3xl object-cover w-full h-56 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Nihari"/>
          </div>
          <div className="space-y-8 md:mt-16 animate-fadeInUp stagger-2">
            <img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600" className="rounded-3xl object-cover w-full h-96 shadow-2xl hover:brightness-110 transition-all duration-500" alt="BBQ"/>
            <img src="https://images.unsplash.com/photo-1601050690694-22003c20c326?q=80&w=600" className="rounded-3xl object-cover w-full h-56 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Naan"/>
          </div>
          <div className="space-y-8 animate-fadeInUp stagger-3">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600" className="rounded-3xl object-cover w-full h-72 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Karahi"/>
            <img src="https://images.unsplash.com/photo-1571006682855-3fc35578c638?q=80&w=600" className="rounded-3xl object-cover w-full h-56 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Lassi"/>
          </div>
          <div className="space-y-8 md:mt-16 animate-fadeInUp stagger-1">
            <img src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=600" className="rounded-3xl object-cover w-full h-96 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Chai"/>
            <img src="https://images.unsplash.com/photo-1601050690597-df056fbec7ad?q=80&w=600" className="rounded-3xl object-cover w-full h-56 shadow-2xl hover:brightness-110 transition-all duration-500" alt="Samosa"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
