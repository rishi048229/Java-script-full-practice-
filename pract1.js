let num = prompt("Enter the number")

if (num % 5 === 0){
    console.log(num,"yes multiple");
} else {
    console.log(num ,"not a multiple");
}



let marks =prompt("Enter your score (0-100):");
let grade;
if(marks >= 80 && marks <= 100){
    console.log(marks,"A Grade")
} else if(marks >=70 && marks<= 89) {
    console.log(marks,"B Grade")
} else if(marks>= 60 && marks <=69){
    console.log(marks, "C Grade")
} else if(marks >= 50 && marks <= 59){
    console.log(marks,"C Grade")
} else if(marks>= 0 && marks<= 49){
    console.log(marks,"F Grade")

}
