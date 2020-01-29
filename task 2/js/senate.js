let senadores=sdata.results[0].members;

function notNull(valor){if(valor == null){return ""} return valor}

function filtrar(){
    document.getElementById("senate-data").innerHTML = "";
    let check = document.getElementsByClassName("congress");
    let senadoresFiltrados = ""
    let select=[]
    let state = document.getElementById("select-senator").value
    for(let i=0;check.length; i++){
        if(check[i].checked){
            senadoresFiltrados = senadores.filter(e => e.party == check[i].value)
            document.getElementById("senate-data").innerHTML+= senadores.filter(e => e.party == check[i].value && (e.state == state || state == "all")).map((e)=>
            `<tr> <td> <a href="${e.url}">${e.first_name} ${notNull(e.middle_name)} ${e.last_name} </a></td>
            <td> ${e.party} </td>
            <td> ${e.state} </td>
            <td> ${e.seniority} </td>
            <td> ${e.votes_with_party_pct}% </td> </tr>`
            ).join("");
            
            senadoresFiltrados.forEach(function(e){
                
                if(select.indexOf(e.state) == (-1)){
                    select.push(e.state)
                    
                }
                document.getElementById("select-senator").innerHTML = `<option value ="all">All</option>`
                document.getElementById("select-senator").innerHTML += select.map(e => 
                    `<option value="${e}" class="state">${e}</option>`).join("")
            });
            

                document.getElementById("select-senator").value = state
        }
        }
    }
document.getElementById("rep").addEventListener("click", filtrar)
document.getElementById("dem").addEventListener("click", filtrar)
document.getElementById("ind").addEventListener("click", filtrar)
document.getElementById("select-senator").addEventListener("change", filtrar)

filtrar()


