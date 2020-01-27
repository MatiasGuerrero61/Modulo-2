let senadores=sdata.results[0].members;

function notNull(valor){if(valor == null){return ""} return valor}

function filtrarPorPartido(){
    document.getElementById("senate-data").innerHTML = "";
    document.getElementById("select-senator").innerHTML = `<option value="all"> All </option>`
    let check = document.getElementsByClassName("congress");
    let senadoresFiltrados = ""
    let select=[]
    for(let i=0;check.length; i++){
        if(check[i].checked){
            senadoresFiltrados = senadores.filter(e => e.party == check[i].value)
            document.getElementById("senate-data").innerHTML+= senadores.filter(e => e.party == check[i].value).map((e)=>
            `<tr> <td> ${e.first_name} ${notNull(e.middle_name)} ${e.last_name} </td>
            <td> ${e.party} </td>
            <td> ${e.state} </td>
            <td> ${e.seniority} </td>
            <td> ${e.votes_with_party_pct}% </td> </tr>`
            ).join("");

            senadoresFiltrados.forEach(function(e){
                if(select.indexOf(e.state) == (-1)){
                    select.push(e.state)
                }
            });
            document.getElementById("select-senator").innerHTML += select.map(e => 
                `<option value="${e}" class="state">${e}</option>`).join("")
        }
        }
    }
document.getElementById("rep").addEventListener("click", filtrarPorPartido)
document.getElementById("dem").addEventListener("click", filtrarPorPartido)
document.getElementById("ind").addEventListener("click", filtrarPorPartido)




