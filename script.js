const userIP = GetUserIP();
const getDataBtn = document.getElementById('get-start');



document.getElementById('ip-add').innerHTML += userIP;

function GetUserIP(){
    var ret_ip;
    $.ajaxSetup({async: false});
    $.get('https://jsonip.com/', function(r){ 
        ret_ip = r.ip; 
    });
    return ret_ip;
}

getDataBtn.addEventListener('click', ()=>{
    window.location.href= './details/index.html'
});