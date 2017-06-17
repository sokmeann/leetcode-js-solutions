describe("557 Reverse Words in a String III", function(){

  it("Should return reversed string, maintaining whitespace and order, func 1 test 1", function(){

    const str = "Let's take the LeetCode contest"
    const reversedStr = "s'teL ekat eht edoCteeL tsetnoc"

    expect(reverseWords(str)).toEqual(reversedStr)

  })

  it("Should return reversed string, maintaining whitespace and order, func 1 test 2", function(){

    const str = "Wonder Woman is the best DC movie yet!!"
    const reversedStr = "rednoW namoW si eht tseb CD eivom !!tey"

    expect(reverseWords(str)).toEqual(reversedStr)

  })

  it("Should return reversed string, maintaining whitespace and order, func 2 test 1", function(){

    const str = "Let's take the LeetCode contest"
    const reversedStr = "s'teL ekat eht edoCteeL tsetnoc"

    expect(reverseWordsI(str)).toEqual(reversedStr)

  })

  it("Should return reversed string, maintaining whitespace and order, func 2 test 2", function(){

    const str = "Wonder Woman is the best DC movie yet!!"
    const reversedStr = "rednoW namoW si eht tseb CD eivom !!tey"

    expect(reverseWordsI(str)).toEqual(reversedStr)

  })

})
