// data.js - Supabase Database Integration

// ============================================
// SUPABASE CONFIGURATION
// ============================================
// !!! REPLACE WITH YOUR ACTUAL SUPABASE KEYS !!!
const SUPABASE_URL = "https://negqfvyhxtpkunucszjd.supabase.co";      
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lZ3FmdnloeHRwa3VudWNzempkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMDYwNTksImV4cCI6MjA5MTY4MjA1OX0.p09XHGGVqBAKaKULaQSbb61-9Xfwo0f8f2XmU-cH0FI";

// Initialize Supabase client
let supabase = null;

function initSupabase() {
  if (typeof supabaseJs !== 'undefined') {
    supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase connected!');
    return true;
  }
  console.log('⚠️ Supabase library not loaded yet');
  return false;
}

// Load Supabase library dynamically
function loadSupabase() {
  return new Promise((resolve, reject) => {
    if (typeof supabaseJs !== 'undefined') {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = () => {
      supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('✅ Supabase loaded and connected!');
      resolve();
    };
    script.onerror = () => reject('Failed to load Supabase');
    document.head.appendChild(script);
  });
}

// Global products array
let products = [];

// ============================================
// PRODUCT CRUD OPERATIONS
// ============================================

async function loadProductsFromSupabase() {
  if (!supabase) await loadSupabase();
  
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      products = data;
      console.log(`✅ Loaded ${products.length} products from Supabase`);
    } else {
      products = [];
      console.log('📦 No products found in database');
    }
    
    localStorage.setItem('luxe_products_backup', JSON.stringify(products));
    window.products = products;
    
    return products;
  } catch (error) {
    console.error('❌ Error loading products:', error);
    const backup = localStorage.getItem('luxe_products_backup');
    if (backup) {
      products = JSON.parse(backup);
      console.log('⚠️ Using localStorage backup');
    }
    return products;
  }
}

async function addProductToSupabase(product) {
  if (!supabase) await loadSupabase();
  
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.image,
          shortdesc: product.shortDesc,
          fulldesc: product.fullDesc,
          whatsapp: product.whatsappNumber || "2349134391505"
        }
      ])
      .select();
    
    if (error) throw error;
    
    if (data && data[0]) {
      product.id = data[0].id;
      products.push(product);
      console.log('✅ Product added to Supabase:', product.name);
    }
    
    localStorage.setItem('luxe_products_backup', JSON.stringify(products));
    window.products = products;
    
    return product;
  } catch (error) {
    console.error('❌ Error adding product:', error);
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    product.id = newId;
    products.push(product);
    localStorage.setItem('luxe_products_backup', JSON.stringify(products));
    return product;
  }
}

async function updateProductInSupabase(productId, updates) {
  if (!supabase) await loadSupabase();
  
  try {
    const { error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', productId);
    
    if (error) throw error;
    
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
      products[index] = { ...products[index], ...updates };
    }
    
    console.log('✅ Product updated in Supabase');
    localStorage.setItem('luxe_products_backup', JSON.stringify(products));
    window.products = products;
    
    return true;
  } catch (error) {
    console.error('❌ Error updating product:', error);
    return false;
  }
}

async function deleteProductFromSupabase(productId) {
  if (!supabase) await loadSupabase();
  
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', productId);
    
    if (error) throw error;
    
    products = products.filter(p => p.id !== productId);
    console.log('✅ Product deleted from Supabase');
    localStorage.setItem('luxe_products_backup', JSON.stringify(products));
    window.products = products;
    
    return true;
  } catch (error) {
    console.error('❌ Error deleting product:', error);
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
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function buyOnWhatsApp(product, quantity = 1) {
  const message = `Hello! I'm interested in purchasing "${product.name}" at ₦${product.price.toLocaleString('en-NG')} each.\n\nQuantity: ${quantity}\nTotal: ₦${(product.price * quantity).toLocaleString('en-NG')}\n\nPlease confirm availability. Thank you!`;
  const encodedMsg = encodeURIComponent(message);
  const phone = product.whatsapp || "2349134391505";
  const waLink = `https://wa.me/${phone}?text=${encodedMsg}`;
  window.open(waLink, '_blank');
}

// ============================================
// HERO SLIDER DATA (MUST BE HERE)
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

// Make functions available globally
window.products = products;
window.loadProductsFromSupabase = loadProductsFromSupabase;
window.addProductToSupabase = addProductToSupabase;
window.updateProductInSupabase = updateProductInSupabase;
window.deleteProductFromSupabase = deleteProductFromSupabase;
window.slidesData = slidesData;

console.log('🛍️ LUXE Marketplace Ready!');