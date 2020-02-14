function start(){
const datos = data.results[0].members
let stats = {
    nro_dem: 0,
    nro_rep: 0,
    nro_ind: 0,
    nro_total:0,
    votes_dem: 0,
    votes_rep: 0,
    votes_ind: 0,
    votes_total: 0,
    ten_pct:0,
    top_attendance:[],
    bottom_attendance:[],
    top_loyalty:[],
    bottom_loyalty:[]
}
let rep = datos.filter(e => e.party == "R")
let dem = datos.filter(e => e.party == "D")
let ind = datos.filter(e => e.party == "I")

stats.nro_dem = dem.length
stats.nro_rep = rep.length
stats.votes_ind = ind.length

function votes(lista){
    let aux = 0;
    lista.forEach(e => {
       aux += e.votes_with_party_pct 
    });
    if(aux == 0){
        return 0
    }
    return (aux / lista.length)
}

stats.votes_dem = votes(dem)
stats.votes_rep = votes(rep)
stats.votes_ind = votes(ind)

document.getElementById("tbody1").innerHTML += `<tr><td>Democrats</td>
                                                <td>${stats.nro_dem}</td>
                                                <td>${stats.votes_dem.toFixed(2)}%</td></tr> `

document.getElementById("tbody1").innerHTML += `<tr><td>Republicans</td>
                                                <td>${stats.nro_rep}</td>
                                                <td>${stats.votes_rep.toFixed(2)}%</td></tr> `

document.getElementById("tbody1").innerHTML += `<tr><td>Independients</td>
                                                <td>${stats.nro_ind}</td>
                                                <td>${stats.votes_ind.toFixed(2)}%</td></tr> `

document.getElementById("tbody1").innerHTML += `<tr><td>Total</td>
                                                <td>${datos.length}</td>
                                                <td></td></tr> `

function notNull(valor){if(valor == null){return ""} return valor}

stats["ten_pct"] = Math.round(datos.length * 0.10)

function filtrar(lista, orden, filtro){
    let limite = 0;
    let listaOrd=[]
    let listaFil=[]
    if(orden == true && filtro == true){
        listaOrd = lista.sort(function(a,b){
            if (a.missed_votes_pct > b.missed_votes_pct) {
                return 1;
                }
            if (a.missed_votes_pct < b.missed_votes_pct) {
                return -1;
                }
            // a must be equal to b
                return 0;
        })

        limite = listaOrd[stats["ten_pct"]].missed_votes_pct

        listaFil = listaOrd.filter(e => e.missed_votes_pct <= limite)
    }
    if(orden == false && filtro == true){
        listaOrd = lista.sort(function(a,b){
            if (a.missed_votes_pct < b.missed_votes_pct) {
                return 1;
                }
            if (a.missed_votes_pct > b.missed_votes_pct) {
                return -1;
                }
            // a must be equal to b
                return 0;
        })
        limite = listaOrd[stats["ten_pct"]].missed_votes_pct

        listaFil = listaOrd.filter(e => e.missed_votes_pct >= limite)
    }
    if(orden == true && filtro == false){
        listaOrd = lista.sort(function(a,b){
            if (a.votes_with_party_pct > b.votes_with_party_pct) {
                return 1;
                }
            if (a.votes_with_party_pct < b.votes_with_party_pct) {
                return -1;
                }
            // a must be equal to b
                return 0;
        })
        limite = listaOrd[stats["ten_pct"]].votes_with_party_pct

        listaFil = listaOrd.filter(e => e.votes_with_party_pct <= limite && e.votes_with_party_pct != 0)
    }
    if(orden == false && filtro == false){
        listaOrd = lista.sort(function(a,b){
            if (a.votes_with_party_pct < b.votes_with_party_pct) {
                return 1;
                }
            if (a.votes_with_party_pct > b.votes_with_party_pct) {
                return -1;
                }
            // a must be equal to b
                return 0;
        })
        limite = listaOrd[stats["ten_pct"]].votes_with_party_pct

        listaFil = listaOrd.filter(e => e.votes_with_party_pct >= limite) 
    }
    return listaFil
}

stats["bottom_attendance"] = filtrar(datos, true, true)
stats["top_attendance"] = filtrar(datos, false, true)
stats["bottom_loyalty"] = filtrar(datos, true, false)
stats["top_loyalty"] = filtrar(datos, false, false)

stats["bottom_attendance"].forEach(e=>{
    if(document.getElementById("tbody3")){
    document.getElementById("tbody3").innerHTML += `<tr><td><a href="${e.url}">${e.first_name} ${notNull(e.middle_name)}
    ${e.last_name}</td> <td> ${e.missed_votes}</a></td> <td>${e.missed_votes_pct}%`}
})

stats["top_attendance"].forEach(e=>{
    if(document.getElementById("tbody2")){
    document.getElementById("tbody2").innerHTML += `<tr><td><a href="${e.url}">${e.first_name} ${notNull(e.middle_name)}
    ${e.last_name}</a></td> <td> ${e.missed_votes}</td> <td>${e.missed_votes_pct}%`}
})

stats["bottom_loyalty"].forEach(e=>{
    if(document.getElementById("tbody4")){
    document.getElementById("tbody4").innerHTML+=`<tr><td><a href="${e.url}">${e.first_name} ${notNull(e.middle_name)}
    ${e.last_name}</a></td> <td> ${Math.round((e.total_votes * e.votes_with_party_pct)/100)}</td> <td>${e.votes_with_party_pct}%`}
})

stats["top_loyalty"].forEach(e=>{
    if(document.getElementById("tbody5")){
    document.getElementById("tbody5").innerHTML+=`<tr><td><a href="${e.url}">${e.first_name} ${notNull(e.middle_name)}
    ${e.last_name}</a></td> <td> ${Math.round((e.total_votes * e.votes_with_party_pct)/100)}</td> <td>${e.votes_with_party_pct}%`}
})
}