import books from "./booksData.js";

const booksContainer = document.querySelector(".books__container");

const displayBooks = (books) => {
  booksContainer.innerHTML = "";

  books.forEach((book) => {
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
                <i class="material-icons">delete</i>
              </div>
          </div>
          <div>${book.genres.join(", ")}</div>
      </div>
      <div class="book__button">
        <button>Buy now</button>
        <i class="material-icons">favorite</i>
      </div>
    `;

    booksContainer.appendChild(bookElement);
  });
};

displayBooks(books);
