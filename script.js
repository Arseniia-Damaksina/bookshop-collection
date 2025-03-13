import books from "./booksData.js";

const booksContainer = document.querySelector(".books__container");
const allBooksBtn = document.querySelector("aside ul li:nth-child(1)");
const favoritesBtn = document.querySelector("aside ul li:nth-child(2)");

let filteredBooks = [...books];

const updateActiveTab = (selectedTab) => {
  allBooksBtn.style.backgroundColor =
    selectedTab === "all" ? "rgb(182, 21, 21)" : "";
  allBooksBtn.style.color = selectedTab === "all" ? "white" : "black";
  favoritesBtn.style.backgroundColor =
    selectedTab === "favorites" ? "rgb(182, 21, 21)" : "";
  favoritesBtn.style.color = selectedTab === "favorites" ? "white" : "black";
};

const displayBooks = (booksToDisplay) => {
  booksContainer.innerHTML = "";

  booksToDisplay.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book__container");

    bookElement.innerHTML = `
      <img src="${book.imageUrl}" alt="${book.title}">
      <div class="book__info">
          <div class="book__text">
              <div>
                  <h2>${book.title}</h2>
                  <h3>${book.author}</h3>
                  <div class="price">$${book.price.toFixed(2)}</div>
              </div>
              <div class="book__info-icon">
                <button class="icon-button">
                  <i class="material-icons delete-icon" data-id="${book.id}">delete</i>
                </button>
              </div>
          </div>
          <div>${book.genres.join(", ")}</div>
          <div class="book__button-container">
            <button class="book__button">Buy now</button>
            <button class="icon-button">
              <i class="material-icons favorite-icon" data-id="${book.id}" style="color: ${book.isFavorite ? 'rgb(182, 21, 21)' : 'gray'};">favorite</i>
            </button>
          </div>
      </div>
    `;

    booksContainer.appendChild(bookElement);
  });
};

const handleDeleteBook = (event) => {
  const bookId = Number(event.target.getAttribute("data-id"));
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
  }

  if (favoritesBtn.style.backgroundColor === "rgb(182, 21, 21)") {
    filteredBooks = books.filter((book) => book.isFavorite);
  } else {
    filteredBooks = [...books];
  }

  displayBooks(filteredBooks);
};

const handleFavoriteToggle = (event) => {
  const bookId = Number(event.target.getAttribute("data-id"));
  const book = books.find((b) => b.id === bookId);

  if (book) {
    book.isFavorite = !book.isFavorite;
  }

  if (favoritesBtn.style.backgroundColor === "rgb(182, 21, 21)") {
    filteredBooks = books.filter((book) => book.isFavorite);
  } else {
    filteredBooks = [...books];
  }

  displayBooks(filteredBooks);
};

const setupEventListeners = () => {
  booksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-icon")) {
      handleDeleteBook(event);
    }
    if (event.target.classList.contains("favorite-icon")) {
      handleFavoriteToggle(event);
    }
  });
};

allBooksBtn.addEventListener("click", () => {
  filteredBooks = [...books];
  displayBooks(filteredBooks);
  updateActiveTab("all");
});

favoritesBtn.addEventListener("click", () => {
  filteredBooks = books.filter((book) => book.isFavorite);
  displayBooks(filteredBooks);
  updateActiveTab("favorites");
});

setupEventListeners();

displayBooks(filteredBooks);
updateActiveTab("all");
