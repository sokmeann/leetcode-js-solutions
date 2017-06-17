/***** Reverse Words in a String III */

  /**
  * Given a string, you need to reverse the order of characters
  * in each word within a sentence while still preserving whitespace
  * and initial word order.
  * e.g. 'Let's take LeetCode contest' -> 's'teL ekat edoCteeL tsetnoc'
  ***
  * APPROACH:
    * Split the string into an array of words
    * Map each word, reversing the word
    * Return the joined string
  */

  // Func 1
  function reverseWords(str){
    return str.split(' ').map(word => {
      return word.split('').reverse().join('')
    }).join(' ')
  }

  /*
  * What is you can't use .map() and .reverse() methods?
  * APPROACH:
    * Split the string into an array of words
    * Loop through the array
    * Reverse the word to the result string
    * Return result string, minus the last space
  */

  // Func 2
  function reverseWordsI(str){
    let wordArray = str.split(' '), resultStr = ''
    for(let i = 0; i < wordArray.length; i++){
      let currentWord = wordArray[i]
      for(let j = currentWord.length-1; j >= 0; j--){
        resultStr += currentWord[j]
      }
      resultStr += ' '
    }
    return resultStr.slice(0,-1)
  }
