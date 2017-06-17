describe("617 Merge Two Binary Trees", function(){

  let t1, t2

  beforeEach(function(){
    t1 = new BinaryTree(1)
    t2 = new BinaryTree(2)
    t1.insertRight(2)
    t1.insertLeft(3)
    t1.left.insertLeft(5)
    t2.insertRight(3)
    t2.insertLeft(1)
    t2.left.insertRight(4)
    t2.right.insertRight(7)
  })

  it("Should sum root nodes", function(){
    mergeTrees(t1, t2)
    expect(t1.value).toEqual(3)
  })

  it("Should sum child nodes that overlap", function(){
    mergeTrees(t1, t2)
    expect(t1.left.value).toEqual(4)
    expect(t1.left.left.value).toEqual(5)
  })

  it("Should return t1 node if corresponding t2 node is null", function(){
    mergeTrees(t1, t2)
    expect(t1.right.value).toEqual(5)
  })

  it("Should inherit child nodes from merging t2 to a null t1 node", function(){
    mergeTrees(t1, t2)
    expect(t1.left.right.value).toEqual(4)
    expect(t1.right.right.value).toEqual(7)
  })

})
