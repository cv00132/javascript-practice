// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function getLargest () {
  var largest = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}return largest;
}
// ---------------------------
// 2. Find longest string
// ---------------------------
function getLongest () {
  var longest = '';
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }return longest;
}



// ---------------------------
// 3. Find even numbers
// ---------------------------
function findEven () {
  var evens = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  } return evens;
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function findOdd () {
  var odd = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      odd.push(numbers[i]);
    }
  } return odd;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function findIs () {
  var countIs = [];

  for (var i = 0; i < strings.length; i++) {
    var word = strings[i];
    for (var count = 0; count < word.length; count++){
      if (word[count] === "i" && word[count+1] === "s"){
        countIs.push(word);
      }
    }
  } return countIs;
}


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
  //var jointArray = numbers.concat(strings);
  /*function joinArray (x,y) {
   var newArray = x.join(' + ') + " + " + y.join (' + ');

   return newArray;
 }*/
 function joinedArray (x,y) {
  var arrayBoth = [];
   for(var i = 0; i <x.length; i++) {
     arrayBoth.push(x[i]);
   }
   for(var i = 0; i <y.length; i++) {
     arrayBoth.push(y[i]);
   }
   return arrayBoth;
 }




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
function instructorsTeach () {
  var instructorsJS = [];

  for ( var i = 0; i < instructors.length; i++) {
    if (instructors[i].teaches === 'JavaScript') {
      instructorsJS.push(instructors[i].firstname.toUpperCase());
    }
  }
   return instructorsJS.sort();
}
