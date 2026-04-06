// data.js - Universal Product Database for ALL Categories

const products = [
  // ELECTRONICS
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    shortDesc: "40hr battery, premium sound quality, Bluetooth 5.3",
    fullDesc: "Experience crystal-clear audio with advanced noise cancellation. 40-hour battery life, comfortable ear cushions, and seamless connectivity.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format",
    category: "Electronics",
    whatsappNumber: "2348123456789"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 149.00,
    shortDesc: "Heart rate monitor, GPS, 7-day battery life",
    fullDesc: "Track your fitness goals with precision. Features heart rate monitoring, GPS tracking, sleep analysis, and smartphone notifications.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format",
    category: "Electronics",
    whatsappNumber: "2348123456789"
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    shortDesc: "Waterproof, 20hr playtime, 360° sound",
    fullDesc: "Take your music anywhere with this rugged, waterproof speaker. Delivers rich 360° sound and pairs with any Bluetooth device.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format",
    category: "Electronics",
    whatsappNumber: "2348123456789"
  },
  {
    id: 4,
    name: "Laptop Backpack with USB Port",
    price: 59.99,
    shortDesc: "Anti-theft, fits 17-inch laptop, durable",
    fullDesc: "Stylish and functional backpack with built-in USB charging port, anti-theft pocket, and comfortable padded straps.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format",
    category: "Electronics",
    whatsappNumber: "2348123456789"
  },

  // FURNITURE
  {
    id: 5,
    name: "Modern Ergonomic Office Chair",
    price: 249.99,
    shortDesc: "Adjustable lumbar support, breathable mesh",
    fullDesc: "Work in comfort with this ergonomic chair featuring adjustable height, lumbar support, and breathable mesh back.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&auto=format",
    category: "Furniture",
    whatsappNumber: "2348123456789"
  },
  {
    id: 6,
    name: "Minimalist Wooden Desk",
    price: 189.00,
    shortDesc: "Solid oak, 55-inch, cable management",
    fullDesc: "Beautiful solid oak desk with built-in cable management. Perfect for home office or gaming setup.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format",
    category: "Furniture",
    whatsappNumber: "2348123456789"
  },
  {
    id: 7,
    name: "Cozy Floor Lamp",
    price: 45.99,
    shortDesc: "Dimmable, modern design, LED compatible",
    fullDesc: "Create the perfect ambiance with this adjustable floor lamp. Features dimmable settings and modern minimalist design.",
    image: "https://images.unsplash.com/photo-1507473885765-e6b0578dac96?w=600&auto=format",
    category: "Furniture",
    whatsappNumber: "2348123456789"
  },

  // BEAUTY
  {
    id: 8,
    name: "Luxury Skincare Set",
    price: 89.99,
    shortDesc: "Cleanser, serum, moisturizer - all natural",
    fullDesc: "Complete 3-step skincare routine with organic ingredients. Paraben-free, cruelty-free, and suitable for all skin types.",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&auto=format",
    category: "Beauty",
    whatsappNumber: "2348123456789"
  },
  {
    id: 9,
    name: "Professional Hair Dryer",
    price: 129.00,
    shortDesc: "Ionic technology, fast drying, lightweight",
    fullDesc: "Salon-quality hair dryer with ionic technology for frizz-free, shiny results. Includes concentrator and diffuser attachments.",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&auto=format",
    category: "Beauty",
    whatsappNumber: "2348123456789"
  },
  {
    id: 10,
    name: "Perfume Gift Set",
    price: 75.50,
    shortDesc: "3 luxury scents, travel size, gift box",
    fullDesc: "Discover your signature scent with this elegant gift set featuring three premium fragrances in a beautiful box.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format",
    category: "Beauty",
    whatsappNumber: "2348123456789"
  },

  // GROCERIES
  {
    id: 11,
    name: "Organic Coffee Beans",
    price: 24.99,
    shortDesc: "100% Arabica, medium roast, 1kg bag",
    fullDesc: "Premium organic coffee beans sourced from Ethiopia. Rich, smooth flavor with chocolate and citrus notes.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format",
    category: "Groceries",
    whatsappNumber: "2348123456789"
  },
  {
    id: 12,
    name: "Gourmet Chocolate Box",
    price: 34.99,
    shortDesc: "24-piece assorted, premium Belgian",
    fullDesc: "Luxury Belgian chocolate assortment with caramel, praline, and dark chocolate varieties. Perfect for gifting.",
    image: "https://images.unsplash.com/photo-1549007953-2d2f6d3f2c8a?w=600&auto=format",
    category: "Groceries",
    whatsappNumber: "2348123456789"
  },
  {
    id: 13,
    name: "Artisan Olive Oil Set",
    price: 42.00,
    shortDesc: "Cold-pressed, 3 flavors, gift box",
    fullDesc: "Premium extra virgin olive oil set with garlic, lemon, and chili infusions. Perfect for cooking and dipping.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format",
    category: "Groceries",
    whatsappNumber: "2348123456789"
  },

  // TOYS & GAMES
  {
    id: 14,
    name: "Board Game Collection",
    price: 49.99,
    shortDesc: "5 classic games in one box, family fun",
    fullDesc: "Hours of entertainment with this 5-in-1 board game set including Chess, Checkers, Backgammon, and more.",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format",
    category: "Toys",
    whatsappNumber: "2348123456789"
  },
  {
    id: 15,
    name: "Building Blocks Set",
    price: 39.99,
    shortDesc: "500 pieces, creative play, ages 6+",
    fullDesc: "Spark creativity with this 500-piece building block set. Compatible with major brands and includes idea booklet.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format",
    category: "Toys",
    whatsappNumber: "2348123456789"
  },
  {
    id: 16,
    name: "Remote Control Car",
    price: 59.99,
    shortDesc: "High speed, rechargeable, off-road",
    fullDesc: "Thrilling RC car with all-terrain wheels, 20mph speed, and 30-minute runtime. Great for kids and adults!",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&auto=format",
    category: "Toys",
    whatsappNumber: "2348123456789"
  },

  // SPORTS
  {
    id: 17,
    name: "Yoga Mat Premium",
    price: 35.99,
    shortDesc: "Non-slip, eco-friendly, 6mm thick",
    fullDesc: "High-density yoga mat with excellent grip and cushioning. Eco-friendly materials and includes carrying strap.",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format",
    category: "Sports",
    whatsappNumber: "2348123456789"
  },
  {
    id: 18,
    name: "Adjustable Dumbbell Set",
    price: 89.99,
    shortDesc: "5-in-1 weight set, 50lbs max",
    fullDesc: "Space-saving adjustable dumbbells that replace 5 sets. Quick-change mechanism and non-slip grip.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format",
    category: "Sports",
    whatsappNumber: "2348123456789"
  },
  {
    id: 19,
    name: "Basketball",
    price: 29.99,
    shortDesc: "Official size, durable rubber, indoor/outdoor",
    fullDesc: "Premium basketball with deep channels for better grip. Suitable for both indoor and outdoor play.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format",
    category: "Sports",
    whatsappNumber: "2348123456789"
  },

  // BOOKS
  {
    id: 20,
    name: "Bestseller Novel Set",
    price: 45.00,
    shortDesc: "3 award-winning books, paperback",
    fullDesc: "Collection of three critically acclaimed novels spanning mystery, romance, and literary fiction.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&auto=format",
    category: "Books",
    whatsappNumber: "2348123456789"
  },
  {
    id: 21,
    name: "Cookbook - International Cuisine",
    price: 28.99,
    shortDesc: "100+ recipes, full-color photos",
    fullDesc: "Explore global flavors with this comprehensive cookbook featuring easy-to-follow recipes and stunning photography.",
    image: "https://images.unsplash.com/photo-1581527451033-6c3c4d7d1b9a?w=600&auto=format",
    category: "Books",
    whatsappNumber: "2348123456789"
  },
  {
    id: 22,
    name: "Children's Storybook Collection",
    price: 32.99,
    shortDesc: "5 illustrated books, ages 3-8",
    fullDesc: "Delightful set of five beautifully illustrated storybooks that teach kindness, courage, and friendship.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format",
    category: "Books",
    whatsappNumber: "2348123456789"
  }
];

