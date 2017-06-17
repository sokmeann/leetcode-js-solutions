describe("412 Fizz Buzz", function(){

  it("Case 1: n = 5", function(){
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"])
  })

  it("Case 2: n = 10", function(){
    expect(fizzBuzz(10)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"])
  })

  it("Case 3: n = 15", function(){
    expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"])
  })

})
