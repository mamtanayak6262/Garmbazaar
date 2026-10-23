 
/* GramBazaar Shared Navigation
   Include this file on every page that needs the common navbar.
*/
(() => {
  "use strict";

  const mount = document.getElementById("gb-common-nav");
  if (!mount) return;

  // Prevent duplicate navigation initialization.
  if (mount.dataset.initialized === "true") return;
  mount.dataset.initialized = "true";

  const path = location.pathname.toLowerCase();
  const page = path.split("/").pop() || "index.html";
  const isDashboard = page === "user-dashboard.html";
  const home = "index.html";

  const css = `
    .gb-topline {
      padding: 8px 5%;
      background: #075c32;
      color: #fff;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .gb-header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 5%;
      border-bottom: 1px solid #e6ece7;
      position: sticky;
      top: 0;
      background: #fff;
      z-index: 100;
      box-shadow: 0 3px 12px #12351b08;
      flex-wrap: wrap;
    }

    .gb-brand {
      display: flex;
      align-items: center;
      gap: 9px;
      text-decoration: none;
      color: #18241c;
      font-size: 22px;
      font-weight: 850;
      line-height: 1.05;
      white-space: nowrap;
    }

    .gb-logo {
      background: #eaf7ed;
      border-radius: 13px;
      padding: 9px;
      font-size: 22px;
    }

    .gb-brand small {
      display: block;
      font-size: 10px;
      font-weight: 500;
      color: #718076;
      margin-top: 5px;
    }

    .gb-location {
      display: flex;
      gap: 8px;
      align-items: center;
      white-space: nowrap;
      color: #18241c;
    }

    .gb-pin {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #e8f4f8;
    }

    .gb-location small,
    .gb-location strong {
      display: block;
    }

    .gb-location small {
      color: #718076;
      font-size: 10px;
    }

    .gb-location strong {
      font-size: 12px;
      max-width: 165px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .gb-search {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
      min-width: 180px;
      max-width: 520px;
      background: #f4f7f4;
      border: 1px solid #e6ece7;
      border-radius: 12px;
      overflow: hidden;
      margin-left: auto;
    }

    .gb-search span {
      padding-left: 13px;
      font-size: 20px;
      color: #718076;
    }

    .gb-search input {
      flex: 1;
      min-width: 0;
      padding: 12px 8px;
      border: 0;
      background: transparent;
      outline: none;
      color: #18241c;
    }

    .gb-search button {
      border: 0;
      background: #168447;
      color: white;
      padding: 0 16px;
      height: 43px;
      font-weight: 700;
      cursor: pointer;
    }

    .gb-action {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      border: 1px solid #e6ece7;
      background: #fff;
      color: #18241c;
      border-radius: 9px;
      padding: 9px 11px;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      font: inherit;
      font-size: 13px;
      font-weight: 700;
    }

    .gb-action:hover {
      background: #eaf7ed;
      color: #075c32;
    }

    .gb-count {
      display: inline-grid;
      place-items: center;
      min-width: 19px;
      height: 19px;
      padding: 0 4px;
      border-radius: 20px;
      background: #168447;
      color: white;
      font-size: 10px;
    }

    .gb-categories {
      display: flex;
      gap: 8px;
      padding: 10px 5%;
      overflow-x: auto;
      border-bottom: 1px solid #e6ece7;
      white-space: nowrap;
      background: #fff;
      scrollbar-width: thin;
    }

    .gb-cat {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: 1px solid transparent;
      background: #fff;
      color: #26332a;
      text-decoration: none;
      padding: 8px 13px;
      border-radius: 25px;
      cursor: pointer;
      font: inherit;
      font-size: 13px;
      white-space: nowrap;
    }

    .gb-cat:hover,
    .gb-cat.active {
      background: #eaf7ed;
      border-color: #cdebd5;
      color: #075c32;
    }

    .gb-mobile-toggle {
      display: none;
      border: 1px solid #e6ece7;
      border-radius: 9px;
      padding: 8px 12px;
      background: #fff;
      color: #075c32;
      font-size: 21px;
      cursor: pointer;
    }

    @media (max-width: 1050px) {
      .gb-header {
        gap: 10px;
      }

      .gb-brand {
        font-size: 19px;
      }

      .gb-location {
        display: none;
      }

      .gb-search {
        order: 10;
        flex-basis: 100%;
        max-width: none;
        margin: 0;
      }
    }

    @media (max-width: 650px) {
      .gb-topline {
        font-size: 10px;
        padding: 7px 4%;
      }

      .gb-topline span {
        display: none;
      }

      .gb-header {
        padding: 11px 4%;
        gap: 7px;
      }

      .gb-brand {
        font-size: 18px;
        flex: 1;
      }

      .gb-logo {
        padding: 6px;
      }

      .gb-mobile-toggle {
        display: inline-block;
      }

      .gb-action {
        font-size: 12px;
        padding: 7px;
      }

      .gb-action-label {
        display: none;
      }

      .gb-search {
        order: 10;
      }

      .gb-categories {
        padding: 9px 4%;
      }

      .gb-cat {
        font-size: 12px;
        padding: 7px 10px;
      }
    }
  `;

  // Add the CSS only once.
  if (!document.getElementById("gb-common-nav-style")) {
    const style = document.createElement("style");
    style.id = "gb-common-nav-style";
    style.textContent = css;
    document.head.appendChild(style);
  }

  const searchMarkup = isDashboard
    ? `
      <form class="gb-search" id="searchForm" role="search">
        <span>⌕</span>
        <input id="globalSearch"
          placeholder="Search orders, addresses, help..."
          aria-label="Search account">
        <button type="submit">Search</button>
      </form>`
    : `
      <form class="gb-search" id="searchForm" role="search">
        <span>⌕</span>
        <input id="searchInput"
          placeholder="Search products..."
          aria-label="Search products">
        <button type="submit">Search</button>
      </form>`;

  const accountMarkup = `
    <a class="gb-action" id="accountBtn"
       href="user-dashboard.html" title="My Dashboard">
      👤 <span class="gb-action-label">My Dashboard</span>
    </a>`;

  const cartMarkup = `
    <a class="gb-action" href="${home}#cart" id="cartJump" title="My Cart">
      🛒 <span class="gb-action-label">Cart</span>
      <b class="gb-count" id="cartCount">0</b>
    </a>`;

  const wishlistMarkup = `
    <a class="gb-action" href="${home}#products" id="wishlistLink" title="Wishlist">
      ♡ <span class="gb-action-label">Wishlist</span>
    </a>`;

  const categoryLinks = [
    { label: "All Products", href: `${home}#products` },
    { label: "🥦 Fruits & Vegetables", href: "fruits.html" },
    { label: "🌾 Grocery & Staples", href: "groceries.html" },
    { label: "🎨 Handmade Crafts", href: "handmade-crafts.html" },
    { label: "🌱 Local Products", href: "local-products.html" },
    { label: "ℹ️ About Us", href: "about.html" },
    { label: "👤 Dashboard", href: "user-dashboard.html" }
  ];

  mount.innerHTML = `
    <div class="gb-topline">
      <strong>🌿 Apne Gaon Ka Bazaar, Ab Online</strong>
      <span>Fresh products · Local shops · Farmers se seedha</span>
    </div>

    <header class="gb-header">
      <a href="${home}" class="gb-brand">
        <span class="gb-logo">🌿</span>
        <span>
          Gram<span style="color:#168447">Bazaar</span>
          <small>Apne gaon ka bazaar</small>
        </span>
      </a>

      <button type="button" class="gb-mobile-toggle"
        id="gbMobileToggle" aria-expanded="false"
        aria-label="Show categories">☰</button>

      <div class="gb-location">
        <span class="gb-pin">📍</span>
        <span>
          <small>DELIVER TO</small>
          <strong id="headerAddress">Choose your address</strong>
        </span>
      </div>

      ${searchMarkup}
      ${accountMarkup}
      ${wishlistMarkup}
      ${cartMarkup}
    </header>

    <nav class="gb-categories" id="categoryNav" aria-label="Main navigation">
      ${categoryLinks.map(item => `
        <a class="gb-cat" href="${item.href}">${item.label}</a>
      `).join("")}
    </nav>
  `;

  // Highlight the current page.
  mount.querySelectorAll(".gb-cat").forEach(link => {
    const href = link.getAttribute("href");
    const target = href.split("#")[0] || home;

    if (target.toLowerCase() === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Mobile category menu.
  const toggle = document.getElementById("gbMobileToggle");
  const categoryNav = document.getElementById("categoryNav");

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.textContent = expanded ? "☰" : "✕";
    categoryNav.style.display = expanded ? "" : "flex";
  });

  // On mobile, categories remain horizontally scrollable.
  // Clicking a category follows its normal page link.
  categoryNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
      categoryNav.style.display = "";
    });
  });

  // Populate saved delivery address on dashboard.
  if (isDashboard) {
    try {
      const saved = JSON.parse(
        localStorage.getItem("gbdash-addresses") || "[]"
      );

      const defaultAddress = saved.find(item => item.isDefault) || saved[0];
      const addressNode = document.getElementById("headerAddress");

      if (addressNode && defaultAddress) {
        addressNode.textContent =
          defaultAddress.label ||
          defaultAddress.village ||
          "Saved address";
      }
    } catch (error) {
      console.warn("Could not load the saved delivery address.");
    }
  }

  // Update the header cart count if a compatible saved cart exists.
  // Adjust the storage key here if your shop uses a different key.
  function refreshCartCount() {
    const countNode = document.getElementById("cartCount");
    if (!countNode) return;

    try {
      const storedCart = JSON.parse(
        localStorage.getItem("gb-cart") || "[]"
      );

      const count = Array.isArray(storedCart)
        ? storedCart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0)
        : 0;

      countNode.textContent = String(count);
    } catch (error) {
      countNode.textContent = "0";
    }
  }

  refreshCartCount();
  window.addEventListener("storage", refreshCartCount);

  // Connect search to product cards when the current page has them.
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById(
    isDashboard ? "globalSearch" : "searchInput"
  );

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", event => {
      event.preventDefault();

      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;

      if (isDashboard) {
        // Filter dashboard content only when compatible searchable rows exist.
        const rows = document.querySelectorAll(
          "[data-search], .order-card, .address-card"
        );

        if (!rows.length) {
          alert("Use your dashboard search to find account information.");
          return;
        }

        rows.forEach(row => {
          const text = (
            row.dataset.search || row.textContent || ""
          ).toLowerCase();

          row.hidden = !text.includes(query);
        });

        return;
      }

      // Search existing product cards on this page.
      const productCards = document.querySelectorAll(
        ".product-card, .product, [data-product]"
      );

      if (productCards.length) {
        productCards.forEach(card => {
          const text = (
            card.dataset.search ||
            card.dataset.product ||
            card.textContent ||
            ""
          ).toLowerCase();

          card.hidden = !text.includes(query);
        });

        const productsSection = document.getElementById("products");
        if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // On pages without product cards, open the appropriate store page.
      const targetPage = /fruit|vegetable|apple|banana/.test(query)
        ? "fruits.html"
        : /craft|handmade|art|tribal/.test(query)
          ? "handmade-crafts.html"
          : /grocery|rice|wheat|dal|oil|staple/.test(query)
            ? "groceries.html"
            : "local-products.html";

      location.href = targetPage + "?search=" + encodeURIComponent(query);
    });
  }

  // Allow other page scripts to refresh the count after cart changes.
  window.GBNav = window.GBNav || {};
  window.GBNav.refreshCartCount = refreshCartCount;
})();
