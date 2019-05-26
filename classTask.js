function stringToArr(str) {
  let stringToArr = str;
  let temp = [];
  let arrOfStrings = [];
  for (var i = 0; i < stringToArr.length; i++) {
    if (stringToArr[i] === " " ||
      stringToArr[i] === "," ||
      stringToArr[i] === ";") {
      if (stringToArr[i - 1] === undefined) {
        temp.shift();
      } else if ((temp !== []) &&
        stringToArr[i - 1] !== undefined &&
        stringToArr[i - 1] !== " " && stringToArr[i - 1] !== "," &&
        stringToArr[i - 1] !== ";") {
        arrOfStrings.push(temp.join(""))
        temp = [];
      }
    } else {
      temp.push(stringToArr[i]);
    }
  }
  arrOfStrings.push(temp.join(""));
  return arrOfStrings;
}


function getIdentificator(str) {
  var stringArr = stringToArr(str);
  let result = [];
  let temp = [];
  let alplabetLess = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabetFull = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let alplabetLessSplit = alplabetLess.split("");
  let alphaFullSplit = alphabetFull.split("");
  for (var i = 0; i < stringArr.length; i++) {
    if (alplabetLess.indexOf(stringArr[i].charAt(0)) > -1) {
      let splitWord = stringArr[i].split("");
      for (var j = 0; j < splitWord.length; j++) {
        if (alphabetFull.indexOf(splitWord[j]) > -1) {
          temp.push(splitWord[j]);
        } else if (alphabetFull.indexOf(splitWord[j]) > -1 === false) {
          temp = [];
          break;
        }
        temp.join('');
      }
      if (temp[i] !== undefined) {
        result.push(temp.join(""));
        temp = [];
      }
    }
  }
  console.log(result);
  return result;
}

getIdentificator('asd bsdasd gdfgs3dfывg fgsdfg')



function getTwoArr(values) {
  var arrPlus = values.filter(function(number) {
    return number > 0;
  });
  var arrMinus = values.filter(function(number) {
    return number < 0;
  });
  return "Positive numbers are: " + arrPlus +
    " Negative numbers are: " + arrMinus;
}


console.log(getTwoArr([1, 43, 12, 456, -2, -654]));