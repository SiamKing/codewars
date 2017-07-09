String.prototype.camelCase=function(){
  return this.replace(/(^| )(\w)/g, s => s.toUpperCase()).split(' ').join('')
}
