// PickMie Prototype JavaScript Code

// 1. Mock Menu Database
const noodleMenu = [
    // --- Signature Mie (category: "signature") ---
    {
        id: "pickmie-original",
        title: "PickMie Original",
        category: "signature",
        basePrice: 15000,
        description: "Mie utama khas PickMie dengan bumbu racikan rahasia manis gurih lezat tiada duanya, siap jadi sandaran hatimu.",
        image: "assets/ori.png",
        badge: "Khas PickMie ✨",
        badgeClass: "favorite"
    },
    {
        id: "choose-me-mie",
        title: "Choose Me Mie",
        category: "signature",
        basePrice: 18000,
        description: "Pilih aku! Mie favorit bertabur topping istimewa yang selalu siap memanjakan lidahmu di kala sepi.",
        image: "assets/choose.png",
        badge: "Favorit ❤️",
        badgeClass: "favorite"
    },
    {
        id: "main-character-mie",
        title: "Main Character Mie",
        category: "signature",
        basePrice: 25000,
        description: "Mie porsi besar bertabur topping super lengkap dan mewah, khusus untuk kamu si tokoh utama hari ini.",
        image: "assets/main.png",
        badge: "Spesial 😎",
        badgeClass: "favorite"
    },
    {
        id: "soft-spoken-mie",
        title: "Soft Spoken Mie",
        category: "signature",
        basePrice: 18000,
        description: "Mie dengan rasa gurih creamy yang ringan dan lembut, menyapa lidahmu dengan kelembutan hakiki.",
        image: "assets/carbonara.png",
        badge: "Creamy Soft 🥛",
        badgeClass: "favorite"
    },
    {
        id: "attention-seeker-mie",
        title: "Attention Seeker Mie",
        category: "signature",
        basePrice: 17000,
        description: "Mie dengan level pedas menggoda yang menuntut perhatian penuh dari seluruh indra perasamu.",
        image: "assets/signature.png",
        badge: "Hot & Spicy 🔥",
        badgeClass: "spicy"
    },
    {
        id: "first-choice-mie",
        title: "First Choice Mie",
        category: "signature",
        basePrice: 20000,
        description: "Menu best seller andalan yang selalu jadi pilihan pertama para pecinta mie sejati di mana pun.",
        image: "assets/ramen.png",
        badge: "Best Seller 🌟",
        badgeClass: "favorite"
    },
    {
        id: "pretty-please-mie",
        title: "Pretty Please Mie",
        category: "signature",
        basePrice: 19000,
        description: "Perpaduan rasa creamy manis pedas yang menggemaskan, seolah berbisik 'please pilih aku dong'.",
        image: "assets/carbonara.png",
        badge: "Sweet & Spicy 🎀",
        badgeClass: "favorite"
    },
    {
        id: "golden-pick-mie",
        title: "Golden Pick Mie",
        category: "signature",
        basePrice: 22000,
        description: "Mie kuah premium dengan topping keemasan pilihan terbaik yang memancarkan aura sultan.",
        image: "assets/golden.png",
        badge: "Premium Gold 👑",
        badgeClass: "favorite"
    },
    {
        id: "sweet-talk-mie",
        title: "Sweet Talk Mie",
        category: "signature",
        basePrice: 16000,
        description: "Rasa manis gurih manja yang seolah membisikkan janji manis yang takkan pernah ingkar.",
        image: "assets/talk.png",
        badge: "Manis Gurih 🧸",
        badgeClass: "favorite"
    },
    {
        id: "red-flag-mie",
        title: "Red Flag Mie",
        category: "signature",
        basePrice: 18000,
        description: "Sangat pedas, berbahaya tapi bikin nagih! Peringatan keras untuk hati yang sensitif.",
        image: "assets/flag.png",
        badge: "Bahaya Nikmat 🚩",
        badgeClass: "spicy"
    },

    // --- Pedas Series (category: "spicy") ---
    {
        id: "pick-me-spicy",
        title: "Pick Me Spicy",
        category: "spicy",
        basePrice: 16000,
        description: "Mie pedas gurih level awal yang menantangmu untuk melangkah lebih jauh di dunia per-cabean.",
        image: "assets/pickme.png",
        badge: "Spicy Start 🌶️",
        badgeClass: "spicy"
    },
    {
        id: "crush-level",
        title: "Crush Level",
        category: "spicy",
        basePrice: 17000,
        description: "Mie pedas manis yang bikin deg-degan seperti sedang ditatap manis oleh gebetan pertamamu.",
        image: "assets/crush.png",
        badge: "Deg-degan 💖",
        badgeClass: "spicy"
    },
    {
        id: "overthinking-lava",
        title: "Overthinking Lava",
        category: "spicy",
        basePrice: 18000,
        description: "Kuah pedas membara layaknya lava panas yang meletup-letup, bikin pikiran melayang kemana-mana.",
        image: "assets/lava.png",
        badge: "Membara 🌋",
        badgeClass: "spicy"
    },
    {
        id: "silent-treatment",
        title: "Silent Treatment",
        category: "spicy",
        basePrice: 16000,
        description: "Mie pedas dingin tersembunyi yang diam-diam menusuk lidah dan bikin kamu bungkam terdiam.",
        image: "assets/spicy.png",
        badge: "Pedas Sunyi 🤫",
        badgeClass: "spicy"
    },
    {
        id: "heartbreak-hot",
        title: "Heartbreak Hot",
        category: "spicy",
        basePrice: 19000,
        description: "Saking pedasnya kuah ini, rasanya bagai mengalami patah hati terberat yang mengeluarkan air mata.",
        image: "assets/hot.png",
        badge: "Air Mata 💔",
        badgeClass: "spicy"
    },
    {
        id: "ghosting-chili",
        title: "Ghosting Chili",
        category: "spicy",
        basePrice: 18000,
        description: "Pedasnya misterius! Kadang hilang, lalu tiba-tiba datang lagi membakar lidah tanpa kabar.",
        image: "assets/chili.png",
        badge: "Tiba-tiba 👻",
        badgeClass: "spicy"
    },
    {
        id: "no-reply-mie",
        title: "No Reply Mie",
        category: "spicy",
        basePrice: 17000,
        description: "Mie pedas kering yang bikin lidahmu kelu sampai malas membalas chat apa pun seharian.",
        image: "assets/reply.png",
        badge: "Bikin Kelu 📱",
        badgeClass: "spicy"
    },
    {
        id: "seen-zone",
        title: "Seen Zone",
        category: "spicy",
        basePrice: 15000,
        description: "Pedas menyakitkan yang diabaikan begitu saja, dingin di luar tapi membakar di dalam dada.",
        image: "assets/zone.png",
        badge: "Di-read Aja 👀",
        badgeClass: "spicy"
    },

    // --- Drink Menu (category: "drinks") ---
    {
        id: "pink-pick-latte",
        title: "Pink Pick Latte",
        category: "drinks",
        basePrice: 15000,
        description: "Minuman latte stroberi merah muda yang manis, lembut, dan menyegarkan hari-harimu yang abu-abu.",
        image: "assets/pink_pick_latte.png",
        badge: "Khas Pinky 🌸",
        badgeClass: "favorite"
    },
    {
        id: "bloom-tea",
        title: "Bloom Tea",
        category: "drinks",
        basePrice: 10000,
        description: "Teh bunga melati wangi alami yang mekar perlahan, memberikan ketenangan batin yang sejuk.",
        image: "assets/Bloom_Tea.png",
        badge: "Segar Alami 🌼",
        badgeClass: "favorite"
    },
    {
        id: "sweet-reply",
        title: "Sweet Reply",
        category: "drinks",
        basePrice: 12000,
        description: "Minuman manis dingin penyejuk dahaga, rasanya semanis balasan chat 'iya sayang' darinya.",
        image: "assets/Sweet_Replay.png",
        badge: "Manis Dingin 💬",
        badgeClass: "favorite"
    },
    {
        id: "love-letter-matcha",
        title: "Love Letter Matcha",
        category: "drinks",
        basePrice: 16000,
        description: "Matcha latte premium yang creamy dengan sentuhan manis rasa cinta di setiap tegukan hangat.",
        image: "assets/Matcha.png",
        badge: "Matcha Lover 🍵",
        badgeClass: "favorite"
    },
    {
        id: "soft-girl-strawberry",
        title: "Soft Girl Strawberry",
        category: "drinks",
        basePrice: 14000,
        description: "Susu stroberi manis lembut bergaya pastel aesthetic, cocok untuk melunakkan hari yang keras.",
        image: "assets/soft_girl_strawberry.png",
        badge: "Stroberi Segar 🍓",
        badgeClass: "favorite"
    },
    {
        id: "first-date-milk-tea",
        title: "First Date Milk Tea",
        category: "drinks",
        basePrice: 13000,
        description: "Milk tea klasik dengan boba kenyal manis, mengembalikan memori manis kencan pertama kita.",
        image: "assets/first_date_milk_tea.png",
        badge: "Boba Manis 🧋",
        badgeClass: "favorite"
    },
    {
        id: "butterfly-lemon-tea",
        title: "Butterfly Lemon Tea",
        category: "drinks",
        basePrice: 12000,
        description: "Teh bunga telang biru dengan lemon segar yang berubah warna jadi ungu cantik secara magis.",
        image: "assets/butterfly.png",
        badge: "Sihir Warna 🦋",
        badgeClass: "favorite"
    },
    {
        id: "cloudy-berry",
        title: "Cloudy Berry",
        category: "drinks",
        basePrice: 15000,
        description: "Soda berry asam manis dengan foam susu lembut mengambang di atasnya laksana awan sore hari.",
        image: "assets/cloudy.png",
        badge: "Awan Berry ☁️",
        badgeClass: "favorite"
    },

    // --- Snack / Side (category: "snacks") ---
    {
        id: "pick-bites",
        title: "Pick Bites",
        category: "snacks",
        basePrice: 12000,
        description: "Camilan bola kentang keju renyah sekali lahap yang pas buat menemani obrolan santai sore.",
        image: "assets/pick.png",
        badge: "Renyah Gurih 🧀",
        badgeClass: "favorite"
    },
    {
        id: "mini-crush-wonton",
        title: "Mini Crush Wonton",
        category: "snacks",
        basePrice: 14000,
        description: "Wonton mini goreng warna emas renyah berisi daging ayam cincang gurih, siap mencuri hatimu.",
        image: "assets/mini_crush_wonton.png",
        badge: "Crunchy 🥟",
        badgeClass: "favorite"
    },
    {
        id: "choose-fries",
        title: "Choose Fries",
        category: "snacks",
        basePrice: 11000,
        description: "Kentang goreng renyah bertabur bumbu keju manis gurih yang bikin jari ga bisa berhenti mencomot.",
        image: "assets/choosee.png",
        badge: "Rebutan Bestie 🍟",
        badgeClass: "favorite"
    },
    {
        id: "bloom-dimsum",
        title: "Bloom Dimsum",
        category: "snacks",
        basePrice: 15000,
        description: "Dimsum ayam kukus lembut merekah indah disajikan dengan saus sambal cocol manis asam.",
        image: "assets/dimsum.png",
        badge: "Kukus Lembut 🍥",
        badgeClass: "favorite"
    },
    {
        id: "love-crispy-roll",
        title: "Love Crispy Roll",
        category: "snacks",
        basePrice: 13000,
        description: "Lumpia goreng isi sayur dan ayam cincang super renyah, dibungkus gulungan penuh kehangatan.",
        image: "assets/roll.png",
        badge: "Renyah Pol 🥖",
        badgeClass: "favorite"
    },
    {
        id: "golden-bite",
        title: "Golden Bite",
        category: "snacks",
        basePrice: 14000,
        description: "Nugget ayam premium lapis tepung roti emas renyah di luar, super juicy dan empuk di dalam.",
        image: "assets/bite.png",
        badge: "Juicy Gold 🍗",
        badgeClass: "favorite"
    },

    // --- Menu Set / Paket (category: "sets") ---
    {
        id: "pick-date-set",
        title: "Pick Date Set",
        category: "sets",
        basePrice: 28000,
        description: "Paket kencan hemat berdua: 1 Porsi Mie pilihan + 1 Minuman segar pilihan untuk melengkapi harimu.",
        image: "assets/1.png",
        badge: "Paket Kencan 👩‍❤️‍👨",
        badgeClass: "favorite"
    },
    {
        id: "chosen-combo",
        title: "Chosen Combo",
        category: "sets",
        basePrice: 32000,
        description: "Combo pilihan paling komplit: 1 Porsi Mie + Topping premium + 1 Minuman segar penawar pedas.",
        image: "assets/2.png",
        badge: "Kombo Puas 🌟",
        badgeClass: "favorite"
    },
    {
        id: "bestie-package",
        title: "Bestie Package",
        category: "sets",
        basePrice: 52000,
        description: "Paket seru berdua bareng bestie: 2 Porsi Mie + 2 Minuman segar + 1 Porsi Mini Crush Wonton.",
        image: "assets/3.png",
        badge: "Hemat Berdua 👯",
        badgeClass: "favorite"
    },
    {
        id: "main-character-set",
        title: "Main Character Set",
        category: "sets",
        basePrice: 42000,
        description: "Paket lengkap si Tokoh Utama: Main Character Mie + Topping Lengkap + Drink + Snack Pilihan.",
        image: "assets/4.png",
        badge: "Super Lengkap 😎",
        badgeClass: "favorite"
    },
    {
        id: "forever-pick-set",
        title: "Forever Pick Set",
        category: "sets",
        basePrice: 95000,
        description: "Paket kumpul rame-rame paling seru: 4 Porsi Mie + 2 Snack Porsi Besar + 4 Minuman segar.",
        image: "assets/mie_goreng.png",
        badge: "Pesta Mie 🥳",
        badgeClass: "favorite"
    }
];

