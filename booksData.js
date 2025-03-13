const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
    price: 20.0,
    genres: ["Literary Fiction", "Coming-of-age Fiction"],
    imageUrl:
      "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel set in a totalitarian society, warning of the dangers of government overreach, totalitarianism, and repressive regimentation of all persons and behaviors within society.",
    price: 15.0,
    genres: ["Dystopian Fiction", "Science Fiction"],
    imageUrl:
      "https://cdn.kobo.com/book-images/c9472126-7f96-402d-ba57-5ba4c0f4b238/1200/1200/False/nineteen-eighty-four-1984-george.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A classic of English literature, the book tells the story of the emotional development of Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.",
    price: 17.0,
    genres: ["Romance", "Social Satire"],
    imageUrl:
      "https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "An exploration of the American Dream's failure, the novel reveals the disillusionment of the post-World War I generation.",
    price: 11.0,
    genres: ["Jazz Age Fiction", "Tragedy"],
    imageUrl: "https://images.booksense.com/images/722/425/9781609425722.jpg",
    isFavorite: false,
  },
  {
    id: 5,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    description:
      "A landmark of 20th-century literature, the novel tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founds the town of Macondo.",
    price: 8.0,
    genres: ["Magic Realism", "Historical Fiction"],
    imageUrl:
      "https://m.media-amazon.com/images/I/71IWwBoDNsL._AC_UF894,1000_QL80_.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description:
      "An epic high fantasy novel that follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron.",
    price: 30.0,
    genres: ["High Fantasy", "Epic Fiction"],
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    description:
      "Widely regarded as the first modern novel, it follows the adventures of an hidalgo named Mr. Alonso Quixano who reads so many chivalric romances that he loses his sanity and decides to set out to revive chivalry and bring justice to the world.",
    price: 25.0,
    genres: ["Satire", "Parody", "Picaresque"],
    imageUrl:
      "https://m.media-amazon.com/images/I/61NlxaWjCYL._AC_UF1000,1000_QL80_.jpg",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Moby-Dick",
    author: "Herman Melville",
    description:
      "An epic sea-story of Captain Ahab's voyage in pursuit of Moby Dick, a great white whale.",
    price: 12.0,
    genres: ["Adventure Fiction", "Sea Story"],
    imageUrl:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471137235/moby-dick-9781471137235_hr.jpg",
    isFavorite: false,
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A novel about a young Andalusian shepherd named Santiago, who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids.",
    price: 19.0,
    genres: ["Fable", "Quest", "Adventure Fiction"],
    imageUrl: "https://m.media-amazon.com/images/I/51BBCrLdH6L.jpg",
    isFavorite: false,
  },
  {
    id: 10,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school.",
    price: 14.0,
    genres: ["Realistic Fiction", "Coming-of-age Fiction"],
    imageUrl:
      "https://thethinksync.com/wp-content/uploads/2021/09/thecatcherintherye.jpg",
    isFavorite: false,
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
    description:
      "A dystopian novel set in a future world state where natural reproduction has been done away with and children are decanted from bottles. It explores the risks of implementing an authoritarian regime.",
    price: 21.0,
    genres: ["Dystopian Fiction", "Science Fiction"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKe8L9sgRmUCFKiH2yPwe-ZZG8wr_jtx7m_Q&s",
    isFavorite: false,
  },
  {
    id: 12,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    description:
      "The novel is noted for its colorful description of people and places along the Mississippi River.",
    price: 16.0,
    genres: ["Adventure Fiction", "Satire"],
    imageUrl:
      "https://cdn.kobo.com/book-images/e5009fa4-1fa5-4966-8831-39a94ed28ed6/1200/1200/False/adventures-of-huckleberry-finn-36.jpg",
    isFavorite: false,
  },
];

export default books;