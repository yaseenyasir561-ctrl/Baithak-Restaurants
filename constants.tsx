
import { MenuItem, Category } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Biryani & Rice
  {
    id: 1,
    name: "Special Chicken Biryani",
    description: "Fragrant basmati rice layered with spiced chicken, caramelized onions, and fresh mint.",
    price: 1250,
    category: Category.BiryaniRice,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop",
    featured: true,
    isSpecial: true,
    spiceLevel: 'Medium',
    ingredients: ['Basmati Rice', 'Chicken', 'Saffron', 'Mint', 'Caramelized Onions']
  },
  {
    id: 2,
    name: "Sindhi Beef Biryani",
    description: "Traditional Sindhi style beef biryani with spicy potatoes and dried plums.",
    price: 1450,
    category: Category.BiryaniRice,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop",
    spiceLevel: 'Hot',
    ingredients: ['Beef Shank', 'Potato', 'Dried Plums', 'Green Chilies', 'Rice']
  },
  {
    id: 16,
    name: "Mutton Dum Biryani",
    description: "Premium goat meat slow-cooked with aged rice and secret Baithak spices.",
    price: 1850,
    category: Category.BiryaniRice,
    image: "https://i.postimg.cc/tCzPW9bH/1200-by-1200-images-2.jpg",
    featured: true,
    spiceLevel: 'Medium',
    ingredients: ['Mutton', 'Aged Rice', 'Baithak Masala', 'Yogurt']
  },
  {
    id: 3,
    name: "Vegetable Pulao",
    description: "Aromatic light rice cooked with seasonal garden vegetables.",
    price: 950,
    category: Category.BiryaniRice,
    image: "https://i.postimg.cc/YSvm5gWw/Veg-Pulao-2.jpg",
    spiceLevel: 'Mild',
    ingredients: ['Carrots', 'Peas', 'Beans', 'Cumin', 'Rice']
  },
  {
    id: 17,
    name: "Royal Zarda",
    description: "Saffron-flavored sweet rice with dry fruits and traditional khoya.",
    price: 750,
    category: Category.BiryaniRice,
    image: "https://i.postimg.cc/T3YbcB2w/download.webp",
    spiceLevel: 'None',
    ingredients: ['Rice', 'Sugar', 'Saffron', 'Almonds', 'Khoya']
  },

  // BBQ & Grill
  {
    id: 4,
    name: "Beef Seekh Kabab",
    description: "Smoky charcoal-grilled beef skewers with fresh coriander and green chilies.",
    price: 1100,
    category: Category.BBQGrill,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop",
    featured: true,
    spiceLevel: 'Medium',
    ingredients: ['Beef Mince', 'Fresh Coriander', 'Baithak Spices', 'Green Chili']
  },
  {
    id: 18,
    name: "Chicken Malai Boti",
    description: "Creamy boneless chicken cubes grilled to perfection over hot coals.",
    price: 1200,
    category: Category.BBQGrill,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop",
    spiceLevel: 'Mild',
    ingredients: ['Chicken', 'Fresh Cream', 'Black Pepper', 'Garlic']
  },
  {
    id: 5,
    name: "Chicken Tikka (Full)",
    description: "Traditional Lahori style spicy quarter chicken with charred finish.",
    price: 1350,
    category: Category.BBQGrill,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
    spiceLevel: 'Hot',
    ingredients: ['Chicken Quarter', 'Yogurt', 'Chili Powder', 'Lemon']
  },
  {
    id: 6,
    name: "Lamb Chops",
    description: "Succulent chops marinated in a rich ginger-garlic paste and grilled.",
    price: 1850,
    category: Category.BBQGrill,
    image: "https://i.postimg.cc/qM2wYfdx/20230318073730-lamb-rack-sharing-683x1024.jpg",
    featured: true,
    isSpecial: true,
    spiceLevel: 'Medium',
    ingredients: ['Lamb', 'Ginger', 'Garlic', 'Papaya Paste']
  },

  // Curries & Dals
  {
    id: 7,
    name: "Chicken Karahi",
    description: "Wok-cooked chicken with fresh tomatoes, ginger, and green chilies.",
    price: 1550,
    category: Category.CurriesDals,
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=800&auto=format&fit=crop",
    featured: true,
    spiceLevel: 'Hot',
    ingredients: ['Chicken', 'Fresh Tomatoes', 'Ginger', 'Green Chilies']
  },
  {
    id: 8,
    name: "Beef Nihari",
    description: "The ultimate breakfast stew, slow-cooked beef with bone marrow richness.",
    price: 1650,
    category: Category.CurriesDals,
    image: "https://i.postimg.cc/P53wVKPs/OIP-(1).webp",
    isSpecial: true,
    spiceLevel: 'Medium',
    ingredients: ['Beef Shank', 'Bone Marrow', 'Fennel', 'Ginger']
  },
  {
    id: 9,
    name: "Dal Fry",
    description: "Yellow lentils tempered with ghee, garlic, and cumin seeds.",
    price: 850,
    category: Category.CurriesDals,
    image: "https://i.postimg.cc/cL43cP1L/Dal-Tadka-Featured.jpg",
    spiceLevel: 'Mild',
    ingredients: ['Moong Dal', 'Masoor Dal', 'Ghee', 'Garlic']
  },

  // Snacks & Starters
  {
    id: 10,
    name: "Crispy Samosa (2pcs)",
    description: "Homemade flaky pastry filled with spiced potatoes and green peas.",
    price: 450,
    category: Category.SnacksStarters,
    image: "https://i.postimg.cc/QtHGk8wc/Keema-Samosa-05.jpg",
    spiceLevel: 'Mild',
    ingredients: ['Pastry', 'Potato', 'Peas', 'Cumin']
  },
  {
    id: 11,
    name: "Mixed Pakora",
    description: "Crispy fried assorted vegetable fritters in spiced gram flour.",
    price: 550,
    category: Category.SnacksStarters,
    image: "https://i.postimg.cc/K8qMpQRm/Pakora-1-SQ1.jpg",
    spiceLevel: 'Medium',
    ingredients: ['Gram Flour', 'Onion', 'Potato', 'Spinach']
  },

  // Breads & Roti
  {
    id: 12,
    name: "Butter Naan",
    description: "Freshly baked soft clay-oven bread brushed with pure butter.",
    price: 150,
    category: Category.BreadsRoti,
    image: "https://i.postimg.cc/251BsvZp/Screenshot-6-1-2026-17238-ohsweetbasil-com.jpg",
    spiceLevel: 'None',
    ingredients: ['Flour', 'Milk', 'Butter']
  },
  {
    id: 13,
    name: "Garlic Naan",
    description: "Soft naan topped with fresh minced garlic and parsley.",
    price: 180,
    category: Category.BreadsRoti,
    image: "https://i.postimg.cc/P5rDM0fN/Homemade-Garlic-Naan-72-dpi.jpg",
    spiceLevel: 'None',
    ingredients: ['Flour', 'Garlic', 'Parsley']
  },

  // Beverages
  {
    id: 14,
    name: "Sweet/Salted Lassi",
    description: "Creamy hand-whisked yogurt drink, a Punjabi classic.",
    price: 350,
    category: Category.Beverages,
    image: "https://i.postimg.cc/J4QJZR8s/26RAMADAN-HYDRATIONREX1-ZI-Salted-Lassi-vbtq-medium-Square-At3X.jpg",
    spiceLevel: 'None',
    ingredients: ['Yogurt', 'Ice', 'Sugar/Salt']
  },
  {
    id: 27,
    name: "Mango Lassi",
    description: "Creamy yogurt drink blended with fresh mango pulp.",
    price: 450,
    category: Category.Beverages,
    image: "https://i.postimg.cc/d0hTbdTX/mango-lassi-2.jpg",
    spiceLevel: 'None',
    ingredients: ['Mango Pulp', 'Yogurt', 'Honey']
  },
  {
    id: 15,
    name: "Doodh Patti Chai",
    description: "Traditional strong milk tea brewed with cardamom.",
    price: 150,
    category: Category.Beverages,
    image: "https://i.postimg.cc/HkZyv3Vd/doodh-patti-chai1.jpg",
    spiceLevel: 'None',
    ingredients: ['Milk', 'Tea Leaves', 'Cardamom']
  },
  {
    id: 28,
    name: "Kashmiri Chai",
    description: "The famous pink tea brewed with nuts and sea salt.",
    price: 280,
    category: Category.Beverages,
    image: "https://i.postimg.cc/Qdx7qvN9/kashmiri-tea-1.gif",
    spiceLevel: 'None',
    ingredients: ['Kashmiri Tea', 'Pistachio', 'Almonds', 'Milk']
  }
];
