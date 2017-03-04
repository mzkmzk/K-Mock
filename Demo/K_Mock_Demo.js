window.K_Mock_Demo = {
    Client: {
        init: function(){
             window.native_my = {}
             window.native_my.CallNativeFunction = function(a,b,c){
                //if (!c)return;
                console.log(c)
                var d = JSON.stringify({
                    byte: 12321321321,
                    taskSpeeds: 4,
                    channelReceivedsize: {
                        Original: 5,
                        P2p: 6,
                        Mirror: 5,
                        Vip:7
                    }
                });
                c.apply(null,[d])
             };
        }
    },
    Ajax: {
        data: {
            'http://k-inner-report.aaa.com/v1': {
                success: {
                    v1: 1
                }
            },
            'http://k-inner-report.bbb.com/v2': {
                status: 'error',
                success: {
                    v2: 2
                }
            },
            'http://dyactive2.vip.aaa.com/iface/?action=init2017&actid=bbb': {
                success: {
                    v3: 3
                }
            }
        },

    }
}