// Theme Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  toggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// Navigation & Section Toggle
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

function showSection(id) {
  sections.forEach(section => {
    section.classList.toggle("active", section.id === id);
  });
  navButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.target === id);
  });
}

showSection("portfolio");

navButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    showSection(btn.dataset.target);
  });
});

// Note App
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note");
const noteList = document.getElementById("note-list");
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <span>${note}</span>
      <div class="note-actions">
        <button onclick="editNote(${index})">✏️</button>
        <button onclick="deleteNote(${index})">🗑️</button>
      </div>`;
    noteList.appendChild(div);
  });
}
function addNote() {
  const value = noteInput.value.trim();
  if (value) {
    notes.push(value);
    noteInput.value = "";
    saveNotes();
  }
}
function editNote(index) {
  const updated = prompt("Edit note:", notes[index]);
  if (updated !== null && updated.trim() !== "") {
    notes[index] = updated.trim();
    saveNotes();
  }
}
function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
}
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}
addNoteBtn.addEventListener("click", addNote);
window.editNote = editNote;
window.deleteNote = deleteNote;
renderNotes();

// Product Listing
const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 299,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Laptop",
    category: "electronics",
    price: 899,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 59,
    rating: 4.1,
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Jeans",
    category: "fashion",
    price: 45,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=300&q=80"
  }
];
const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");
const sortOption = document.getElementById("sort-option");

function displayProducts(data) {
  productList.innerHTML = "";
  data.forEach(p => {
    const div = document.createElement("div");
    div.className = "product card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p><strong>Category:</strong> ${p.category}</p>
      <p><strong>Price:</strong> ₹${p.price}</p>
      <p><strong>Rating:</strong> ${p.rating}</p>`;
    productList.appendChild(div);
  });
}
function filterAndSortProducts() {
  let filtered = [...products];
  const cat = categoryFilter.value;
  const sort = sortOption.value;

  if (cat !== "all") filtered = filtered.filter(p => p.category === cat);
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating-desc") filtered.sort((a, b) => b.rating - a.rating);

  displayProducts(filtered);
}
categoryFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);
filterAndSortProducts();

