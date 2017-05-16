function counterEffect(hitCount) {
  return [...hitCount].map(num => [...new Array(~~num + 1).keys()] )
}
