let congressmen=hdata.results[0].members;

let td ="";

congressmen.forEach(function(value){
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

document.getElementById("house-data").innerHTML += td;