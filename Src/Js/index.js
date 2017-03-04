import Utils from './Utils'
import XHR from './Xhr'
var K_Mock = function(K_Mock){
  //this.K_Mock = K_Mock

  //this.k_mock_jsonp = 'jsonp'

  if (location.search.indexOf('debug=true') === -1) return this
  this.real = true
  
  K_Mock = this.init_ajax(K_Mock);

  this.init(K_Mock)
}

K_Mock.prototype.init = function(K_Mock){
    
    //K_Mock = K_Mock || this.K_Mock
    Utils.each(K_Mock,function(element){
        if (element.init) {
          element.init.call(null)
        }
    })
}

function mock_jsonp (XHR){
  document.addEventListener('load',function(e){

      var match_array,
          item;
      if (e && 
            e.path && 
            e.path[0] &&  
            e.path[0].src && 
            (match_array = e.path[0].src.match(/callback=(\w+)/)) &&
            typeof match_array[1] === 'string' &&
            window[ match_array[1] ] &&
            ( item =   Utils.find_mocked_item({url: e.path[0].src}, XHR.Mock._mocked)  )
             ){
        window[ match_array[1] ].apply(null,[item.template])
      }
      //console.log(e);
      //return false;
    },true);
}

K_Mock.prototype.init_ajax = function(K_Mock){
  if (K_Mock.Ajax && K_Mock.Ajax.data) {
    XHR.Mock = {
      _mocked: {}
    };
    K_Mock.Ajax.init = function(){
      window.XMLHttpRequest = XHR//拦截原生xhr
      mock_jsonp(XHR)
      

      Utils.each(K_Mock.Ajax.data,function(element, key){
        XHR.Mock._mocked[ key ] = {
          rurl: key,
          template: element.success,
          status: element.status
        }
      })
      
    }
  }
  return K_Mock
}

module.exports = K_Mock