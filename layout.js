(function () {
    'use strict';

    /* ── Footer ── */
    const year = new Date().getFullYear();

    if (!document.getElementById('siteFooter')) {
        const footer = document.createElement('footer');
        footer.id = 'siteFooter';
        footer.className = 'site-footer';

        footer.innerHTML = `
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="sunglow.png" alt="Sunglow Salon Logo">
                    <h4>SUNGLOW MEN'S SALON</h4>
                    <p>
                        Experience premium grooming with professional haircuts,
                        beard styling, hair spa, facial treatments and modern
                        men's grooming services. Your style, our passion.
                    </p>
                    <div class="footer-social">
                        <a href="#" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="#" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="https://wa.me/918789668805" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div>
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Our Services</h5>
                    <ul>
                        <li><a href="services.html">Hair Cutting</a></li>
                        <li><a href="services.html">Beard Styling</a></li>
                        <li><a href="services.html">Hair Spa</a></li>
                        <li><a href="services.html">Facial Treatment</a></li>
                        <li><a href="services.html">Premium Grooming</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <ul class="footer-contact">
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Malti Villa, Behind UCO Bank, Near BSNL Telephone Exchange, Patna - 800002</span>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <span>info@sunglowsalon.com</span>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <span>+91 8789668805</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${year} <span>SUNGLOW MEN'S SALON</span>. All Rights Reserved. Design & Manage By - <span>ACTINN SOL</span>.</p>
            </div>
        `;

        document.body.appendChild(footer);
    }

    document.body.classList.add('page-with-footer');

    /* ── Preloader ── */
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-inner">
            <img src="sunglow.png" alt="Loading">
            <div class="preloader-bar"><span></span></div>
            <p>Loading...</p>
        </div>
    `;
    document.body.prepend(preloader);

    window.addEventListener('load', () => {
        setTimeout(() => preloader.classList.add('hidden'), 400);
    });

    /* ── Scroll progress bar ── */
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    /* ── Back to top ── */
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    /* ── Mobile menu ── */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const nav = document.querySelector('nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });

        navMenu.querySelectorAll('a:not(.dropdown > a)').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('open');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }

    /* ── Mobile dropdown toggle ── */
    document.querySelectorAll('.dropdown > a').forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('open');
            }
        });
    });

    /* ── Active nav link ── */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ── Navbar scroll effect ── */
    let lastScroll = 0;

    function onScroll() {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

        progressBar.style.width = progress + '%';

        if (nav) {
            nav.classList.toggle('nav-scrolled', scrollY > 60);
        }

        backToTop.classList.toggle('visible', scrollY > 400);

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ── Scroll reveal animations ── */
    const revealElements = document.querySelectorAll(
        '.reveal, .course-card, .service-card, .vision-card, .why-box, .gallery-item, .review-card, .stat-box, .about-image, .about-content, .section-title, .contact-info, .contact-form, .verification-box'
    );

    revealElements.forEach((el, i) => {
        el.classList.add('reveal');
        if (i % 3 === 1) el.classList.add('reveal-delay-1');
        if (i % 3 === 2) el.classList.add('reveal-delay-2');
    });

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    /* ── Animated counters ── */
    function animateCounter(el) {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;

            el.textContent = prefix + (decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString()) + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    const statObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const h2 = entry.target.querySelector('h2[data-count]');
                    if (h2 && !h2.dataset.animated) {
                        h2.dataset.animated = 'true';
                        animateCounter(h2);
                    }
                    statObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll('.stat-box').forEach(box => statObserver.observe(box));

    /* ── Gallery lightbox ── */
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close"><i class="fas fa-times"></i></button>
        <button class="lightbox-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
        <img src="" alt="">
        <button class="lightbox-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
        <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    let galleryImages = [];
    let currentIndex = 0;

    function openLightbox(index) {
        if (!galleryImages.length) return;
        currentIndex = index;
        const item = galleryImages[currentIndex];
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        lightboxCaption.textContent = item.caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function buildGalleryList() {
        galleryImages = [];
        document.querySelectorAll('.gallery-item').forEach(item => {
            const img = item.querySelector('img');
            const title = item.querySelector('.gallery-overlay h3');
            if (img) {
                galleryImages.push({
                    src: img.src,
                    alt: img.alt,
                    caption: title ? title.textContent : img.alt
                });
                item.style.cursor = 'pointer';
                item.addEventListener('click', () => {
                    openLightbox(galleryImages.length - 1);
                });
            }
        });

        document.querySelectorAll('.gallery-preview .gallery-grid img, .gallery-grid > img').forEach((img, i) => {
            if (!img.closest('.gallery-item')) {
                galleryImages.push({ src: img.src, alt: img.alt, caption: img.alt });
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => openLightbox(i));
            }
        });
    }

    buildGalleryList();

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
        openLightbox((currentIndex - 1 + galleryImages.length) % galleryImages.length);
    });
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
        openLightbox((currentIndex + 1) % galleryImages.length);
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightbox.querySelector('.lightbox-prev').click();
        if (e.key === 'ArrowRight') lightbox.querySelector('.lightbox-next').click();
    });

    /* ── Form handling ── */
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn ? btn.textContent : '';

            if (btn) {
                btn.textContent = 'Sending...';
                btn.disabled = true;
            }

            setTimeout(() => {
                if (btn) {
                    btn.textContent = '✓ Sent Successfully!';
                    btn.style.background = '#36ADA3';
                }

                form.reset();

                setTimeout(() => {
                    if (btn) {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.background = '';
                    }
                }, 3000);
            }, 1200);
        });
    });

    /* ── Hero parallax on scroll ── */
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = scrolled * 0.4 + 'px';
            }
        }, { passive: true });
    }

})();