// 2. Application State
let cart = [];
let activeCategory = "all";
let searchQuery = "";
let selectedNoodleItem = null;
let currentCustomization = {
    noodleType: "Original",
    spiceLevel: 1,
    toppings: [],
    quantity: 1
};
let deliverySimTimeout = null;

// Order History State
let orderHistory = [];
let currentSimulatedOrder = null;

// Load orderHistory from localStorage if it exists
try {
    const savedHistory = localStorage.getItem("pickmie_order_history");
    if (savedHistory) {
        orderHistory = JSON.parse(savedHistory);
    }
} catch (e) {
    console.error("Failed to load order history:", e);
}

// 3. Elements Selection
const noodleGrid = document.getElementById("noodle-grid");
const categoryButtons = document.querySelectorAll(".tab-btn");
const searchInput = document.getElementById("menu-search");
const cartCountBadge = document.getElementById("cart-count");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartTaxEl = document.getElementById("cart-tax");
const cartDeliveryEl = document.getElementById("cart-delivery");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

// Customize Modal Elements
const customizeModal = document.getElementById("customize-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalNoodleImg = document.getElementById("modal-noodle-img");
const modalNoodleTitle = document.getElementById("modal-noodle-title");
const modalNoodleDesc = document.getElementById("modal-noodle-desc");
const typeOptions = document.querySelectorAll(".type-option");
const spiceSlider = document.getElementById("spice-level-slider");
const spiceLabel = document.getElementById("spice-level-label");
const toppingOptions = document.querySelectorAll(".topping-option");
const modalTotalPriceEl = document.getElementById("modal-total-price");
const modalQtyVal = document.getElementById("modal-qty-val");
const modalQtyMinus = document.getElementById("modal-qty-minus");
const modalQtyPlus = document.getElementById("modal-qty-plus");
const modalAddCartBtn = document.getElementById("modal-add-cart-btn");

// Modal Options Groups to Show/Hide dynamically
const modalVarianGroup = document.getElementById("modal-varian-group");
const modalSpiceGroup = document.getElementById("modal-spice-group");
const modalToppingGroup = document.getElementById("modal-topping-group");

// Tracker Elements
const orderTrackerSection = document.getElementById("order-tracker-section");
const heroSection = document.getElementById("hero-section");
const menuSection = document.getElementById("menu-section");
const navTrackingLink = document.getElementById("nav-tracking-link");
const navLinks = document.querySelectorAll(".nav-link");
const trackOrderId = document.getElementById("track-order-id");
const trackEta = document.getElementById("track-eta");
const timelineProgress = document.getElementById("timeline-progress");

// Steps Elements
const stepReceived = document.getElementById("step-received");
const stepPreparing = document.getElementById("step-preparing");
const stepDelivering = document.getElementById("step-delivering");
const stepArrived = document.getElementById("step-arrived");

// Checkout Form & History Elements
const checkoutForm = document.getElementById("checkout-form");
const customerNameInput = document.getElementById("customer-name");
const paymentMethodVal = document.getElementById("payment-method-val");
const paymentMethodOptions = document.querySelectorAll(".payment-method-option");

const historySection = document.getElementById("history-section");
const historyContainer = document.getElementById("history-container");
const navHistoryLink = document.getElementById("nav-history-link");


// 4. Initialize Application
window.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    setupEventListeners();
});

