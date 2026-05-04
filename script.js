// ===== SCROLL TRIGGER ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  // Observar todos os cards e seções
  document.querySelectorAll('.card, blockquote, .contact-card').forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
  });

  // ===== BOTÃO COMPRAR =====
  document.querySelectorAll('.buy-now').forEach(btn => {
    btn.addEventListener('click', function() {
      const product = this.getAttribute('data-product');
      const whatsappLink = `https://wa.me/5511964290535?text=Olá, gostaria de comprar o plano: ${product}`;
      window.open(whatsappLink, '_blank');
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== PARALLAX EFFECT NO HERO =====
  window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPos = window.scrollY;
    hero.style.transform = `translateY(${scrollPos * 0.5}px)`;
  });

  // ===== RIPPLE EFFECT NOS BOTÕES =====
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
    });
  });

  // ===== COUNTER ANIMAÇÃO (Opcional - Para números) =====
  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // ===== NOTIFICAÇÃO AO CLICAR COMPRAR =====
  document.querySelectorAll('.buy-now').forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Criar elemento de notificação
      const notification = document.createElement('div');
      notification.textContent = '✓ Abrindo WhatsApp...';
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideInRight 0.5s ease-out;
      `;

      document.body.appendChild(notification);

      // Remover notificação após 3s
      setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
      }, 3000);
    });
  });

  // ===== ACTIVE STATE NO SCROLL =====
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        section.style.opacity = '1';
      }
    });
  });
});

// ===== ANIMATE ON LOAD =====
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
  }
});
