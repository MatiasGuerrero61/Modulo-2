const app = new Vue({
    el:'#app',
    data:{
        url:"",
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
        current:'home',
        stats:{
            republican:{
            cant:0,
            votes:0
            },
            democrat:{
            cant:0,
            votes:0
            },
           independent:{
            cant:0,
            votes:0,
           },
           total:{
            cant:0
           }            
        },
        tenPercent:0,
        leastEngaged:[],
        mostEngaged:[],
        leastLoyal:[],
        mostLoyal:[]
    },
    created(){
    },
    methods:{
        startFetch(){
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
              app.partyFilter(app.members)
              app.leastEngaged = app.getArray(app.members, false,"missed_votes_pct")
              app.mostEngaged = app.getArray(app.members, true, "missed_votes_pct")
              app.mostLoyal = app.getArray(app.members, true, "votes_with_party_pct")
              app.leastLoyal = app.getArray(app.members, false, "votes_with_party_pct")
     
            })
            .catch(function(error){
                console.log(error)
            })
        },
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
        },
        partyFilter(array){
            array.forEach(e =>{
                if(e.party == "R"){
                    app.stats.republican.cant ++
                    app.stats.republican.votes += e.votes_with_party_pct
                }
                if(e.party == "D"){
                    app.stats.democrat.cant ++
                    app.stats.democrat.votes += e.votes_with_party_pct
                }
                if(e.party == "I"){
                    app.stats.independent.cant ++
                    app.stats.independent.votes += e.votes_with_party_pct
                }
            })
            app.stats.democrat.votes = app.stats.democrat.cant ? app.stats.democrat.votes / app.stats.democrat.cant: 0           
            app.stats.republican.votes = app.stats.republican.cant ? app.stats.republican.votes / app.stats.republican.cant: 0
            app.stats.independent.votes = app.stats.independent.cant ? app.stats.independent.votes / app.stats.independent.cant: 0
            app.stats.total.cant = array.length
        },
        getArray(array, orden, filtro){
            let aux=[]
            let result=[]
            let i =0
            this.tenPercent = Math.round(array.length * 0.10)
            aux = array.filter(e=> e.total_votes != 0)
            if(orden){
                aux.sort(function(a,b){
                    return a[filtro]-b[filtro]
                })
            }else{
                aux.sort(function(a,b){
                    return b[filtro]-a[filtro]
                }) 
            }
            while(i < this.tenPercent || aux[i] == aux[i-1]){
                result.push(aux[i])
                i ++
            }
            return result   
        },
        changeCurrent(currentActual){
            this.current = currentActual
    
            if(this.current == "senate-data" || this.current == "senate-attendance" || this.current == "senate-loyalty"){
                this.url="https://api.propublica.org/congress/v1/113/senate/members.json"
                this.startFetch()
            }
            if(this.current == "house-data" || this.current == "house-attendance" || this.current == "house-loyalty"){
                this.url="https://api.propublica.org/congress/v1/113/house/members.json"
                this.startFetch()
            }
        },
        hola(){console.log("hola")}
    },
    computed:{
        filterMembers(){
            return this.members.filter(e => app.parties.includes(e.party) && (app.stateActual == e.state || app.stateActual == "All"))
        }
    }
})