// 5. Render Noodles Grid
function renderMenu() {
    noodleGrid.innerHTML = "";
    
    // Filter by Category and Search Query
    const filteredMenu = noodleMenu.filter(item => {
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredMenu.length === 0) {
        noodleGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-face-frown" style="font-size: 3rem; color: var(--accent-soft); margin-bottom: 1rem;"></i>
                <p>Menu mie yang kamu cari tidak ditemukan. Coba ketik menu lain!</p>
            </div>
        `;
        return;
    }

    filteredMenu.forEach(item => {
        const card = document.createElement("div");
        card.className = "noodle-card";
        card.innerHTML = `
            <div class="card-img-container">
                <span class="badge ${item.badgeClass}">${item.badge}</span>
                <img src="${item.image}" alt="${item.title}" class="noodle-img" loading="lazy">
            </div>
            <div class="card-content">
                <h3 class="noodle-title">${item.title}</h3>
                <p class="noodle-desc">${item.description}</p>
                <div class="card-footer">
                    <div class="noodle-price"><span>Rp</span>${item.basePrice.toLocaleString("id-ID")}</div>
                    <button class="btn-order" data-id="${item.id}" title="Kustomisasi Mie">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        noodleGrid.appendChild(card);
    });

    // Add click listeners to order/plus buttons
    const orderButtons = document.querySelectorAll(".btn-order");
    orderButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const noodleId = btn.getAttribute("data-id");
            openCustomizer(noodleId);
        });
    });
}

