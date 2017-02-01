//Practice 2 - 1

function max(x,y) {
  if (x > y) {
    return "X is king";
  } else {
    return "Y is king";
  }
}

//Practice 2 - 2

function maxOfThree (a,b,c) {
if ((a>b) && (a>c)) {
    return a;
} else if ((b>a) && (b>c)){
    return b;
} return c;
}
maxOfThree(1,23,3);

//Practice 2 - 3

function isVowel (char) {
  //var lowerChar = char.toLowerCase();
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}

//Practice 2 - 4

function translate(phrase) {
  var newPhrase = "";

  for (i = 0; i < phrase.length; i++) {
    if (phrase[i] === "a" || phrase[i] === "e" || phrase[i] === "i" || phrase[i] === "o" || phrase[i] === "u" ) {
     newPhrase += phrase[i];
   } else {
     newPhrase += phrase[i] + "o" + phrase[i];
    }
  } return newPhrase;
}


//Practice 2 - 5

function reverse(phrase) {
  var newPhrase = "";

  for (var i = phrase.length - 1; i >= 0; i--) {
    newPhrase += phrase[i];
  } return newPhrase;
}
