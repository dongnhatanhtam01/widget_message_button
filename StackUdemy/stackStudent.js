class Student {
  constructor(name) {
    this.name = name;
    this.next = null;
  };
}

class School {
  constructor() {
    this.Fstudent = null;
    this.Lstudent = null;
    this.schoolSize = 0;
  };
  /** The function should accept a value
   * Create a new node with that value
   * 
   * If there are no nodes in the stack, set the first and last property to be the newly created node
   * 
   * If there is at least one node, create a variable that stores the current first property on the stack
   * 
   * Reset the first property to be a newly create node
   * 
   * Set the next property on the node to be the previously created variable - temp
   * 
   * Increment the size of the stack by 1
   */
  push(studentName) {
    var newNode = new Student(studentName);
    if (!this.Fstudent) {
      this.Fstudent = newNode;
      this.Lstudent = newNode;
    } else {
      var stock = this.Fstudent;
      this.Fstudent = newNode;
      this.Fstudent.next = stock;
    }
    return ++this.schoolSize;
  };
  pop() { };
}