// 6. Setup All Event Listeners
function setupEventListeners() {
    // Search Filter
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderMenu();
    });

    // Category Tabs Filter
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            renderMenu();
        });
    });

    // Cart Drawer Toggle
    openCartBtn.addEventListener("click", openCart);
    closeCartBtn.addEventListener("click", closeCart);
    drawerBackdrop.addEventListener("click", () => {
        closeCart();
        closeCustomizerModal();
    });

    // Customizer Modal Actions
    closeModalBtn.addEventListener("click", closeCustomizerModal);

    // Custom Noodle Base selection
    typeOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            typeOptions.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            currentCustomization.noodleType = opt.getAttribute("data-type");
            calculateModalPrice();
        });
    });

    // Spice slider action
    spiceSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        currentCustomization.spiceLevel = val;
        
        let labelText = `Level ${val}`;
        if (val === 0) labelText += " 🌶️ (Tidak Pedas)";
        else if (val === 1) labelText += " 🌶️ (Pedas Sedikit)";
        else if (val === 2) labelText += " 🌶️ (Pedas Sedang)";
        else if (val === 3) labelText += " 🌶️🌶️ (Pedas Mantap!)";
        else if (val === 4) labelText += " 🌶️🌶️🌶️ (Sangat Pedas! 🔥)";
        else if (val === 5) labelText += " 🌶️🌶️🌶️🌶️ (Super Pedas! 🤯🔥🔥)";
        
        spiceLabel.textContent = labelText;
        calculateModalPrice();
    });

    // Toppings checkable actions
    toppingOptions.forEach(opt => {
        const checkbox = opt.querySelector("input[type='checkbox']");
        
        // Prevent click conflicts
        opt.addEventListener("click", (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            toggleToppingState(opt, checkbox.checked);
        });
        
        checkbox.addEventListener("change", () => {
            toggleToppingState(opt, checkbox.checked);
        });
    });

    // Modal Quantity counters
    modalQtyMinus.addEventListener("click", () => {
        if (currentCustomization.quantity > 1) {
            currentCustomization.quantity--;
            modalQtyVal.textContent = currentCustomization.quantity;
            calculateModalPrice();
        }
    });

    modalQtyPlus.addEventListener("click", () => {
        currentCustomization.quantity++;
        modalQtyVal.textContent = currentCustomization.quantity;
        calculateModalPrice();
    });

    // Payment Method Selection
    paymentMethodOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            paymentMethodOptions.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            paymentMethodVal.value = opt.getAttribute("data-payment");
        });
    });

    // Add Customized Item to Cart
    modalAddCartBtn.addEventListener("click", addCustomizedToCart);

    // Checkout Event
    checkoutBtn.addEventListener("click", processCheckout);

    // Navigation Links (Simulated Routing)
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const target = link.getAttribute("data-target");
            if (target === "home" || target === "menu") {
                e.preventDefault();
                resetToMenu();
                scrollToMenu();
            } else if (target === "history") {
                e.preventDefault();
                showHistorySection();
            }
        });
    });
}

