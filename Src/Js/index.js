import Utils from './Utils'

var K_Mock = function(K_Mock){
  //this.K_Mock = K_Mock
  this.init(K_Mock)
}

K_Mock.prototype.init = function(K_Mock){
    if (location.search.indexOf('debug=true') === -1) return
    //K_Mock = K_Mock || this.K_Mock
    Utils.each(K_Mock,function(element){
        if (element.init) {
          element.init.call(null)
        }
    })
}

module.exports = K_Mock