                      //FUNTIONS
                    // =============

function great(){
    console.log("kamal pasha")
}
great()

function massage(){
    return "this is simple function"
}
console.log(massage())

function sum(A:number, B:number){
    return A+B
}
let result =sum(5,7)
console.log(result)

function subtract(A:number,B:number){
    return A-B
}
console.log(subtract(5,2))


function calculateArea(a:number,b:number){

    return a / b
}

console.log(calculateArea(3,1) )
console.log(calculateArea(3,6) )
console.log(calculateArea(3,5) )
console.log(calculateArea(8,4) )


                //ARROW FUNCTION 

let myName=()=>{
    console.log("imtiaz")
}
myName()


let ans=()=>{
    return "this is arrow funtion "
}
console.log(ans()) 







//DEFULT PERAMETORS
//===================

 let myCoding=(massage="there is many error in my coding")=>{
     return massage
}
 console.log(myCoding("how are you")) 
