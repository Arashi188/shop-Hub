// script.js - Shared functionality

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initScrollAnimations();
  initSmoothScroll();
  updateCartCount();
  highlightActiveNav();
});

function initStickyHeader() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || targetId === "") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// WhatsApp handler
function buyOnWhatsApp(product, quantity = 1) {
  const message = `Hello! I'm interested in purchasing "${product.name}" at $${product.price.toFixed(2)} each. Quantity: ${quantity}. Total: $${(product.price * quantity).toFixed(2)}.`;
  const encodedMsg = encodeURIComponent(message);
  const phone = product.whatsappNumber || "2348123456789";
  const waLink = `https://wa.me/${phone}?text=${encodedMsg}`;
  window.open(waLink, '_blank');
}

// Update authentication link in header based on login status
function updateAuthLink() {
  const currentUser = localStorage.getItem('luxe_current_user');
  const desktopAuthLink = document.getElementById('desktopAuthLink');
  const mobileAuthLink = document.getElementById('mobileAuthLink');
  
  if (currentUser) {
    const user = JSON.parse(currentUser);
    if (desktopAuthLink) {
      desktopAuthLink.innerHTML = `<i class="fas fa-user"></i> ${user.name.split(' ')[0]}`;
      desktopAuthLink.href = 'account.html';
    }
    if (mobileAuthLink) {
      mobileAuthLink.innerHTML = `👤 ${user.name.split(' ')[0]}`;
      mobileAuthLink.href = 'account.html';
    }
  } else {
    if (desktopAuthLink) {
      desktopAuthLink.innerHTML = `<i class="fas fa-user"></i> Sign In`;
      desktopAuthLink.href = 'login.html';
    }
    if (mobileAuthLink) {
      mobileAuthLink.innerHTML = `🔑 Sign In / Register`;
      mobileAuthLink.href = 'login.html';
    }
  }
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', function() {
  updateAuthLink();
});

// Update auth link in header
function updateAuthLink() {
  const currentUser = localStorage.getItem('luxe_current_user');
  const desktopAuthLink = document.getElementById('desktopAuthLink');
  const mobileAuthLink = document.getElementById('mobileAuthLink');
  
  if (currentUser) {
    const user = JSON.parse(currentUser);
    if (desktopAuthLink) {
      desktopAuthLink.innerHTML = `<i class="fas fa-user"></i> ${user.name.split(' ')[0]}`;
      desktopAuthLink.href = 'account.html';
    }
    if (mobileAuthLink) {
      mobileAuthLink.innerHTML = `👤 ${user.name.split(' ')[0]}`;
      mobileAuthLink.href = 'account.html';
    }
  } else {
    if (desktopAuthLink) {
      desktopAuthLink.innerHTML = `<i class="fas fa-user"></i> Sign In`;
      desktopAuthLink.href = 'login.html';
    }
    if (mobileAuthLink) {
      mobileAuthLink.innerHTML = `🔑 Sign In / Register`;
      mobileAuthLink.href = 'login.html';
    }
  }
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', function() {
  updateAuthLink();
});