import books from "./booksData.js";

const booksContainer = document.querySelector(".books__container");

const displayBooks = (books) => {
  booksContainer.innerHTML = "";

  books.forEach((book, index) => {
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
                <button>
                  <i class="material-icons delete-icon" data-index=${index}>delete</i>
                </button>
              </div>
          </div>
          <div>${book.genres.join(", ")}</div>
          <div class="book__button-container">
            <button class="book__button">Buy now</button>
            <i class="material-icons">favorite</i>
          </div>
      </div>
    `;

    booksContainer.appendChild(bookElement);
  });

  document.querySelectorAll(".delete-icon").forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const indexToRemove = event.target.getAttribute("data-index");
      books.splice(indexToRemove, 1);
      displayBooks(books);
    });
  });
};

displayBooks(books);
