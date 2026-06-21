(function () {
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

                        <a href="#" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>

                    </div>

                </div>

                <div>

                    <h5>Quick Links</h5>

                    <ul>

                        <li>
                            <a href="index.html">Home</a>
                        </li>

                        <li>
                            <a href="about.html">About Us</a>
                        </li>

                        <li>
                            <a href="services.html">Services</a>
                        </li>

                        <li>
                            <a href="gallery.html">Gallery</a>
                        </li>

                        <li>
                            <a href="contact.html">Contact Us</a>
                        </li>

                    </ul>

                </div>

                <div>

                    <h5>Our Services</h5>

                    <ul>

                        <li>
                            <a href="services.html">Hair Cutting</a>
                        </li>

                        <li>
                            <a href="services.html">Beard Styling</a>
                        </li>

                        <li>
                            <a href="services.html">Hair Spa</a>
                        </li>

                        <li>
                            <a href="services.html">Facial Treatment</a>
                        </li>

                        <li>
                            <a href="services.html">Premium Grooming</a>
                        </li>

                    </ul>

                </div>

                <div>

                    <h5>Contact Us</h5>

                    <ul class="footer-contact">

                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>
                                Malti Villa, Behind UCO Bank,
                                Near BSNL Telephone Exchange,
                                Patna - 800002
                            </span>
                        </li>

                        <li>
                            <i class="fas fa-envelope"></i>
                            <span>
                                info@sunglowsalon.com
                            </span>
                        </li>

                        <li>
                            <i class="fas fa-phone"></i>
                            <span>
                                +91 8789668805
                            </span>
                        </li>

                    </ul>

                </div>

            </div>

            <div class="footer-bottom">

                <p>
                    &copy; ${year}
                    <span>SUNGLOW MEN'S SALON</span>.
                    All Rights Reserved.  Design & Manage By - <span>ACTINN SOL<span/>.
                </p>

            </div>

        `;

        document.body.appendChild(footer);
    }

    document.body.classList.add('page-with-footer');

})();