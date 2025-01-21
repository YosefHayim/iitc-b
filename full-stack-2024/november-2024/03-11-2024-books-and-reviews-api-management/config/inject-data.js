const books = [
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedDate: new Date("1949-06-08"),
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedDate: new Date("1813-01-28"),
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publishedDate: new Date("1851-10-18"),
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classics",
    publishedDate: new Date("1951-07-16"),
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedDate: new Date("1937-09-21"),
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    publishedDate: new Date("1953-10-19"),
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    publishedDate: new Date("1932-08-30"),
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    publishedDate: new Date("2006-09-26"),
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    publishedDate: new Date("-800-01-01"),
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical",
    publishedDate: new Date("1869-01-01"),
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological",
    publishedDate: new Date("1866-01-01"),
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical",
    publishedDate: new Date("1880-01-01"),
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Romance",
    publishedDate: new Date("1878-01-01"),
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    publishedDate: new Date("1847-10-16"),
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Romance",
    publishedDate: new Date("1847-12-01"),
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Epic",
    publishedDate: new Date("1320-01-01"),
  },
  {
    title: "The Iliad",
    author: "Homer",
    genre: "Epic",
    publishedDate: new Date("-750-01-01"),
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: "Historical",
    publishedDate: new Date("1862-01-01"),
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: "Adventure",
    publishedDate: new Date("1605-01-16"),
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedDate: new Date("1954-07-29"),
  },
];

const authors = [
  {
    name: "George Orwell",
    bio: "British novelist, known for '1984' and 'Animal Farm'",
  },
  {
    name: "Jane Austen",
    bio: "English novelist, known for 'Pride and Prejudice'",
  },
  { name: "Herman Melville", bio: "American novelist, known for 'Moby Dick'" },
  {
    name: "J.D. Salinger",
    bio: "American writer, known for 'The Catcher in the Rye'",
  },
  {
    name: "J.R.R. Tolkien",
    bio: "English writer, known for 'The Lord of the Rings' and 'The Hobbit'",
  },
  { name: "Ray Bradbury", bio: "American author, known for 'Fahrenheit 451'" },
  { name: "Aldous Huxley", bio: "English writer, known for 'Brave New World'" },
  { name: "Cormac McCarthy", bio: "American novelist, known for 'The Road'" },
  {
    name: "Homer",
    bio: "Ancient Greek poet, known for 'The Iliad' and 'The Odyssey'",
  },
  {
    name: "Leo Tolstoy",
    bio: "Russian author, known for 'War and Peace' and 'Anna Karenina'",
  },
  {
    name: "Fyodor Dostoevsky",
    bio: "Russian novelist, known for 'Crime and Punishment' and 'The Brothers Karamazov'",
  },
  { name: "Charlotte Brontë", bio: "English novelist, known for 'Jane Eyre'" },
  {
    name: "Emily Brontë",
    bio: "English novelist, known for 'Wuthering Heights'",
  },
  {
    name: "Dante Alighieri",
    bio: "Italian poet, known for 'The Divine Comedy'",
  },
  {
    name: "Victor Hugo",
    bio: "French author, known for 'Les Misérables' and 'The Hunchback of Notre-Dame'",
  },
  {
    name: "Miguel de Cervantes",
    bio: "Spanish novelist, known for 'Don Quixote'",
  },
  { name: "Mary Shelley", bio: "English writer, known for 'Frankenstein'" },
  {
    name: "Ernest Hemingway",
    bio: "American author, known for 'The Old Man and the Sea'",
  },
  {
    name: "Gabriel Garcia Marquez",
    bio: "Colombian novelist, known for 'One Hundred Years of Solitude'",
  },
  {
    name: "Franz Kafka",
    bio: "German-speaking novelist, known for 'The Metamorphosis'",
  },
];

const reviews = [
  {
    rating: 3,
    comment: "Good read but not as impactful as expected.",
    bookName: "1984",
  },
  {
    rating: 5,
    comment: "Incredibly moving story with unforgettable characters.",
    bookName: "Pride and Prejudice",
  },
  {
    rating: 2,
    comment: "I struggled to get through it; not my style.",
    bookName: "Moby Dick",
  },
  {
    rating: 4,
    comment: "Fascinating plot and deeply thought-provoking.",
    bookName: "The Catcher in the Rye",
  },
  {
    rating: 5,
    comment: "A masterpiece! Highly recommend to everyone.",
    bookName: "The Hobbit",
  },
  {
    rating: 3,
    comment: "Good book but didn’t live up to the hype for me.",
    bookName: "Fahrenheit 451",
  },
  {
    rating: 4,
    comment: "Great read with some memorable quotes.",
    bookName: "Brave New World",
  },
  {
    rating: 5,
    comment: "An unforgettable journey through an epic tale.",
    bookName: "War and Peace",
  },
];

export { authors, books, reviews };
