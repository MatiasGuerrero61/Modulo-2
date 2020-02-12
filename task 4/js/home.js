    function change(){
        let read = document.getElementById("read");
        
        if(read.dataset.change == "true"){
            read.innerHTML = "Ver Menos";
            read.dataset.change = false;
        }
        else {
            read.innerHTML = "Ver Mas";
            read.dataset.change = true;
        }
    }
    
    window.onload = change;
    document.querySelector("#read").addEventListener("click", change);