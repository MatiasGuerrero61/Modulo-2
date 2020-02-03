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