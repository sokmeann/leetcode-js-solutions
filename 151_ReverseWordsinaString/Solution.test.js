describe("151 Reverse Words in a String", function(){

  it("Case 1 - Handles trailing spaces", function(){
    expect(reverseString('   a   b ')).toEqual('b a')
  })

  it("Case 2 - Handles multiple spaces", function(){
    expect(reverseString('Hello    World How  are you   ')).toEqual('you are How World Hello')
  })

})
