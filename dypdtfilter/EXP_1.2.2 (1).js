const products = [
  { 
    id: 1,
    name: "Wireless Headphones", 
    price: 129.99, 
    category: "electronics",
    image: "🎧"
  },
  { 
    id: 2,
    name: "Cotton T-Shirt", 
    price: 24.99, 
    category: "clothing",
    image: "👕"
  },
  { 
    id: 3,
    name: "Bluetooth Speaker", 
    price: 89.99, 
    category: "electronics",
    image: "🔊"
  },
  { 
    id: 4,
    name: "Denim Jeans", 
    price: 59.99, 
    category: "clothing",
    image: "👖"
  },
  { 
    id: 5,
    name: "Smart Watch", 
    price: 199.99, 
    category: "electronics",
    image: "⌚"
  },
  { 
    id: 6,
    name: "Premium Hoodie", 
    price: 49.99, 
    category: "clothing",
    image: "🧥"
  },
  { 
    id: 7,
    name: "Wireless Mouse", 
    price: 45.99, 
    category: "electronics",
    image: "🖱️"
  },
  { 
    id: 8,
    name: "Summer Dress", 
    price: 69.99, 
    category: "clothing",
    image: "👗"
  }
];

const productsDiv = document.getElementById("products");
const filterSelect = document.getElementById("filterSelect");
const totalCountSpan = document.getElementById("totalCount");
const emptyState = document.getElementById("emptyState");

let filteredProducts = [...products];

function renderProducts(list) {
  productsDiv.innerHTML = "";
  
  // Update total count
  totalCountSpan.textContent = list.length;
  
  // Show/hide empty state
  if (list.length === 0) {
    emptyState.style.display = "flex";
    return;
  }
  
  emptyState.style.display = "none";

  list.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "card fade";
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="card-header">
        <div style="font-size: 40px; margin-bottom: 12px; text-align: center;">${product.image}</div>
        <div class="product-title">${product.name}</div>
      </div>
      <div class="card-footer">
        <div class="product-price">${product.price.toFixed(2)}</div>
        <div class="badge ${product.category}">${product.category}</div>
      </div>
    `;

    card.addEventListener("mouseenter", function() {
      this.style.cursor = "pointer";
    });

    productsDiv.appendChild(card);
  });
}

function filterProducts() {
  const selectedCategory = filterSelect.value;

  if (selectedCategory === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(p => p.category === selectedCategory);
  }
  
  renderProducts(filteredProducts);
}

// Event listeners
filterSelect.addEventListener("change", filterProducts);

// Add smooth transition when filter changes
filterSelect.addEventListener("click", (e) => {
  e.target.style.transform = "scale(0.98)";
});

filterSelect.addEventListener("blur", (e) => {
  e.target.style.transform = "scale(1)";
});

// Initial render
renderProducts(products);