// 7. Customizer Logic
function openCustomizer(id) {
    selectedNoodleItem = noodleMenu.find(item => item.id === id);
    if (!selectedNoodleItem) return;

    // Load static noodle details
    modalNoodleImg.src = selectedNoodleItem.image;
    modalNoodleImg.alt = selectedNoodleItem.title;
    modalNoodleTitle.textContent = selectedNoodleItem.title;
    modalNoodleDesc.textContent = selectedNoodleItem.description;

    // Show/Hide customizer options depending on product category
    if (selectedNoodleItem.category === "drinks") {
        modalVarianGroup.style.display = "none";
        modalSpiceGroup.style.display = "none";
        modalToppingGroup.style.display = "none";
    } else if (selectedNoodleItem.category === "snacks" || selectedNoodleItem.category === "sets") {
        modalVarianGroup.style.display = "none";
        modalSpiceGroup.style.display = "none";
        modalToppingGroup.style.display = "none";
    } else {
        // Noodles (Signature & Spicy Series)
        modalVarianGroup.style.display = "block";
        modalSpiceGroup.style.display = "block";
        modalToppingGroup.style.display = "block";
    }

    // Reset customization state
    currentCustomization = {
        noodleType: "Original",
        spiceLevel: 1,
        toppings: [],
        quantity: 1
    };

    // Reset UI Elements
    typeOptions.forEach(opt => {
        if (opt.getAttribute("data-type") === "Original") opt.classList.add("active");
        else opt.classList.remove("active");
    });

    spiceSlider.value = 1;
    spiceLabel.textContent = "Level 1 🌶️ (Pedas Sedikit)";

    toppingOptions.forEach(opt => {
        opt.classList.remove("active");
        opt.querySelector("input").checked = false;
    });

    modalQtyVal.textContent = "1";

    // Re-calculate price
    calculateModalPrice();

    // Show Customizer
    customizeModal.classList.add("active");
    drawerBackdrop.classList.add("active");
}

function closeCustomizerModal() {
    customizeModal.classList.remove("active");
    drawerBackdrop.classList.remove("active");
}

function toggleToppingState(element, isChecked) {
    const toppingName = element.getAttribute("data-topping-name");
    const toppingPrice = parseInt(element.getAttribute("data-topping-price"));

    if (isChecked) {
        element.classList.add("active");
        // Add to list if not already present
        if (!currentCustomization.toppings.find(t => t.name === toppingName)) {
            currentCustomization.toppings.push({ name: toppingName, price: toppingPrice });
        }
    } else {
        element.classList.remove("active");
        // Remove from list
        currentCustomization.toppings = currentCustomization.toppings.filter(t => t.name !== toppingName);
    }
    
    calculateModalPrice();
}

