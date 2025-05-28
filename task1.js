// script.js

const menuItems = [
  {
    id: 1,
    name: "Pizza",
    price: "₹1200",
    category: "main",
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
  },
  {
    id: 2,
    name: "Burger",
    price: "₹960",
    category: "main",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Salad",
    price: "₹640",
    category: "healthy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Ice Cream",
    price: "₹480",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop"
  }
];

const menuContainer = document.getElementById("menu-container");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = 'all';

function renderMenu() {
  const filtered = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  menuContainer.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-xl shadow overflow-hidden">
      <div class="h-48 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
      </div>
      <div class="p-4 flex justify-between items-center font-semibold text-lg">
        <span>${item.name}</span>
        <span class="text-green-600">${item.price}</span>
      </div>
      <div class="p-4">
        <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
          Order Now
        </button>
      </div>
    </div>
  `).join('');
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.category;
    renderMenu();
  });
});

renderMenu();

