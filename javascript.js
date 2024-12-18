function getComputerChoice(){
    let result = Math.random()
    if(result<=0.3){
        console.log("Rock!")
    }
    else{
        if(result>0.3&&result<=0.6){
            console.log("Paper!")
        }
        else{
            console.log("Scissors!")
        }
    }
}

console.log(getComputerChoice())