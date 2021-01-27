function showTime() {
    var dt = new Date();
    var hora = dt.getHours();
    var minutos = dt.getMinutes();
    var segundos = dt.getSeconds();
    var frase = document.getElementById("frase");
    
    
    if(hora >= 6 && hora < 12) {            
   
        frase.innerText = "Bom dia!";
        document.getElementById("img-bg").src="css/day.jpg";        
        
    }

    else if (hora >= 12 && hora < 18) {
        frase.innerText = "Boa tarde!";
        document.getElementById("img-bg").src="css/afternoon.jpg";
    }

    else if (hora >= 18 && hora <= 23) {
        frase.innerText = "Boa noite!";
        document.getElementById("img-bg").src="css/night.jpg";
    }

    else if (hora >= 0 && hora < 6) {
        frase.innerText = "Boa madrugada!";
        document.getElementById("img-bg").src="css/daybreak.jpg";
        
    }

    if(hora<10) hora= "0"+hora;
    if(minutos<10) minutos= "0"+minutos;
    if(segundos<10) segundos= "0"+segundos;

    var horario = hora+":"+minutos+":"+segundos;

    document.getElementById('timer').innerHTML= horario;

}

function iniciarTempo() {

    setInterval(showTime,1000);
    
    
}