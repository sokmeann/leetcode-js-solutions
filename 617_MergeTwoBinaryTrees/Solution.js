/***** Merge Two Binary Trees */

  /**
  * Given two binary trees and imagine that when you put one of them to cover the other,
  * some nodes of the two trees overlapped while the others are not.
  * You need to merge them into a new binary tree.
  * The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
  * Otherwise, the NOT null node will be used as the node of the new tree.
  * NOTE: The merging process must start from the root nodes of both trees.
  ***
  * APPROACH:
    * PRE-ORDER: Root node, Left node, Right node
    * Traverse the tree, add if both nodes have value
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

  function mergeTrees(tree1, tree2){
    if(tree1 == null) return tree2
    if(tree2 == null) return tree1
    tree1.value += tree2.value
    tree1.left = mergeTrees(tree1.left, tree2.left)
    tree1.right = mergeTrees(tree1.right, tree2.right)
    return tree1
  }
