/***** Fizz Buzz */

  /**
  * Write a program that outputs the string representation of numbers
  * from 1 to n
  * But for multiples of three it should output "Fizz"
  * and for multiples of five it should output "Buzz"
  * For numbers which are multiples of both 3 and 5, output "FizzBuzz"
  * Return the string representation in an aray
  ***
  * APPROACH:
    * Use a for loop from 1 to n
    * For each number, check if %3 and %5 === 0
    * Output as defined above
  */

  function fizzBuzz(n){
    let result = []
    for(let i = 1; i <= n; i++){
      if(i % 5 === 0 && i % 3 === 0) result.push('FizzBuzz')
      else if (i % 5 === 0) result.push('Buzz')
      else if (i % 3 === 0) result.push('Fizz')
      else result.push(i+'')
    }
    return result
  }
