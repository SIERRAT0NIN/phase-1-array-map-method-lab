// tutorials = array of strings.
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    // tutorial is a copy of the tutorials array. tutorial is a callback arrow function
    const tut = tutorial.split(" ");
    // .split(' ') will split the items in the array with a space (' ')
    const capTut = tut.map(
      (tut) =>
        tut
          .charAt(0)
          // capTut will make a copy of the tut array, that is already split buy (' ')
          .toUpperCase() + tut.slice(1)
    );
    const resp = capTut.join(" ");
    return resp;
  });
};

console.log(titleCased());
