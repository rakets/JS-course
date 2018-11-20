//-------------№1-----------

function log(arguments){
    console.log(arguments);
}
    function debounce(vl,ms){
        var timeID;
            return function(data){
                if(timeID){
                    clearTimeout(timeID);
                }
                timeID=setTimeout(function(){
                    vl(data)
                },ms);
            }
    }
    var debounce=debounce(log,2000);

    debounce("Cat");
    debounce("Dog");
    debounce("Human");

    //--------------№2-------------

    function Timer(delay){
        var promise=new Promise(function(res,rej){
          setTimeout(res,delay);
      });
    return promise;
    }

    //-------№3----------
    
   function promisifyXML(url,method,body){
       return new Promise(function(res,rej){
            var xhr=new XMLHttpRequest();
            xhr.open(method,url,true);
            xhr.onreadystatechange =function(){
                if(xhr.status !==4){
                    res(xhr.responseText);
                } else {
                    rej(xhr.status + ':' + xhr.statusText);
                    }
            };
            xhr.onerror = function(){
            rej(xhr.statusText);
            };
            xhr.send(body);
        });
   }

   //------------№4-------------------
   
   function request(url) {
    return new Promise((res) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;
        setTimeout(() => res(url), delayTime);
    });
}
function urlResolve (url){
    var promiseArr = url.map(function(url){
        return request(url);
    });
    var Arr= [];
    return new Promise(function(resolve, reject){
        for (var i=0;i<=promiseArr.length;i++){
            promiseArr[i]
                .then (function(res){
                    Arr.push(res);
                        if (Arr.length==promiseArr.length) {
                            resolve(Arr);
                    }
                })
                .catch(function(err){
                    reject(err);
                });
        }
    })
}

 
