window.K_Mock = {
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
    }
}