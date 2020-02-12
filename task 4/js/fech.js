let data
let url = "https://api.propublica.org/congress/v1/113/senate/members.json"
let init = {
    method: 'GET',
    headers:{
        "X-API-Key": "c4ESR03NKyIxPbPuSWQjsPDMBf760wdCMzKPrwrx"
    }
}

fetch(url, init).then(function(res){
    if(res.ok){
        return res.json()
    }else{
        throw new Error(res.status)
    }
})
.then(function(json){
    data = json
    start();
})
.catch(function(error){
    console.log(error)
})