// Cart functions
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElements = document.querySelectorAll('.cart-count');
  cartCountElements.forEach(el => {
    if (el) el.textContent = count;
  });
}

function addToCart(productId, quantity = 1) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity });
  }
  saveCart();
  showToast('✓ Added to cart!');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('🗑️ Removed from cart');
}

function updateQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, parseInt(quantity) || 1);
    saveCart();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--primary);
    color: white;
    padding: 12px 24px;
    border-radius: 40px;
    z-index: 9999;
    animation: fadeInOut 2s ease;
    font-weight: 500;
    box-shadow: var(--shadow-md);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// WhatsApp handler
function buyOnWhatsApp(product, quantity = 1) {
  const message = `Hello! I'm interested in purchasing "${product.name}" at $${product.price.toFixed(2)} each.\n\nQuantity: ${quantity}\nTotal: $${(product.price * quantity).toFixed(2)}\n\nPlease confirm availability and shipping cost. Thank you!`;
  const encodedMsg = encodeURIComponent(message);
  const phone = product.whatsappNumber || "2348123456789";
  const waLink = `https://wa.me/${phone}?text=${encodedMsg}`;
  window.open(waLink, '_blank');
}

// Hero Slider Data (Universal themes)
const slidesData = [
  {
    bg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format",
    headline: "Everything You Need",
    subtext: "Shop millions of products across electronics, home, beauty & more",
    cta: "Shop Now"
  },
  {
    bg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format",
    headline: "Summer Sale",
    subtext: "Up to 50% off on selected items | Limited time offer",
    cta: "Grab Deal"
  },
  {
    bg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format",
    headline: "Free Shipping Worldwide",
    subtext: "On orders over $50 | 30-day money-back guarantee",
    cta: "Explore"
  }
];