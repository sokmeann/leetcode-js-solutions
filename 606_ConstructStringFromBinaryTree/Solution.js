/***** Construct String from Binary Tree */

  /**
  * Construct a string consisting of parenthesis and integers
  * from a binary tree with the preorder traversing way.
  * The null node needs to be represented by empty parenthesis pair '()'
  * Omit all the empty parenthesis pairs that don't afect the one-to-one
  * mapping relationship between the string and the original binary tree.

      1
    /  \
   2   3
  /
 4

 Outputs as: '1(2(4))(3)' // from '1(2(4)())(3()())'

      1
    /  \
   2   3
    \
     4

  Outputs as: '1(2()(4))(3)' // from '1(2()(4))(3()())'

  */

  function BinaryTree(value){
    this.value = value
  }

  BinaryTree.prototype.insertLeft = function(value){
    if(!this.left) this.left = new BinaryTree(value)
    else this.left.insertLeft(value)
  }

  BinaryTree.prototype.insertRight = function(value){
    if(!this.right) this.right = new BinaryTree(value)
    else this.right.insertRight(value)
  }

  function stringifyTree(tree){
    if(tree == null) return ''
    if(tree.left == null && tree.right == null) return tree.value + ''
    if(tree.right == null) return tree.value + '(' + stringifyTree(tree.left) + ')'
    return tree.value + '(' + stringifyTree(tree.left) + ')(' + stringifyTree(tree.right) + ')'
  }
