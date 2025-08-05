const book = {
  Title: "Garden of life",
  Description: "Beautiful garden",
  Author: "Bob",
  Pages: "222",
  Year: 2000,
  genre: "Fantasy",
};
const book1 = {
  Title: "The Hunger Games",
  Description: "Dystopian future",
  Author: "Suzanne Collins",
  Pages: "374",
  Year: 2008,
  genre: "Fantasy",
};
const book2 = {
  Title: "The Kite Runner",
  Description: "War",
  Author: "Khaled Hosseini",
  Pages: "371",
  Year: 2003,
  genre: "Fantasy",
};
const book3 = {
  Title: "The Book Thief",
  Description: "Beautiful garden",
  Author: "Markus Zusak",
  Pages: "552",
  Year: 2005,
  genre: "Fantasy",
};
const book4 = {
  Title: "The Catcher in the Rye",
  Description: "Beautiful garden",
  Author: "J. D. Salinger",
  Pages: "277",
  Year: 1951,
  genre: "Fantasy",
};

const booklist= [book, book1, book2, book3, book4];
for (let i=0; i< booklist.length; i++){
    console.log(`Title: ${booklist[i].Title}`);
    console.log("--------------");
}

console.log(booklist[0]);

console.log(`Title: ${book.Title}`);
console.log(`Title: ${book.Author}`);
book.Title = "Garden of Forest";
console.log("-------");
console.log(`Updated Title: ${book.Title}`);
