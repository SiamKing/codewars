function countSmileys(arr) {
  return arr.reduce((tot, face) => tot + /^[:;][-~]?[D)]$/.test(face), 0)
}
