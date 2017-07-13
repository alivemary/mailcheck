const levenshtein = require("js-levenshtein");

export const checkFunctions = [
  str => {
    let mailList = ["gmail.com", "yahoo.com"];
    let indexOfNearest = 0;
    let smallestDifferense = 1000;
    mailList.forEach((mail, index) => {
      let difference = levenshtein(str, mail);

      if (difference < smallestDifferense) {
        smallestDifferense = difference;
        indexOfNearest = index;
      }
    });
    console.log(mailList[indexOfNearest]);
    return mailList[indexOfNearest];
  },
  str => {
    return "nothing";
  }
];
