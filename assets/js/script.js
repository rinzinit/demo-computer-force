document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const menuToggle = document.getElementById('menu-toggle');
    const navContent = document.getElementById('nav-content');

    const bagToggle = document.getElementById('bag-toggle');
    const purchasesAside = document.getElementById('purchases-aside');

    // Toggle Menu
    if (menuToggle && navContent) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navContent.classList.toggle('active');
        });
    }

    // Toggle Bag (Mobile)
    if (bagToggle && purchasesAside) {
        bagToggle.addEventListener('click', () => {
            const isExpanded = bagToggle.getAttribute('aria-expanded') === 'true';
            bagToggle.setAttribute('aria-expanded', !isExpanded);
            purchasesAside.classList.toggle('active');

            // Optional: Close menu if open
            if (navContent.classList.contains('active')) {
                navContent.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Product Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-card[data-category]');

    if (filterBtns.length > 0 && productItems.length > 0) {
        function filterProducts(category) {
            // Update Buttons
            filterBtns.forEach(btn => {
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Filter Items
            productItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'flex'; // Restore display
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Event Listeners for Buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.filter;
                filterProducts(category);

                // Update URL hash without scrolling (optional)
                // history.pushState(null, null, '#' + category);
            });
        });

        // Check Hash on Load
        function checkHash() {
            const hash = window.location.hash.substring(1); // Remove '#'
            if (hash) {
                // Check if hash matches a category
                const validCategory = Array.from(filterBtns).some(btn => btn.dataset.filter === hash);
                if (validCategory) {
                    filterProducts(hash);
                }
            }
        }

        checkHash();
        window.addEventListener('hashchange', checkHash);
    }
});
