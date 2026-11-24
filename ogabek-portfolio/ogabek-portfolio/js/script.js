/* OGABEK PORTFOLIO — interaktivlik va animatsiyalar */
$(function () {
  // Loader
  $(window).on('load', function () {
    setTimeout(function () { $('.page-loader').addClass('is-hidden'); }, 350);
  });
  // Ayrim muhitlarda load hodisasi oldin sodir bo'lsa ham loader qolib ketmasin
  setTimeout(function () { $('.page-loader').addClass('is-hidden'); }, 2200);

  // Navbar scroll holati
  const header = document.querySelector('.site-header');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 30);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Mobil menyu: link bosilganda yopiladi
  $('.navbar-nav .nav-link').on('click', function () {
    const menu = document.getElementById('mainNav');
    if (menu && menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });

  // Typing effect
  const typingElement = document.querySelector('.typing-text');
  const phrases = ['Frontend Developer', 'Web Designer', 'Creative Developer'];
  let phraseIndex = 0, charIndex = phrases[0].length, deleting = true;
  function typeLoop() {
    if (!typingElement) return;
    const current = phrases[phraseIndex];
    if (deleting) {
      charIndex--;
      typingElement.textContent = current.substring(0, charIndex);
      if (charIndex <= 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
      setTimeout(typeLoop, 55);
    } else {
      const next = phrases[phraseIndex];
      charIndex++;
      typingElement.textContent = next.substring(0, charIndex);
      if (charIndex >= next.length) { deleting = true; setTimeout(typeLoop, 1500); }
      else setTimeout(typeLoop, 95);
    }
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setTimeout(typeLoop, 1700);

  // Scroll reveal
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Skill progress animation
  const skillBars = document.querySelectorAll('.skill-track i');
  if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width || '0%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    skillBars.forEach(bar => skillObserver.observe(bar));
  } else {
    skillBars.forEach(bar => bar.style.width = bar.dataset.width || '0%');
  }

  // Owl Carousel
  const carousel = $('.project-carousel');
  if (carousel.length) {
    carousel.owlCarousel({
      loop: false, margin: 22, nav: false, dots: false, smartSpeed: 650,
      autoplay: false, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
    });
    $('.owl-prev-custom').on('click', () => carousel.trigger('prev.owl.carousel'));
    $('.owl-next-custom').on('click', () => carousel.trigger('next.owl.carousel'));
    carousel.on('changed.owl.carousel', function (event) {
      if (!event.item) return;
      const current = String(event.item.index + 1).padStart(2, '0');
      $('.carousel-counter').html(current + ' <i></i> 05');
    });
  }

  // Yengil mouse glow — faqat katta ekranlarda
  const glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', event => {
      glow.style.left = event.clientX + 'px';
      glow.style.top = event.clientY + 'px';
    }, { passive: true });
  }

  // Demo contact form: backend yo'q, shuning uchun xabarni yubormaydi
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      note.textContent = 'Ma’lumotlar to‘ldirildi, ammo forma hali backendga ulanmagan. Xabarni admin@gmail.com manziliga yuboring.';
      note.classList.add('form-warning');
    });
  }

  // Faol navigatsiya linki
  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => navObserver.observe(section));
  }
});
