let senadores=sdata.results[0].members;

let td ="";

senadores.forEach(function(value){
    td+="<tr>"+"<td>"+
    "<a href="+value.url+">"
    +value.first_name+" ";
    if(value.middle_name!= null){
    td += value.middle_name+" ";
    }
    td += value.last_name+"</a>"+"</td>";
    td+="<td>"+value.party+"</td>";
    td+="<td>"+value.state+"</td>";
    td+="<td>"+value.seniority+"</td>";
    td+="<td>"+value.votes_with_party_pct+"%"+"</td>"+"</tr>";

});

document.getElementById("senate-data").innerHTML += td;

function filtrar(){
    document.getElementById("senate-data").innerHTML = "";
    let republican = congress[0].checked;
    let democrat = congress[1].checked;
    let independent = congress[2].checked;

    if(republican && democrat && independent){
        document.getElementById("senate-data").innerHTML = senadores.map();  
    } 
}


