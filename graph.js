class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach((el)=>this.addVertex(el))
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }
  

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    vertex.adjacent.forEach((el)=>el.adjacent.delete(vertex))
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const result = []
    const visitQ = [start]
    const seen = [...visitQ]
      while(visitQ.length > 0){
        const current = visitQ.pop()
        result.push(current.value)
        current.adjacent.forEach((el)=>{
          if(!seen.includes(el)){
            visitQ.push(el)
            seen.push(el)
          }
        })
      }
      return result
    
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const result = []
    const visitQ = [start]
    const seen = [...visitQ]
      while(visitQ.length > 0){
        const current = visitQ.shift()
        result.push(current.value)
        current.adjacent.forEach((el)=>{
          if(!seen.includes(el)){
            visitQ.push(el)
            seen.push(el)
          }
        })

      }
      
      return result
  }
}

module.exports = {Graph, Node}