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
  let t = tutorials.map((str) => {
    // let t1 = str.split(" ");
    // let t2 = t1.map((t1) => {
    //   return (t1[0].toUpperCase() + t1.slice(1))
    // });
    // let t3 = t2.join(" ")
    let t1 = str
      .split(" ")
      .map((splitWord) => {
        return splitWord[0].toUpperCase() + splitWord.slice(1);
      })
      .join(" ");
    return t1;
  });
  return t;
};
console.log(titleCased());
