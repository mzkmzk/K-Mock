# K-Mcok

Imitate the source of the other way eg: json|jsonp|client_api Edit

* **rewriting XHR:** support all XHR MOCK
* **JSONP:** support jquery jsonp
* **client_api:** can rewriting client api

# Examples

```javascript
//set mock data and api
window.K_Mock_Demo = {
    Client: {
        init: function(){
             window.native_my = {}
             window.native_my.CallNativeFunction = function(a,b,c){
                ...
             };
        }
    },
    Ajax: {
        data: {
            'http://k-report.aaaa.com/v1': {
                success: {
                    v1: 1
                }
            }
        },

    }
}

//use mock
var _k_mock = new window.K_Mock(window.K_Mock_Demo)
    $.ajax({
      dataType: "json",
      url: 'http://k-report.aaaa.com/v1',
      data: {},
      success: function(data){
        console.log('success' + JSON.stringify(data));
      },
      error: function(data){
        console.log('error' + JSON.stringify(data));
      }
    });
```


# Demo

read ./Demo/ 

# Thanks

1. https://github.com/badoo/MockJS: K-Mock reference Mock.js rewriting XHR