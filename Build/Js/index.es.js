'use strict';

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Xhr = require('./Xhr');

var _Xhr2 = _interopRequireDefault(_Xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var K_Mock = function K_Mock(_K_Mock) {
  //this.K_Mock = K_Mock

  //this.k_mock_jsonp = 'jsonp'

  if (location.search.indexOf('debug=true') === -1) return this;
  this.real = true;

  _K_Mock = this.init_ajax(_K_Mock);

  this.init(_K_Mock);
};

K_Mock.prototype.init = function (K_Mock) {

  //K_Mock = K_Mock || this.K_Mock
  _Utils2['default'].each(K_Mock, function (element) {
    if (element.init) {
      element.init.call(null);
    }
  });
};

function mock_jsonp(XHR) {
  document.addEventListener('load', function (e) {

    var match_array, item;
    if (e && e.path && e.path[0] && e.path[0].src && (match_array = e.path[0].src.match(/callback=(\w+)/)) && typeof match_array[1] === 'string' && window[match_array[1]] && (item = _Utils2['default'].find_mocked_item({ url: e.path[0].src }, XHR.Mock._mocked))) {
      window[match_array[1]].apply(null, [item.template]);
    }
    //console.log(e);
    //return false;
  }, true);
}

K_Mock.prototype.init_ajax = function (K_Mock) {
  if (K_Mock.Ajax && K_Mock.Ajax.data) {
    _Xhr2['default'].Mock = {
      _mocked: {}
    };
    K_Mock.Ajax.init = function () {
      window.XMLHttpRequest = _Xhr2['default']; //拦截原生xhr
      mock_jsonp(_Xhr2['default']);

      _Utils2['default'].each(K_Mock.Ajax.data, function (element, key) {
        _Xhr2['default'].Mock._mocked[key] = {
          rurl: key,
          template: element.success,
          status: element.status
        };
      });
    };
  }
  return K_Mock;
};

module.exports = K_Mock;
