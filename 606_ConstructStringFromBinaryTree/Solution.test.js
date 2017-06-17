describe("606 Construct String from Binary Tree", function(){

  let tree1, tree2

  beforeEach(function(){
    tree1 = new BinaryTree(1)
    tree2 = new BinaryTree(1)
    tree1.insertRight(3)
    tree1.insertLeft(2)
    tree1.left.insertLeft(4)
    tree2.insertRight(3)
    tree2.insertLeft(2)
    tree2.left.insertRight(4)
  })

  it("Should drop empty parenthesis that don't affect relationship mapping", function(){
    expect(stringifyTree(tree1)).toEqual('1(2(4))(3)')
  })

  it("Should sum child nodes that overlap", function(){
    expect(stringifyTree(tree2)).toEqual('1(2()(4))(3)')
  })

})