function calculateModalPrice() {
    if (!selectedNoodleItem) return;
    
    let toppingsTotal = 0;
    currentCustomization.toppings.forEach(t => {
        toppingsTotal += t.price;
    });

    const pricePerUnit = selectedNoodleItem.basePrice + toppingsTotal;
    const grandTotal = pricePerUnit * currentCustomization.quantity;
    
    modalTotalPriceEl.textContent = `Rp${grandTotal.toLocaleString("id-ID")}`;
}

// 8. Cart Logic
function openCart() {
    renderCart();
    cartDrawer.classList.add("active");
    drawerBackdrop.classList.add("active");
}

function closeCart() {
    cartDrawer.classList.remove("active");
    drawerBackdrop.classList.remove("active");
}

function addCustomizedToCart() {
    let toppingsTotal = 0;
    currentCustomization.toppings.forEach(t => {
        toppingsTotal += t.price;
    });

    const singlePrice = selectedNoodleItem.basePrice + toppingsTotal;
    
    // Check if exactly identical item already exists in cart (same noodleType, spiceLevel, and toppings)
    const existingIndex = cart.findIndex(item => {
        if (item.menuId !== selectedNoodleItem.id) return false;
        if (item.noodleType !== currentCustomization.noodleType) return false;
        if (item.spiceLevel !== currentCustomization.spiceLevel) return false;
        
        // Compare toppings array
        if (item.toppings.length !== currentCustomization.toppings.length) return false;
        const currentToppingNames = currentCustomization.toppings.map(t => t.name).sort();
        const itemToppingNames = item.toppings.map(t => t.name).sort();
        
        return currentToppingNames.every((val, index) => val === itemToppingNames[index]);
    });

    if (existingIndex > -1) {
        // Merge quantities
        cart[existingIndex].quantity += currentCustomization.quantity;
        cart[existingIndex].totalPrice = cart[existingIndex].singlePrice * cart[existingIndex].quantity;
    } else {
        // Add new
        cart.push({
            id: Date.now().toString(),
            menuId: selectedNoodleItem.id,
            title: selectedNoodleItem.title,
            image: selectedNoodleItem.image,
            category: selectedNoodleItem.category,
            noodleType: currentCustomization.noodleType,
            spiceLevel: currentCustomization.spiceLevel,
            toppings: [...currentCustomization.toppings],
            quantity: currentCustomization.quantity,
            singlePrice: singlePrice,
            totalPrice: singlePrice * currentCustomization.quantity
        });
    }

    // Feedback
    showToast(`Ditambahkan ke keranjang: ${selectedNoodleItem.title}`);
    
    // Update Badge
    updateCartBadge();
    
    // Close Customizer
    closeCustomizerModal();
}

function updateCartBadge() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalQty;
}

