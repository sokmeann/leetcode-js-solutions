/***** Reverse Words in a String */

  /**
  * Given an input string, reverse the string word by word
  * E.g. 'the sky is blue' -> 'blue is sky the'
  * Clarifying questions:
    * What constitutes a word?
      * A sequence of non-space characters constitutes a word.
    * Could the input string contain leading or trailing spaces?
      * Yes. However, the returned string should not contain leading or trailing spaces.
    * How about multiple spaces between two words?
      * Reduce them to a single space
  ***
  * APPROACH:
    * Trim the string of any leading or trailing spaces
    * Split into an array of words
    * Reverse the order, trim each word, and join.
  */

  function reverseString(str){
    return str.trim().split(' ').filter(word => word !== '').reverse().join(' ')
  }
