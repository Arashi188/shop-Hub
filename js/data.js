// data.js - Empty Product Database (Add your own products via Admin Dashboard)

// Default products - EMPTY ARRAY (no sample products)
const defaultProducts = [];

// Load products from localStorage or use empty array
let products = [];

function loadProducts() {
  const savedProducts = localStorage.getItem('luxe_products');
  if (savedProducts) {
    products = JSON.parse(savedProducts);
    console.log('✅ Products loaded from localStorage:', products.length);
  } else {
    products = [...defaultProducts];
    saveProducts();
    console.log('📦 No products found. Add your products via Admin Dashboard!');
  }
}

function saveProducts() {
  localStorage.setItem('luxe_products', JSON.stringify(products));
  // Also update window.products for other scripts
  window.products = products;
}

// Initialize products
loadProducts();

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
    if (product) {
      cart.push({ ...product, quantity });
    }
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
    font-family: 'Inter', sans-serif;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// WhatsApp handler
function buyOnWhatsApp(product, quantity = 1) {
  const message = `Hello! I'm interested in purchasing "${product.name}" at ₦${product.price.toLocaleString('en-NG')} each.\n\nQuantity: ${quantity}\nTotal: ₦${(product.price * quantity).toLocaleString('en-NG')}\n\nPlease confirm availability and shipping cost. Thank you!`;
  const encodedMsg = encodeURIComponent(message);
  const phone = product.whatsappNumber || "2347088028747";
  const waLink = `https://wa.me/${phone}?text=${encodedMsg}`;
  window.open(waLink, '_blank');
}

// Hero Slider Data
const slidesData = [
  {
    bg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format",
    headline: "Welcome to LUXE",
    subtext: "Your premier marketplace for quality products",
    cta: "Shop Now"
  },
  {
    bg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format",
    headline: "New Arrivals",
    subtext: "Discover our latest collection",
    cta: "Shop Now"
  },
  {
    bg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format",
    headline: "Free Shipping",
    subtext: "On orders over ₦75,000",
    cta: "Shop Now"
  }
];

// Make products available globally
window.products = products;
window.defaultProducts = defaultProducts;
window.saveProducts = saveProducts;
window.loadProducts = loadProducts;

console.log('🛍️ LUXE Marketplace Ready! Add your products via Admin Dashboard.');