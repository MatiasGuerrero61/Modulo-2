let datos = data.results[0].members
let stats = {
    nro_dem: 0,
    nro_rep: 0,
    nro_ind: 0,
    nro_total:0,
    votes_dem: 0,
    votes_rep: 0,
    votes_ind: 0,
    votes_total: 0,
    top_attendance:[],
    bottom_attendance:[],

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





let datosOrd= datos.sort(function (a, b) {
    if (a.missed_votes_pct > b.missed_votes_pct) {
        return 1;
        }
    if (a.missed_votes_pct < b.missed_votes_pct) {
        return -1;
        }
    // a must be equal to b
        return 0;
});
function notNull(valor){if(valor == null){return ""} return valor}

let diezPct = (datos.length * 0.10)

let valorFiltro = datosOrd[diezPct].missed_votes_pct

datosOrd.filter(e => e.missed_votes_pct <= valorFiltro).forEach(e =>{
    stats["bottom_attendance"].push(e)
})

stats["bottom_attendance"].forEach(e=>{
    document.getElementById("tbody3").innerHTML += `<tr><td>${e.first_name} ${notNull(e.middle_name)}
    ${e.last_name}</td> <td> ${e.missed_votes}</td> <td>${e.missed_votes_pct}%`
})

let valorFiltro2 = datosOrd[datosOrd.length - diezPct].missed_votes_pct

datosOrd.filter(e => e.missed_votes_pct >= valorFiltro2).forEach(e =>{
    stats["top_attendance"].push(e)
})

stats["top_attendance"].forEach(e=>{
    document.getElementById("tbody2").innerHTML += `<tr><td>${e.first_name} ${notNull(e.middle_name)}
    ${e.last_name}</td> <td> ${e.missed_votes}</td> <td>${e.missed_votes_pct}%`
})                                                