
import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category, SpiceLevel, MenuItem } from '../types';

const SpiceBadge: React.FC<{ level?: SpiceLevel }> = ({ level }) => {
  if (!level || level === 'None') return null;
  const colors = {
    Mild: 'text-green-600 bg-green-50',
    Medium: 'text-orange-600 bg-orange-50',
    Hot: 'text-red-600 bg-red-50'
  };
  const icons = {
    Mild: '🌶️',
    Medium: '🌶️🌶️',
    Hot: '🌶️🌶️🌶️'
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${colors[level]}`}>
      {icons[level]} {level}
    </span>
  );
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const categories: (Category | 'All')[] = ['All', ...Object.values(Category)];

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      {/* Menu Header with Fade-In Animation */}
      <div className="bg-pakistan-green text-white py-24 relative overflow-hidden animate-fadeInUp">
        <div className="absolute inset-0 opacity-10 hero-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-cinzel text-gold font-bold mb-4 drop-shadow-md">
            Our Culinary Legacy
          </h1>
          <p className="text-stone-200 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Handcrafted recipes passed down through generations, served with authentic Pakistani warmth.
          </p>
        </div>
      </div>

      {/* Sticky Category Filter */}
      <div className="sticky top-20 bg-stone-50/80 backdrop-blur-md z-40 shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 min-w-max md:min-w-0">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 whitespace-nowrap animate-fadeInUp stagger-${(idx % 3) + 1} ${
                  activeCategory === cat 
                    ? 'bg-gold border-gold text-stone-900 shadow-lg scale-105' 
                    : 'bg-white border-stone-200 text-stone-500 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-3xl overflow-hidden border border-stone-100 flex flex-col group menu-card animate-fadeInUp stagger-${(idx % 3) + 1}`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Favorites Heart Icon */}
                <button 
                  onClick={(e) => toggleFavorite(e, item.id)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-white transition-all transform active:scale-90 z-10"
                >
                  <svg 
                    className={`w-5 h-5 transition-colors ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-stone-300 hover:text-red-400'}`} 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.isSpecial && (
                    <span className="bg-gold text-stone-900 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg tracking-widest">
                      Chef Special
                    </span>
                  )}
                  <SpiceBadge level={item.spiceLevel} />
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
                   <span className="text-white text-2xl font-bold font-cinzel">
                      ₨ {item.price.toLocaleString()}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-stone-900 font-cinzel group-hover:text-pakistan-green transition-colors leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-stone-500 text-sm mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                
                {/* Ingredients Tooltip-style info */}
                {item.ingredients && (
                  <div className="mt-auto pt-6 border-t border-stone-50">
                    <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest mb-2">Key Ingredients</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.ingredients.map((ing, i) => (
                        <span key={i} className="text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-32 text-stone-300">
            <svg className="w-20 h-20 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-2xl font-cinzel tracking-widest">No delicacies found</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-6 text-gold font-bold hover:underline"
            >
              Show all categories
            </button>
          </div>
        )}
      </div>

      {/* Spice Legend with Animation */}
      <div className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-white p-10 rounded-[40px] border border-stone-100 shadow-sm text-center animate-fadeInUp">
          <h4 className="font-bold text-pakistan-green mb-8 font-cinzel text-xl tracking-widest uppercase">The Flavor Spectrum</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div className="flex flex-col items-center gap-3">
               <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-xl">🌶️</div>
               <span className="font-bold text-stone-800">Mild</span>
               <p className="text-xs text-stone-400">Gentle infusion of spices for a light, aromatic experience.</p>
             </div>
             <div className="flex flex-col items-center gap-3">
               <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-xl">🌶️🌶️</div>
               <span className="font-bold text-stone-800">Medium</span>
               <p className="text-xs text-stone-400">Balanced heat that dances on the palate without overwhelming.</p>
             </div>
             <div className="flex flex-col items-center gap-3">
               <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-xl">🌶️🌶️🌶️</div>
               <span className="font-bold text-stone-800">Authentic Hot</span>
               <p className="text-xs text-stone-400">The true Lahori kick. Bold, fiery, and deeply satisfying.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
