// state action repr
export let x = 0 // 4L
export let y = 0 // 3L

export function isGoal(x, y) {
  console.log(x === 2 ? 'YAAAAAAY' : 'aw')
  const xGoal = 2
  const yGoal = 'any'

  let res = true

  if (xGoal === 'any') {
    if (y !== yGoal) res = false
  }
  else if (yGoal === 'any') {
    if (x !== xGoal) res = false
  }
  else
    res = x === xGoal && y === yGoal

  return res
}

export function fill4(x, y) {
  x = 4
  return [x, y]
}

export function fill3(x, y) {
  y = 3
  return [x, y]
}

export function empty4OnGround(x, y) {
  x = 0
  return [x, y]
}

export function empty3OnGround(x, y) {
  y = 0
  return [x, y]
}

export function transfer3toFill4(x, y) {
  if (x + y >= 4 && y > 0) {
    y = y - (4 - x) < 0 ? 0 : y - (4 - x)
    x = 4
    return [x, y]
  }
  return undefined
}

export function transfer4toFill3(x, y) {
  if (x + y >= 3 && x > 0) {
    x = x - (3 - y) < 0 ? 0 : x - (3 - y)
    y = 3
    return [x, y]
  }
  return undefined
}

export function transferAll3To4(x, y) {
  x = x + y > 4 ? 4 : x + y
  y = 0
  return [x, y]
}

export function transferAll4To3(x, y) {
  x = 0
  y = x + y > 3 ? 3 : x + y
  return [x, y]
}

export function expand(node) {
  const children = []
  children.push(
    new Node(fill4(node.x, node.y), node, 'Fill 4 gallon jug'),
    new Node(fill3(node.x, node.y), node, 'Fill 3 gallon jug'),
    new Node(empty4OnGround(node.x, node.y), node, 'Empty 4 gallon jug on ground'),
    new Node(empty3OnGround(node.x, node.y), node, 'Empty 3 gallon jug on ground'),
    new Node(transferAll3To4(node.x, node.y), node, 'Transfer all of 3 to 4'),
    new Node(transferAll4To3(node.x, node.y), node, 'Transfer all of 4 to 3'),
  )

  if (transfer3toFill4(node.x, node.y) !== undefined) children.push(new Node(transfer3toFill4(node.x, node.y), node, 'Transfer 3 to fill 4'))
  if (transfer4toFill3(node.x, node.y !== undefined)) children.push(new Node(transfer4toFill3(node.x, node.y), node, 'Transfer 4 to fill 3'))

  return children
}



export class Node {
  x
  y
  parent
  action
  constructor(jugs, parent, action) {
    this.x = jugs[0]
    this.y = jugs[1]
    this.parent = parent
    this.action = action
  }

  toString() {
    return `(${this.x}, ${this.y}) p: ${this.parent}`
  }
}