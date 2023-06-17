var banner = document.getElementById("shirt");
var next = 0;


//SLIDER
function frente(){
    next ++;
    if(next < 7 ){
    document.getElementById("shirt").src= `../img/${next}.png`;
    } else{
        next = 0
    }
    }

    function tras(){
    next ++;
    if(next < 7 ){
    document.getElementById("shirt").src= `../img/${next}.png`;
    } else{
        next = 0
    }
    }

//MENU
    

function menu(){
    document.getElementsByClassName("drop")[0].classList.toggle("drop_back");
}

function sumir(){
    document.getElementsByClassName("drop")[0].classList.toggle("drop_back");
}



