function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - document.querySelector('.header').offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        }

        function subscribeNewsletter(event) {
            event.preventDefault(); // Prevent default form submission
            alert('Thank you for subscribing to our newsletter!');
            // Here you would typically send the email to a server
            event.target.reset(); // Clear the form
        }

        // Hamburger menu functionality
        const burgerMenu = document.getElementById('burger-menu');
        const navMenu = document.getElementById('nav-menu');
        const orderBtn = document.getElementById('order-btn');

        burgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            orderBtn.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                orderBtn.classList.remove('active');
            });
        });