function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Keranjang belanja kamu masih kosong. Yuk pilih mie favoritmu!</p>
            </div>
        `;
        
        cartSubtotalEl.textContent = "Rp0";
        cartTaxEl.textContent = "Rp0";
        cartDeliveryEl.textContent = "Rp0";
        cartTotalEl.textContent = "Rp0";
        if (checkoutForm) checkoutForm.style.display = "none";
        return;
    }

    if (checkoutForm) checkoutForm.style.display = "block";

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        
        // Generate customization labels
        let customizationText = "";
        if (item.category !== "drinks" && item.category !== "snacks" && item.category !== "sets") {
            customizationText = `Varian: ${item.noodleType} • Pedas: Lvl ${item.spiceLevel}`;
            if (item.toppings.length > 0) {
                customizationText += ` • Toppings: ` + item.toppings.map(t => t.name).join(", ");
            }
        } else {
            customizationText = `Porsi Standar`;
        }

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-customize">${customizationText}</div>
                <div class="cart-item-price">Rp${item.totalPrice.toLocaleString("id-ID")}</div>
            </div>
            <div class="cart-item-controls">
                <div class="qty-control">
                    <button class="qty-btn" onclick="adjustCartQty('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-num">${item.quantity}</span>
                    <button class="qty-btn" onclick="adjustCartQty('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
                <button class="delete-item-btn" onclick="removeCartItem('${item.id}')" title="Hapus Item">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    // Compute Receipts
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const tax = Math.round(subtotal * 0.1);
    const delivery = 5000; // Rp5.000 Flat rate
    const total = subtotal + tax + delivery;

    cartSubtotalEl.textContent = `Rp${subtotal.toLocaleString("id-ID")}`;
    cartTaxEl.textContent = `Rp${tax.toLocaleString("id-ID")}`;
    cartDeliveryEl.textContent = `Rp${delivery.toLocaleString("id-ID")}`;
    cartTotalEl.textContent = `Rp${total.toLocaleString("id-ID")}`;
}

// Exposed globally for onclick handlers in cart items
window.adjustCartQty = function(id, amount) {
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) return;

    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        showToast("Item dihapus dari keranjang");
    } else {
        cart[index].totalPrice = cart[index].singlePrice * cart[index].quantity;
    }

    updateCartBadge();
    renderCart();
};

window.removeCartItem = function(id) {
    cart = cart.filter(item => item.id !== id);
    showToast("Item dihapus dari keranjang");
    updateCartBadge();
    renderCart();
};

// 9. Checkout & Delivery Tracker Simulation
function processCheckout() {
    if (cart.length === 0) {
        showToast("Keranjang Anda kosong! Silakan pilih mie terlebih dahulu.");
        return;
    }

    const customerName = customerNameInput.value.trim();
    if (!customerName) {
        showToast("Mohon masukkan nama pelanggan terlebih dahulu!");
        customerNameInput.focus();
        return;
    }

    const paymentMethod = paymentMethodVal.value;

    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const tax = Math.round(subtotal * 0.1);
    const delivery = 5000;
    const total = subtotal + tax + delivery;

    // Set Random Order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `#PM-${randomNum}`;
    trackOrderId.textContent = orderId;
    trackEta.textContent = "20 Menit";

    // Close Cart Drawer
    closeCart();

    // Create Order Object
    currentSimulatedOrder = {
        orderId: orderId,
        customerName: customerName,
        paymentMethod: paymentMethod,
        items: [...cart],
        subtotal: subtotal,
        tax: tax,
        delivery: delivery,
        total: total,
        timestamp: new Date().toLocaleString("id-ID"),
        status: "Pesanan Diterima"
    };

    // Push to History
    orderHistory.push(currentSimulatedOrder);
    saveOrderHistory();

    // Reset customer name input and payment method active states
    customerNameInput.value = "";
    paymentMethodOptions.forEach((opt, idx) => {
        if (idx === 0) {
            opt.classList.add("active");
            paymentMethodVal.value = opt.getAttribute("data-payment");
        } else {
            opt.classList.remove("active");
        }
    });

    // Trigger Screen Transition
    heroSection.style.display = "none";
    menuSection.style.display = "none";
    historySection.classList.remove("active");
    
    orderTrackerSection.classList.add("active");
    
    // Set Navigation Active State for Order tracking
    navLinks.forEach(link => link.classList.remove("active"));
    navTrackingLink.style.display = "inline-block";
    navTrackingLink.classList.add("active");

    // Clear Cart Data
    cart = [];
    updateCartBadge();

    // Start Simulation Flow
    startDeliverySimulation();
}

function startDeliverySimulation() {
    // Clear previous simulated triggers
    if (deliverySimTimeout) clearTimeout(deliverySimTimeout);
    
    // Reset steps UI
    const steps = [stepReceived, stepPreparing, stepDelivering, stepArrived];
    steps.forEach(step => {
        step.className = "timeline-step";
    });
    timelineProgress.style.width = "0%";
    stepReceived.classList.add("active");

    // Step 2: Preparing Noodles (Cooking) after 4 seconds
    deliverySimTimeout = setTimeout(() => {
        stepReceived.classList.remove("active");
        stepReceived.classList.add("completed");
        stepPreparing.classList.add("active");
        timelineProgress.style.width = "33%";
        trackEta.textContent = "15 Menit";
        showToast("Koki PickMie sedang memasak mie pesananmu! 👨‍🍳🔥");

        if (currentSimulatedOrder) {
            currentSimulatedOrder.status = "Sedang Dimasak";
            saveOrderHistory();
        }

        // Step 3: Out for Delivery after 8 seconds total
        deliverySimTimeout = setTimeout(() => {
            stepPreparing.classList.remove("active");
            stepPreparing.classList.add("completed");
            stepDelivering.classList.add("active");
            timelineProgress.style.width = "66%";
            trackEta.textContent = "8 Menit";
            showToast("Pesananmu siap! Driver sedang meluncur ke lokasimu. 🛵💨");

            if (currentSimulatedOrder) {
                currentSimulatedOrder.status = "Dalam Perjalanan";
                saveOrderHistory();
            }

            // Step 4: Arrived after 12 seconds total
            deliverySimTimeout = setTimeout(() => {
                stepDelivering.classList.remove("active");
                stepDelivering.classList.add("completed");
                stepArrived.classList.add("active");
                timelineProgress.style.width = "100%";
                trackEta.textContent = "Tiba!";
                showToast("Pesananmu sudah sampai! Selamat menikmati PickMie! 🍜😋");

                if (currentSimulatedOrder) {
                    currentSimulatedOrder.status = "Tiba di Tujuan";
                    saveOrderHistory();
                    currentSimulatedOrder = null;
                }
            }, 5000);

        }, 5000);

    }, 4000);
}

