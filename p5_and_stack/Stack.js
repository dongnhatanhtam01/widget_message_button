const left = 10
const width = 100
const height = 100
const topY = 100
const list = []
let node = null

function setup() {
 createCanvas(windowWidth - 20, windowHeight - 10)
 frameRate(30)
 list.push(new Node(10))
}
function draw() {
 background('#fff')
 fill('blue')
 textSize(30)
 text('Thực tập Stack FIFO (First In Last Out) - LIFO (Last in First Out)', left, 50)

 for (let i = 0; i < list.length; i++) {
  const x = left + i * width
  fill(list[i].color)
  stroke('blue')
  strokeWeight(2)
  rect(x, topY, width, height)

  noStroke()
  fill('white')
  textSize(20)
  text(
   int(list[i].value), x + width / 2 - textWidth(int(list[i].value).toString()) / 2, topY + height / 2 + 7
  )
 }
 if (node) {
  const x = left + list.length * width
  fill(node.color)
  stroke('blue')
  strokeWeight(2)
  rect(x, topY + height*2, width, height)

  noStroke()
  fill('white')
  textSize(20)
  text(
   int(node.value), x + width / 2 - textWidth(int(node.value).toString()) / 2, topY + height / 2 + 7 +height*2
  )
 }

 // console.log("a")
 noLoop()
}
function mousePressed() {
 if (mouseButton === LEFT) {
  list.push(new Node(random(400)))
  node = null
 }
 if (mouseButton === RIGHT) {
  if (list.length > 0) {
   node = list.pop()
  } else {
   node = null
  }
 }
 redraw()
}