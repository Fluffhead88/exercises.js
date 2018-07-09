(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }

  };
  console.assert(max(2, 3) === 3, "function max incorrect");
  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) {
      return a;
    } else if ((b >= a) && (b >= c)) {
      return b;
    } else {
      return c;
    }
  };

  console.assert(maxOfThree(2, 3, 4) === 4, "function maxOfThree incorrect");




  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  // if letter is not in the list, indexOf will return -1
  function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(char) > 0) {
      return true;
    } else {
      return false;
    }
  }

  console.assert(isVowel("b") === false, "function isVowel incorrect");

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  // function rovarspraket(phrase) {
  //   if
  // }



  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(a) {
    var sumAnswer = 0;
    for (var x in a) {
      sumAnswer += a[x];
    }
    return sumAnswer;
  }
  console.assert(sum([1, 2, 3, 4]) === 10, "function sum incorrect");

  function multiply(a) {
    var multiplyAnswer = 1; //can't multiply be zero
    for (var x in a) {
      multiplyAnswer *= a[x];
    }
    return multiplyAnswer;
  }

  console.assert(multiply([1, 2, 3, 4]) === 24, "function multiply incorrect");
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverse(string) {
    var rev = (string.split('').reverse().join(''));
    return rev;
  }


  console.assert(reverse("turkey") === "yekrut", "function multiply incorrect");

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------


  // define words to check
  var wordList = ['turkey', 'ham', 'beef'];

  function findLongestWord(wordList) {
    var len = '';
    // checks each word and if it's greater than the previous word, it replaces length with that number
    wordList.forEach(function(word) {
      if (word.length > len) {
        len = word.length;
      }
    });
    return len;
  }

  console.assert(findLongestWord(wordList) === 6, "function findLongestWord incorrect");



  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  function filterLongWords(words, i) {
    var answer = [];
    words.forEach(function(x) {
      if (x.length > i) {
        answer.push(x)
      };
    });
    return answer;
  }

  console.assert(filterLongWords(['Turkey', 'Ham', 'Chicken', 'Beef'], 4).length === 2, 'function filterLongWords incorrect')
  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------





})();