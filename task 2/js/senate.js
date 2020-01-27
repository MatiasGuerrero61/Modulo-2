let senadores=sdata.results[0].members;

function notNull(valor){if(valor == null){return ""} return valor}

function filtrar(){
    document.getElementById("senate-data").innerHTML = "";
    let check = document.getElementsByClassName("congress");
    for(let i=0;check.length; i++){
        if(check[i].checked){
            document.getElementById("senate-data").innerHTML+= senadores.filter(e => e.party == check[i].value).map((e)=>
            `<tr> <td> ${e.first_name} ${notNull(e.middle_name)} ${e.last_name} </td>
            <td> ${e.party} </td>
            <td> ${e.state} </td>
            <td> ${e.seniority} </td>
            <td> ${e.votes_with_party_pct}% </td> </tr>`
            ).join("");
        }
    }
}
document.getElementById("rep").addEventListener("click", filtrar)
document.getElementById("dem").addEventListener("click", filtrar)
document.getElementById("ind").addEventListener("click", filtrar)


