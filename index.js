function writeCards([Guadalupe, Ollie, Aki]){ 
    const message = [
    "Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!"
]
return message;


}

function countDown(x){
    for(let i=x; i >=0; i--){
        console.log(i)
    }
    
}



console.log(countDown(10));