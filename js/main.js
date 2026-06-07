document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. LOGIKA MENU MOBILE (HAMBURGER DRAWER)
    // ==========================================
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            const icon = menuBtn.querySelector("i");
            if (mobileMenu.classList.contains("hidden")) {
                icon.className = "fa-solid fa-bars text-xl";
            } else {
                icon.className = "fa-solid fa-xmark text-xl";
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                menuBtn.querySelector("i").className = "fa-solid fa-bars text-xl";
            });
        });
    }

    // ==========================================
    // 2. LOGIKA LIGHT / DARK MODE TOGGLE SYSTEM
    // ==========================================
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeToggleMobileBtn = document.getElementById("theme-toggle-mobile");
    const themeIcon = document.getElementById("theme-icon");
    const themeIconMobile = document.getElementById("theme-icon-mobile");

    // Fungsi sinkronisasi ikon tema berdasarkan status class 'dark'
    function updateThemeIcons() {
        const isDark = document.documentElement.classList.contains("dark");
        const iconClass = isDark ? "fa-solid fa-sun text-lg text-amber-500" : "fa-solid fa-moon text-lg";
        
        if (themeIcon) themeIcon.className = iconClass;
        if (themeIconMobile) themeIconMobile.className = iconClass;
    }

    // Fungsi membalikkan status tema
    function toggleTheme() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        updateThemeIcons();
    }

    // Cek preferensi tema sebelumnya yang disimpan atau preferensi OS bawaan browser
    if (localStorage.getItem("theme") === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    updateThemeIcons();

    // Event Listener Klik Tema (Desktop & Mobile)
    if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
    if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener("click", toggleTheme);


    // ==========================================
    // 3. LOGIKA INTERACTIVE SCROLL REVEAL ANIMATION
    // ==========================================
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Setelah animasi muncul sekali, observer dilepas agar performa scroll tetap enteng
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Elemen terpicu muncul jika 15% bagiannya sudah masuk layar
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});