function resetToMenu() {
    // Clear simulation timeout
    if (deliverySimTimeout) clearTimeout(deliverySimTimeout);

    // Swap back screens
    orderTrackerSection.classList.remove("active");
    navTrackingLink.style.display = "none";
    historySection.classList.remove("active");
    
    heroSection.style.display = "block";
    menuSection.style.display = "block";

    // Set Active Navbar Tab back to Beranda
    navLinks.forEach(link => {
        if (link.getAttribute("data-target") === "home") {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    renderMenu();
}

// 10. History Section Handlers
function saveOrderHistory() {
    localStorage.setItem("pickmie_order_history", JSON.stringify(orderHistory));
    // If history view is active, update it in real-time
    if (historySection.classList.contains("active")) {
        renderHistory();
    }
}

function showHistorySection() {
    // Clear simulation timeout
    if (deliverySimTimeout) clearTimeout(deliverySimTimeout);

    // Swap screens
    heroSection.style.display = "none";
    menuSection.style.display = "none";
    orderTrackerSection.classList.remove("active");
    navTrackingLink.style.display = "none";
    
    historySection.classList.add("active");

    // Set Active Navbar Tab
    navLinks.forEach(link => {
        if (link.getAttribute("data-target") === "history") {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    renderHistory();
}

function renderHistory() {
    historyContainer.innerHTML = "";

    if (orderHistory.length === 0) {
        historyContainer.innerHTML = `
            <div class="empty-history">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <h4>Belum Ada Riwayat Pesanan</h4>
                <p>Kamu belum memesan mie apa pun. Yuk mulai pesan sekarang!</p>
            </div>
        `;
        return;
    }

    // Sort to show newest first
    const sortedHistory = [...orderHistory].reverse();

    sortedHistory.forEach(order => {
        let badgeClass = "received";
        if (order.status === "Sedang Dimasak") badgeClass = "preparing";
        else if (order.status === "Dalam Perjalanan") badgeClass = "delivering";
        else if (order.status === "Tiba di Tujuan") badgeClass = "arrived";

        let statusIcon = "fa-receipt";
        if (order.status === "Sedang Dimasak") statusIcon = "fa-fire-burner";
        else if (order.status === "Dalam Perjalanan") statusIcon = "fa-motorcycle";
        else if (order.status === "Tiba di Tujuan") statusIcon = "fa-house-chimney-user";

        // Generate items html
        let itemsHtml = "";
        order.items.forEach(item => {
            let itemCustomization = "";
            if (item.category !== "drinks" && item.category !== "snacks" && item.category !== "sets") {
                itemCustomization = `Varian: ${item.noodleType} • Pedas: Lvl ${item.spiceLevel}`;
                if (item.toppings && item.toppings.length > 0) {
                    itemCustomization += ` • Toppings: ` + item.toppings.map(t => t.name).join(", ");
                }
            } else {
                itemCustomization = `Porsi Standar`;
            }

            itemsHtml += `
                <div class="history-item-row">
                    <div class="history-item-details">
                        <span class="history-item-name">${item.title} (x${item.quantity})</span>
                        <span class="history-item-sub">${itemCustomization}</span>
                    </div>
                    <div class="history-item-price">Rp${item.totalPrice.toLocaleString("id-ID")}</div>
                </div>
            `;
        });

        const card = document.createElement("div");
        card.className = "history-card";
        card.innerHTML = `
            <div class="history-card-header">
                <div class="history-order-info">
                    <span class="history-order-id">${order.orderId}</span>
                    <span class="history-order-date">${order.timestamp}</span>
                </div>
                <div class="history-order-badge ${badgeClass}">
                    <i class="fa-solid ${statusIcon}"></i> ${order.status}
                </div>
            </div>
            <div class="history-card-body">
                <div class="history-customer-info">
                    <i class="fa-solid fa-circle-user" style="color: var(--accent);"></i>
                    Pelanggan: <span>${order.customerName}</span>
                </div>
                <div class="history-items-list">
                    ${itemsHtml}
                </div>
            </div>
            <div class="history-card-footer">
                <div class="history-payment-info">
                    Pembayaran: <span>${order.paymentMethod}</span>
                </div>
                <div class="history-total-price">
                    Total: <span>Rp${order.total.toLocaleString("id-ID")}</span>
                </div>
            </div>
        `;
        historyContainer.appendChild(card);
    });
}


// 10. Utility Helpers
function scrollToMenu() {
    menuSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

function showToast(message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent);"></i> ${message}`;
    
    container.appendChild(toast);
    
    // Automatically remove toast element from DOM after animation completes (3s total)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Expose routing helpers globally
window.scrollToMenu = scrollToMenu;
window.scrollToSection = scrollToSection;
window.resetToMenu = resetToMenu;
window.showToast = showToast;

window.addEventListener(
"load",
()=>{

setTimeout(()=>{

const splash=
document.getElementById(
"splash-screen"
);

splash.style.opacity=
"0";

setTimeout(()=>{

splash.style.display=
"none";

},1000);

},3000);

});