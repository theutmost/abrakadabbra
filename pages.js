/* TESTING...

const tag = document.querySelector("h2");
    //tag.innerHTML = "this is a test";
    //tag.style.color = "red"; 
*/

//---------------------------------------------------
//DATA
//---------------------------------------------------

// this is the data for holding which page we're on
// It's 0 bc computer always starts counting from 0, not 1
let pageNumber = 0;

// content for each page...
const pages = [
  {
    copy: "a LA-based Magician.",
    background: "#edc7a9",
    circle: "#3e78ed"
  },
  {
    copy: "the biggest Houdini fan",
    background: "#a1fffe",
    circle: "#e34a47"
  },
  {
    copy: "open for new magic shows starting 2019",
    background: "#d3c7f3",
    circle: "#f7fe00"
  },
  {
    copy: `letting you <a href="#">check out her work here</a>`,
    background: "#faffb8",
    circle: "#b472e6"
  }
];

/*
//Testing an array....
const pagesS = [
  "is cool",
  "is the Oregon Ducks' biggest fan",
  "open to new projects starting 2019"
];
*/

//---------------------------------------------------
//ACTIONS
//---------------------------------------------------

//getting Next button/img
const nextTag = document.querySelector("footer img.next");
//getting Next button/img
const prevTag = document.querySelector("footer img.prev");
//the change, grabbing h2 tag from doc
const outputTag = document.querySelector("h2");
//the change, grabbing circle tag from doc
const circleTag = document.querySelector("section div.circle");
//the change, grabbing body tag from doc
const bodyTag = document.querySelector("body");

const next = function() {
  //pg # increases by 1
  pageNumber = pageNumber + 1;

  // CHECK!: if page # gets too big than pages length, do something
  if (pageNumber > pages.length - 1) {
    pageNumber = 0; // return to start
  }

  updateSection(); // explained below
};

const previous = function() {
  //pg # decreases by 1
  pageNumber = pageNumber - 1;

  // CHECK!: if page # is too small, then do something
  if (pageNumber < 0) {
    pageNumber = pages.length - 1; // return to end
  }

  updateSection(); // explained below
};

const updateSection = function() {
  // when i only had an ARRAY OF STRINGS
  // outputTag.innerHTML = pages[pageNumber]; // getting ea item in ARRAY to show upon a click

  // when i only had an ARRAY OF OBJECTS
  outputTag.innerHTML = pages[pageNumber].copy; // we want copy part from ea OBJ in the ARRAY items
  // changing STYLE bgcolor of Circle
  circleTag.style.backgroundColor = pages[pageNumber].circle; //from the array of objs
  // changing STYLE bgcolor of Page
  bodyTag.style.backgroundColor = pages[pageNumber].background; //from the array of objs
};

// when we click the Next tag, change something (doesn't matter what it is atm)
nextTag.addEventListener("click", function() {
  // outputTag.innerHTML = "it worked"; // testing that h2 change works!

  next();
});

// when we click the Next tag, change something (doesn't matter what it is atm)
prevTag.addEventListener("click", function() {
  // outputTag.innerHTML = "it worked"; // testing that h2 change works!

  previous();
});
