/**
 * TATAQ CREATIVE TECH - PREMIUM LARGE PORTFOLIO & MODAL ENGINE
 */

document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("portfolio-grid");
    if (!portfolioGrid) return;

    // Otomatis mendeteksi bahasa web (id / en)
    const currentLang = document.documentElement.lang || "id";

    // MASTER DATA PORTOFOLIO DENGAN DETAIL MENDALAM
    const portfolioData = [
        {
            title: {
                id: "Platform Komprehensif D'Best Hotel & Resort",
                en: "D'Best Hotel & Resort Integrated Platform"
            },
            description: {
                id: "Sistem inti manajemen reservasi kamar hotel berskala besar. Dilengkapi arsitektur API terisolasi dengan integrasi otomatis payment gateway untuk otomatisasi pembukuan.",
                en: "An enterprise hotel room reservation core engine. Built with isolated API layers seamlessly integrating premium payment gateways for automated billing."
            },
            extendedDetails: {
                id: "Proyek ini merombak total seluruh alur pemesanan kamar hotel menjadi otomatis. Sistem backend menangani manajemen ketersediaan kamar secara real-time, sinkronisasi harga dinamis berdasarkan musim, serta sistem pembukuan otomatis yang meminimalisir kesalahan manual hingga 99%. Security tokenization diterapkan secara ketat pada jalur komunikasi data.",
                en: "This project completely overhauls the entire hotel room booking workflow. The backend architecture handles real-time room availability, seasonal dynamic pricing matrix, and an automated ledger subsystem that mitigates human auditing errors by up to 99%. Strict security tokenization is strictly applied across all data pipelines."
            },
            category: { id: "Web Application / Hotel Engine", en: "Web Application / Hotel Engine" },
            image: "assets/portfolio/dbest-hotel.png",
            url: "https://dbest-hotel.com",
            techStack: ["Laravel Framework", "MySQL Database", "Tailwind CSS", "Midtrans API", "Redis Cache"],
            scope: {
                id: ["Desain UI/UX Eksklusif (Figma)", "Arsitektur Database Relasional", "Integrasi Sistem Pembayaran", "Optimasi Keamanan Data API"],
                en: ["Bespoke UI/UX Design (Figma)", "Relational Database Architecture", "Payment Gateway Core Engineering", "API Security & Logic Hardening"]
            }
        },
        {
            title: {
                id: "JKT Limousine & Executive Car Rental System",
                en: "JKT Limousine & Executive Car Rental System"
            },
            description: {
                id: "Aplikasi full-stack berbasis web untuk manajemen armada kendaraan eksekutif, pelacakan ketersediaan unit real-time, otomatisasi tagihan, serta integrasi sistem pembayaran digital.",
                en: "A robust full-stack web infrastructure tailored for high-end executive corporate vehicle fleet monitoring, real-time availability tracking, and secure payment processing."
            },
            extendedDetails: {
                id: "Sistem aplikasi korporat yang dirancang untuk mengelola persewaan mobil mewah kelas eksekutif. Sistem ini mencakup dasbor manajemen jadwal sopir, pelacakan status kesiapan armada mobil, pembuatan invoice penagihan otomatis terintegrasi PDF generator, dan gerbang pembayaran digital yang aman untuk menjamin kelancaran transaksi klien VIP.",
                en: "An enterprise-grade platform built to manage luxury executive car rentals. Features include driver scheduling dashboards, real-time vehicle dispatch readouts, automated PDF invoicing matrices, and fully hardened digital payment pathways to guarantee flawless transactions for VIP clientele."
            },
            category: { id: "Enterprise Web App / Logistics", en: "Enterprise Web App / Logistics" },
            image: "assets/portfolio/jktlimousine.png",
            url: "https://jktlimousine.com",
            techStack: ["Laravel Blade Engine", "MySQL Relational", "Alpine.js / Tailwind", "Automated Webhooks", "PDF Storage Node"],
            scope: {
                id: ["Sistem Penjadwalan Dinamis", "Arsitektur Gerbang Pembayaran", "Otomatisasi Inventaris Armada", "Sistem Keamanan Webhook"],
                en: ["Dynamic Dispatch Scheduling", "Payment Core Infrastructure", "Fleet Inventory Automation", "Secure Webhook Verification Layers"]
            }
        },
        {
            title: {
                id: "Platform Korporat Internasional Radin Samudera Intl",
                en: "Radin Samudera Intl Global Corporate Platform"
            },
            description: {
                id: "Arsitektur website profil perusahaan berkinerja tinggi yang dirancang khusus untuk memperkuat kredibilitas, jangkauan pasar global, dan skalabilitas bisnis.",
                en: "A high-performance enterprise corporate platform specifically engineered to maximize brand authority, international market penetration, and seamless digital scalability."
            },
            extendedDetails: {
                id: "Pengembangan representasi digital berskala internasional untuk Radin Samudera Intl. Berfokus pada kecepatan muat halaman super cepat di berbagai benua dengan optimasi server edge, desain visual ultra-minimalis yang memancarkan otoritas bisnis mewah, serta penataan hierarki informasi yang optimal untuk konversi prospek B2B internasional.",
                en: "Formulation of a highly scalable global identity website for Radin Samudera Intl. Engineered around blisteringly fast page delivery across global nodes via edge server caching, an ultra-clean corporate visual language, and structural content alignment tailored for international B2B conversion loops."
            },
            category: { id: "Global Corporate Website", en: "Global Corporate Website" },
            image: "assets/portfolio/radinsamuderaint.png",
            url: "https://radinsamuderaintl.com",
            techStack: ["Jamstack Static Engine", "Tailwind CSS Architecture", "Google Lighthouse Core Web Vitals", "Edge Server Network Optimization"],
            scope: {
                id: ["Desain Antarmuka High-End", "Strategi SEO Internasional", "Optimasi Google Core Web Vitals", "Penyusunan Copywriting Korporat"],
                en: ["High-End Interface Formulation", "International SEO Architecture", "Core Web Vitals Max Optimization", "Corporate Copywriting Alignment"]
            }
        }
    ];

    // MODIFIKASI LAYOUT: Ubah grid kotak menjadi susunan baris vertikal yang luas & lapang
    portfolioGrid.className = "flex flex-col gap-16 mt-12";
    portfolioGrid.innerHTML = "";

    // CETAK DATA PORTOFOLIO KE HALAMAN WEB
    portfolioData.forEach((item, index) => {
        const titleText = item.title[currentLang];
        const descText = item.description[currentLang];
        const catText = item.category[currentLang];

        const card = document.createElement("div");
        
        // Desain Responsif: Di desktop gambar kiri - teks kanan, di mobile menumpuk tegak.
        // Baris bergantian (alternating layout) untuk estetika agensi premium.
        const isEven = index % 2 === 0;
        card.className = `bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} w-full min-h-[350px] reveal`;

        card.innerHTML = `
            <!-- Sisi Gambar (Luas & Tajam) -->
            <div class="w-full md:w-1/2 relative overflow-hidden bg-slate-100 dark:bg-slate-800 group aspect-video md:aspect-auto">
                <img src="${item.image}" alt="${titleText}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                <span class="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase border border-white/10 z-10">
                    ${catText}
                </span>
            </div>
            
            <!-- Sisi Konten Teks -->
            <div class="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl lg:text-2xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-snug">
                        ${titleText}
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                        ${descText}
                    </p>
                    
                    <!-- Singkatan Tech Stack Kecil di Kartu -->
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${item.techStack.slice(0, 3).map(tech => `
                            <span class="text-[11px] bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-800/60 font-medium">${tech}</span>
                        `).join('')}
                        ${item.techStack.length > 3 ? `<span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold px-1.5 py-1">+${item.techStack.length - 3} more</span>` : ''}
                    </div>
                </div>
                
                <!-- Barisan Tombol Aksi -->
                <div class="pt-6 border-t border-slate-50 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <button type="button" class="open-detail-btn inline-flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors bg-indigo-50 dark:bg-indigo-950/40 px-4 py-2.5 rounded-xl border border-indigo-100/50 dark:border-indigo-900/30">
                        <i class="fa-solid fa-circle-info mr-2"></i> ${currentLang === 'id' ? 'Detail Informasi' : 'Project Details'}
                    </button>
                    
                    <a href="${item.url}" target="_blank" class="inline-flex items-center text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link">
                        ${currentLang === 'id' ? 'Kunjungi Platform' : 'Launch Live Site'} 
                        <i class="fa-solid fa-arrow-up-right-from-square ml-1.5 text-[10px] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"></i>
                    </a>
                </div>
            </div>
        `;

        // Daftarkan aksi klik untuk membuka modal detail info
        const detailBtn = card.querySelector(".open-detail-btn");
        detailBtn.addEventListener("click", () => openPortfolioModal(item, currentLang));

        portfolioGrid.appendChild(card);
    });

    // Jalankan ulang observer animasi scroll agar mendeteksi baris baru ini
    if (typeof revealObserver !== "undefined") {
        portfolioGrid.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
    } else {
        portfolioGrid.querySelectorAll(".reveal").forEach(el => el.classList.add("active"));
    }
});

/**
 * FUNGSI UNTUK MEMBUKA POP-UP MODAL DETAIL PORTFOLIO DENGAN DESAIN LUXURY
 */
function openPortfolioModal(data, lang) {
    // Mencegah halaman utama di-scroll saat pop-up aktif
    document.body.style.overflow = "hidden";

    // Terjemahkan Label Statis Modal sesuai bahasa aktif
    const labels = {
        scope: lang === 'id' ? 'Cakupan Kerja (Scope of Work)' : 'Project Scope & Deliverables',
        tech: lang === 'id' ? 'Teknologi & Arsitektur' : 'Engineering Tech Stack',
        btnLive: lang === 'id' ? 'Kunjungi Situs Live' : 'Launch Live Platform',
        btnClose: lang === 'id' ? 'Tutup Detail' : 'Close Details'
    };

    const titleText = data.title[lang];
    const extendedText = data.extendedDetails[lang];
    const scopesList = data.scope[lang];

    // Struktur HTML Pop-up Modal
    const modalOverlay = document.createElement("div");
    modalOverlay.id = "portfolio-modal";
    modalOverlay.className = "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300 opacity-0";
    
    modalOverlay.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col transition-all duration-300 transform scale-95 opacity-0 text-slate-900 dark:text-slate-50">
            
            <!-- Banner Utama Modal (Gambar) -->
            <div class="relative w-full h-52 sm:h-72 bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                <img src="${data.image}" alt="${titleText}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                
                <!-- Tombol Close Melayang -->
                <button type="button" id="close-modal-top" class="absolute top-4 right-4 bg-slate-900/70 hover:bg-slate-900 text-white w-9 h-9 rounded-full flex items-center justify-center border border-white/10 transition-colors focus:outline-none">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                
                <!-- Judul Di Dalam Gambar Banner -->
                <div class="absolute bottom-6 left-6 right-6 text-white">
                    <span class="text-[9px] font-black tracking-widest uppercase bg-indigo-600 text-white px-2.5 py-1 rounded-md border border-indigo-400/20 mb-2 inline-block">
                        ${data.category[lang]}
                    </span>
                    <h2 class="text-xl sm:text-3xl font-black tracking-tight leading-tight">${titleText}</h2>
                </div>
            </div>
            
            <!-- Badan Detail Informasi (Scrollable) -->
            <div class="p-6 sm:p-8 space-y-8 overflow-y-auto">
                
                <!-- Deskripsi Eksekutif -->
                <div>
                    <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        ${extendedText}
                    </p>
                </div>
                
                <!-- Pembagian Dua Kolom: Cakupan Kerja & Teknologi -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                    
                    <!-- Kolom Kiri: Scope of Work -->
                    <div>
                        <h4 class="text-xs font-black tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-4 flex items-center">
                            <i class="fa-solid fa-list-check mr-2 text-sm"></i> ${labels.scope}
                        </h4>
                        <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium">
                            ${scopesList.map(scopeItem => `
                                <li class="flex items-start gap-2.5">
                                    <span class="text-emerald-500 font-bold mt-0.5"><i class="fa-solid fa-circle-check"></i></span>
                                    <span>${scopeItem}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <!-- Kolom Kanan: Tech Stack -->
                    <div>
                        <h4 class="text-xs font-black tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-4 flex items-center">
                            <i class="fa-solid fa-layer-group mr-2 text-sm"></i> ${labels.tech}
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            ${data.techStack.map(techItem => `
                                <span class="text-xs bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800/80 font-semibold flex items-center gap-1.5">
                                    <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> ${techItem}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Footer Modal (Aksi Utama) -->
            <div class="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 flex-shrink-0 rounded-b-3xl">
                <button type="button" id="close-modal-bottom" class="px-5 py-2.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                    ${labels.btnClose}
                </button>
                <a href="${data.url}" target="_blank" class="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md inline-flex items-center gap-2">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i> ${labels.btnLive}
                </a>
            </div>
        </div>
    `;

    // Sisipkan modal ke dalam bagian paling bawah body dokumen
    document.body.appendChild(modalOverlay);

    // Animasi Fade In Lembut saat modal muncul
    const modalContainer = modalOverlay.querySelector(".transform");
    setTimeout(() => {
        modalOverlay.classList.remove("opacity-0");
        modalContainer.classList.remove("scale-95", "opacity-0");
    }, 10);

    // Fungsi Pengendali Penutupan Modal
    const closeModal = () => {
        modalOverlay.classList.add("opacity-0");
        modalContainer.classList.add("scale-95", "opacity-0");
        setTimeout(() => {
            modalOverlay.remove();
            document.body.style.overflow = ""; // Mengaktifkan kembali scroll halaman utama
        }, 300);
    };

    // Daftarkan event penutupan modal ke tombol-tombol terkait
    modalOverlay.querySelector("#close-modal-top").addEventListener("click", closeModal);
    modalOverlay.querySelector("#close-modal-bottom").addEventListener("click", closeModal);
    
    // Klik di area luar/backdrop gelap juga otomatis menutup modal
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}