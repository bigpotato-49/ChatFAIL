let letter = "a";
const el = document.getElementById("el");
for(let i= 0; i<Math.floor(Math.random()*50+50);i++){
    for(let j = 0; j<Math.floor(Math.random()*3+5);j++){
        if(letter === "q"){
           letter = "u";
        }
        else{
            letter = randomLetter();
        }
        console.log(letter);
        el.innerHTML += letter;
    }
    console.log(" ");
    el.innerHTML += " ";
}


function randomLetter(){
    let n = Math.random()*100;
    if(n<12.7){
        return("e");
    }
    if(n<21.8){
        return("t");
    }
    if(n<30){
        return("a");
    }
    if(n<37.5){
        return("o");
    }
    if(n<44.5){
        return("i");
    }
    if(n<51.2){
        return("n");
    }
    if(n<59.5){
        return("s");
    }
    if(n<59.5+6.1){
        return("h");
    }
    if(n<59.5+6.1+6){
        return("r");
    }
    if(n<59.5+6.1+6+4.3){
        return("d");
    }
    if(n<59.5+6.1+6+4.3+4){
        return("l");
    }
    if(n<59.5+6.1+4.3+4+2.8){
        return("c");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8){
        return("u");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4){
        return("m");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4){
        return("w");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2){
        return("f");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2){
        return("g");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2){
        return("y");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2+1.9){
        return("p");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2+1.9+1.5){
        return("b");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2+1.9+1.5+0.98){
        return("v");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2+1.9+1.5+0.98+0.77){
        return("k");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2+1.9+1.5+0.98+0.77+0.15){
        return("j");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2+1.9+1.5+0.98+0.77+0.3){
        return("x");
    }
    if(n<59.5+6.1+4.3+4+2.8+2.8+2.4+2.4+2.2+2+2+1.9+1.5+0.98+0.77+0.3+0.09){
        return("q");
    }
    else{
        return("z");
    }
}