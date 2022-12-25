// // const users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["ipsum", "lorem"],
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     skills: ["adipisicing", "irure", "velit"],
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     skills: ["ex", "culpa", "nostrud"],
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     skills: ["non", "amet", "ipsum"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["lorem", "veniam", "culpa"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // // Change code below this line
// // const getUserNames = users => {
// //     return users.map(user => user.name)

// //   };
// // console.log(getUserNames(users));
// //   // Change code above this line

// //   const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction", "mysticism"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism", "adventure"],
// //   },
// // ];
// // // Change code below this line
// // const allGenres = books.flatMap(book => book.genres);
// // const uniqueGenres = allGenres.filter(book => book.genres);

// // console.log(allGenres);
// // console.log(uniqueGenres);

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   {
// //     title: "The Dreams in the Witch House",
// //     author: "Howard Lovecraft",
// //     rating: 8.67,
// //   },
// // ];
// // const MIN_BOOK_RATING = 8;
// // // Change code below this line

// // const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.author.localeCompare(b.author));
// // console.log(names);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort((a, b) => [a.friends.length - b.friends.length])
//     .map(user => user.name);
// console.table([...users]);

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);



// const liPotatoes = document.createElement(`li`);
// liPotatoes.textContent = ingredients[0];
// liPotatoes.classList.add(`item`);

// const liMushrooms = document.createElement(`li`);
// liMushrooms.textContent = ingredients[1];
// liMushrooms.classList.add(`item`);

// const liGarlic = document.createElement(`li`);
// liGarlic.textContent = ingredients[2];
// liGarlic.classList.add(`item`);

// const liTomatos = document.createElement(`li`);
// liTomatos.textContent = ingredients[3];
// liTomatos.classList.add(`item`);

// const liHerbs = document.createElement(`li`);
// liHerbs.textContent = ingredients[4];
// liHerbs.classList.add(`item`);

// const liCondiments = document.createElement(`li`);
// liCondiments.textContent = ingredients[5];
// liCondiments.classList.add(`item`);

// list.append(liPotatoes, liMushrooms, liGarlic, liTomatos, liHerbs, liCondiments);
// console.log(list);

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}