// data.js - CLEAN WORKING VERSION

// ============================================
// YOUR SUPABASE KEYS - PUT YOUR ACTUAL KEYS HERE
// ============================================
const LUXE_SUPABASE_URL = "https://negqfvyhxtpkunucszjd.supabase.co";
const LUXE_SUPABASE_KEY = "sb_publishable_fu0RDcDsBPp7STVvKGp3GA_HfGe51kO";

// ============================================
// HERO SLIDER DATA
// ============================================
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

// ============================================
// SUPA BASE (No duplicate variables)
// ============================================
let luxeSupabase = null;
let products = [];

function initLuxeSupabase() {
  if (typeof supabaseJs !== 'undefined') {
    luxeSupabase = supabaseJs.createClient(LUXE_SUPABASE_URL, LUXE_SUPABASE_KEY);
    console.log('✅ Supabase connected');
    return true;
  }
  return false;
}

function loadLuxeSupabase() {
  return new Promise((resolve) => {
    if (typeof supabaseJs !== 'undefined') {
      luxeSupabase = supabaseJs.createClient(LUXE_SUPABASE_URL, LUXE_SUPABASE_KEY);
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = () => {
      luxeSupabase = supabaseJs.createClient(LUXE_SUPABASE_URL, LUXE_SUPABASE_KEY);
      resolve();
    };
    document.head.appendChild(script);
  });
}

// ============================================
// PRODUCT FUNCTIONS
// ============================================

async function loadProducts() {
  if (!luxeSupabase) await loadLuxeSupabase();
  
  try {
    const { data, error } = await luxeSupabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    
    products = data || [];
    window.products = products;
    console.log('✅ Products loaded:', products.length);
    return products;
  } catch (error) {
    console.error('❌ Error:', error);
    products = [];
    return products;
  }
}

async function addProduct(product) {
  if (!luxeSupabase) await loadLuxeSupabase();
  
  try {
    const { data, error } = await luxeSupabase
      .from('products')
      .insert([{
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
        shortdesc: product.shortDesc,
        fulldesc: product.fullDesc,
        whatsapp: product.whatsappNumber || "2349134391505"
      }])
      .select();
    
    if (error) throw error;
    
    if (data && data[0]) {
      product.id = data[0].id;
      products.push(product);
      window.products = products;
    }
    return product;
  } catch (error) {
    console.error('❌ Error:', error);
    return null;
  }
}

async function deleteProduct(productId) {
  if (!luxeSupabase) await loadLuxeSupabase();
  
  try {
    await luxeSupabase.from('products').delete().eq('id', productId);
    products = products.filter(p => p.id !== productId);
    window.products = products;
    return true;
  } catch (error) {
    console.error('❌ Error:', error);
    return false;
  }
}

// ============================================
// CART FUNCTIONS
// ============================================

let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    if (el) el.textContent = count;
  });
}

function addToCart(productId, quantity = 1) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    const product = products.find(p => p.id === productId);
    if (product) cart.push({ ...product, quantity });
  }
  saveCart();
  showToast('✓ Added to cart!');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('🗑️ Removed');
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
    background: #c07a5b;
    color: white;
    padding: 12px 24px;
    border-radius: 40px;
    z-index: 9999;
    animation: fadeInOut 2s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function buyOnWhatsApp(product, quantity = 1) {
  const message = `Hello! I'm interested in "${product.name}" at ₦${product.price.toLocaleString('en-NG')} each. Quantity: ${quantity}. Total: ₦${(product.price * quantity).toLocaleString('en-NG')}`;
  window.open(`https://wa.me/2349134391505?text=${encodeURIComponent(message)}`, '_blank');
}

// ============================================
// MAKE AVAILABLE GLOBALLY
// ============================================
window.products = products;
window.slidesData = slidesData;
window.loadProducts = loadProducts;
window.addProduct = addProduct;
window.deleteProduct = deleteProduct;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartCount = updateCartCount;
window.getCartTotal = getCartTotal;
window.buyOnWhatsApp = buyOnWhatsApp;

console.log('✅ data.js loaded');