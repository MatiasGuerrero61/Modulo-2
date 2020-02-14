const app = new Vue({
    el:'#app',
    data:{
        url:"https://api.propublica.org/congress/v1/113/senate/members.json",
        init: {
            method: 'GET',
            headers:{
                "X-API-Key" : "c4ESR03NKyIxPbPuSWQjsPDMBf760wdCMzKPrwrx"
            }
        },
        members:[],
        parties:[],
        states:[],
        stateActual: "All",
        campos:["party", "votes_with_party_pct", "state", "seniority"],
        current:'home'
    },
    created(){
        fetch(this.url, this.init).then(function(res){
            if(res.ok){
                return res.json()
            }else{
                throw new Error(res.status)
            }
        })
        .then(function(json){
          app.members = json.results[0].members
          app.parties = app.getKeyValue(json.results[0].members, "party")
          app.states = app.getKeyValue(json.results[0].members, "state")
 
        })
        .catch(function(error){
            console.log(error)
        })
    },
    methods:{
        getKeyValue(array, key){
            let result= []
            array.forEach(e => !result.includes(e[key]) ? result.push(e[key]) : null)
            return result
        },
        toPhrase(string){
            if(string.length > 1){
                return string.split("_").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
            }else{
                return string[0].toUpperCase() + string.slice(1)
            }
        }
    },
    computed:{
        filterMembers(){
            return this.members.filter(e => app.parties.includes(e.party) && (app.stateActual == e.state || app.stateActual == "All"))
        }
    }
})